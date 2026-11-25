import { Tutor }       from './models/tutor.js';
import { Animal }      from './models/animal.js';
import { Atendimento } from './models/atendimento.js';
import { SERVICOS }    from './models/servico.js';

const loginView   = document.getElementById('loginView');
const appView     = document.getElementById('appView');
const animaisBody = document.getElementById('animaisBody');
const resumoEl    = document.getElementById('resumo');

const formatarMoeda = v =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Cria uma linha de animal na tabela ---
function criarLinhaAnimal() {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input class="animal-nome" required /></td>
    <td>
      <select class="animal-porte">
        <option value="pequeno">Pequeno</option>
        <option value="medio">Médio</option>
        <option value="grande">Grande</option>
      </select>
    </td>
    <td>
      <select class="animal-servico">
        ${SERVICOS.map(s => `<option value="${s.codigo}">${s.nome}</option>`).join('')}
      </select>
    </td>
    <td class="animal-preco">R$ 0,00</td>
    <td><button type="button" class="remover">Remover</button></td>
  `;

  tr.querySelector('.remover').addEventListener('click', () => {
    tr.remove();
    recalcular();
  });
  tr.querySelectorAll('select, .animal-nome')
    .forEach(el => el.addEventListener('change', recalcular));

  animaisBody.appendChild(tr);
  recalcular();
}

// --- Lê o formulário e monta o Atendimento ---
function lerAtendimento() {
  const tutor = new Tutor(
    document.getElementById('tutorNome').value.trim(),
    document.getElementById('tutorTelefone').value.trim()
  );

  const animais = [...animaisBody.querySelectorAll('tr')].map(tr => {
    const codigo  = tr.querySelector('.animal-servico').value;
    const servico = SERVICOS.find(s => s.codigo === codigo) ?? SERVICOS[0];
    return new Animal(
      tr.querySelector('.animal-nome').value.trim(),
      tr.querySelector('.animal-porte').value,
      servico
    );
  });

  return new Atendimento(tutor, animais);
}

// --- Recalcula preços das linhas e os totais ---
function recalcular() {
  const a = lerAtendimento();

  [...animaisBody.querySelectorAll('tr')].forEach((tr, i) => {
    tr.querySelector('.animal-preco').textContent = formatarMoeda(a.animais[i].preco);
  });

  document.getElementById('subtotal').textContent = formatarMoeda(a.subtotal);
  document.getElementById('desconto').textContent = formatarMoeda(a.desconto);
  document.getElementById('total').textContent    = formatarMoeda(a.total);
}

// --- Login ---
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('usuario').value.trim();
  const pass = document.getElementById('senha').value.trim();

  if (user === 'admin' && pass === '1234') {
    sessionStorage.setItem('logado', 'true');
    loginView.classList.add('hidden');
    appView.classList.remove('hidden');
    document.getElementById('loginErro').textContent = '';
  } else {
    document.getElementById('loginErro').textContent = 'Usuário ou senha inválidos.';
  }
});

// --- Sair ---
document.getElementById('sair').addEventListener('click', () => {
  sessionStorage.removeItem('logado');
  appView.classList.add('hidden');
  loginView.classList.remove('hidden');
});

// --- Adicionar animal ---
document.getElementById('addAnimal').addEventListener('click', criarLinhaAnimal);

// --- Registrar ---
document.getElementById('atendimentoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const r = lerAtendimento().resumo();

  resumoEl.innerHTML = `
    <h2>Atendimento registrado</h2>
    <p><strong>Tutor:</strong> ${r.tutor.nome} — ${r.tutor.telefone}</p>
    <ul>
      ${r.animais.map(a =>
        `<li>${a.nome} (${a.porte}, ${a.servico}) — ${formatarMoeda(a.preco)}</li>`
      ).join('')}
    </ul>
    <p>
      Subtotal: ${formatarMoeda(r.subtotal)} |
      Desconto: ${formatarMoeda(r.desconto)} |
      <strong>Total: ${formatarMoeda(r.total)}</strong>
    </p>
  `;
  resumoEl.classList.remove('hidden');
});

// --- Máscara de telefone: (11) 91234-5678 ---
const telefoneInput = document.getElementById('tutorTelefone');

telefoneInput.addEventListener('input', () => {
  let v = telefoneInput.value.replace(/\D/g, '').slice(0, 11);

  if (v.length > 10) {
    v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (v.length > 6) {
    v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (v.length > 2) {
    v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else if (v.length > 0) {
    v = v.replace(/^(\d{0,2})$/, '($1');
  }

  telefoneInput.value = v;
});

// --- Inicialização ---
if (sessionStorage.getItem('logado') === 'true') {
  loginView.classList.add('hidden');
  appView.classList.remove('hidden');
}
criarLinhaAnimal();