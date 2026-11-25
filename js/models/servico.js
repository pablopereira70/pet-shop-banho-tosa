export class Servico {
  constructor(codigo, nome, precosPorPorte) {
    this.codigo = codigo;
    this.nome = nome;
    this.precosPorPorte = precosPorPorte;
  }

  getPreco(porte) {
    return this.precosPorPorte[porte] ?? 0;
  }
}

export const SERVICOS = [
  new Servico('banho',      'Banho',           { pequeno: 40,  medio: 50,  grande: 60  }),
  new Servico('tosa',       'Tosa',            { pequeno: 50,  medio: 60,  grande: 70  }),
  new Servico('hidratacao', 'Hidratação',      { pequeno: 45,  medio: 55,  grande: 65  }),
  new Servico('pacote',     'Pacote completo', { pequeno: 100, medio: 120, grande: 140 }),
];