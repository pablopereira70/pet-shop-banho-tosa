export class Atendimento {
  constructor(tutor, animais = []) {
    this.tutor = tutor;
    this.animais = animais;
  }

  get subtotal() {
    return this.animais.reduce((soma, animal) => soma + animal.preco, 0);
  }

  calcularDesconto() {
    const quantidade = this.animais.length;
    const percentual = quantidade >= 3 ? 0.10 : quantidade === 2 ? 0.05 : 0;
    return this.subtotal * percentual;
  }

  get desconto() { return this.calcularDesconto(); }
  get total()    { return this.subtotal - this.desconto; }

  resumo() {
    return {
      tutor:    { nome: this.tutor.nome, telefone: this.tutor.telefone },
      animais:  this.animais.map(animal => ({
        nome: animal.nome, porte: animal.porte, servico: animal.servico.nome, preco: animal.preco
      })),
      subtotal: this.subtotal,
      desconto: this.desconto,
      total:    this.total
    };
  }
}