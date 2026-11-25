const PRECOS = {
  pequeno: { banho: 40, tosa: 50, hidratacao: 45, pacote: 100 },
  medio:   { banho: 50, tosa: 60, hidratacao: 55, pacote: 120 },
  grande:  { banho: 60, tosa: 70, hidratacao: 65, pacote: 140 }
};

const SERVICOS = [
  { valor: "banho", label: "Banho" },
  { valor: "tosa", label: "Tosa" },
  { valor: "hidratacao", label: "Hidratação" },
  { valor: "pacote", label: "Pacote completo" }
];

const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");
const animaisBody = document.getElementById("animaisBody");

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarLinhaAnimal() {
  const tr = document.createElement("tr");
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
        ${SERVICOS.map(s => `<option value="${s.valor}">${s.label}</option>`).join("")}
      </select>
    </td>
    <td class="animal-preco">R$ 0,00</td>
    <td><button type="button" class="remover">Remover</button></td>
  `;

  tr.querySelector(".remover").addEventListener("click", () => {
    tr.remove();
    recalcular();
  });

  tr.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", recalcular);
  });

  animaisBody.appendChild(tr);
  recalcular();
}

function calcularTotais() {
  const linhas = [...animaisBody.querySelectorAll("tr")];
  let subtotal = 0;

  linhas.forEach(tr => {
    const porte = tr.querySelector(".animal-porte").value;
    const servico = tr.querySelector(".animal-servico").value;
    const preco = PRECOS[porte][servico];
    tr.querySelector(".animal-preco").textContent = formatarMoeda(preco);
    subtotal += preco;
  });

  const qtd = linhas.length;
  const percentual = qtd >= 3 ? 0.10 : qtd === 2 ? 0.05 : 0;
  const desconto = subtotal * percentual;
  const total = subtotal - desconto;

  document.getElementById("subtotal").textContent = formatarMoeda(subtotal);
  document.getElementById("desconto").textContent = formatarMoeda(desconto);
  document.getElementById("total").textContent = formatarMoeda(total);
}

function recalcular() {
  calcularTotais();
}

// Login simulado
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === "admin" && senha === "1234") {
    sessionStorage.setItem("logado", "true");
    loginView.classList.add("hidden");
    appView.classList.remove("hidden");
  } else {
    document.getElementById("loginErro").textContent = "Usuário ou senha inválidos.";
  }
});

document.getElementById("sair").addEventListener("click", () => {
  sessionStorage.removeItem("logado");
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
});

document.getElementById("addAnimal").addEventListener("click", criarLinhaAnimal);

document.getElementById("atendimentoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const tutor = document.getElementById("tutorNome").value;
  const telefone = document.getElementById("tutorTelefone").value;
  const total = document.getElementById("total").textContent;

  document.getElementById("resumo").classList.remove("hidden");
  document.getElementById("resumo").innerHTML = `
    <h2>Atendimento registrado</h2>
    <p><strong>Tutor:</strong> ${tutor}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Total:</strong> ${total}</p>
  `;
});

// Se já estiver logado na sessão
if (sessionStorage.getItem("logado") === "true") {
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");
}

criarLinhaAnimal();