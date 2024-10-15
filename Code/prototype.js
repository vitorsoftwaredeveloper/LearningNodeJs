// temos aqui duas formas de definir funções para a construtora FactoryObj, sendo que a primeira, toda instáncia vai criar
// em memória uma nova função para sua utilização.

// Na segunda, todas as instãncias apontam para a mesma referência em memória

//opção 1 -------------------------------------------
function FactoryObj(name) {
  this.name = name;

  this.getName = function () {
    return this.name;
  };
}

//opção 2 -------------------------------------------

FactoryObj.prototype.getName = function () {
  return this.name;
};
