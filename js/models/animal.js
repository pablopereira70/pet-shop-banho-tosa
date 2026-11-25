export class Animal {
  constructor(nome, porte, servico) {
    this.nome = nome;
    this.porte = porte;
    this.servico = servico;
  }

  get preco() {
    return this.servico.getPreco(this.porte);
  }
}