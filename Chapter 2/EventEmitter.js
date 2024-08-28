var util = require("util");
var eventEmitter = require("events").EventEmitter;
var fs = require("fs");

// Cria a classe isntanciando duas propriedades: name e file
function InputChecker(name, file) {
  this.name = name;
  this.writeStream = fs.createWriteStream("./" + file + ".txt", {
    flags: "a",
    encoding: "utf8",
    mode: 0o666,
  });
}

// a classe InputChecker recebe todas as propriedades e métodos do objeto eventEmitter por herança
util.inherits(InputChecker, eventEmitter);

//  Amarração do método check para verificar a entrada e decidir qual evento emitir.
// O this. referesde a classe InputChecker

InputChecker.prototype.check = function check(input) {
  // trim extraneous white space
  let command = input.trim().substr(0, 3);

  // process command
  // if wr, write input to file
  if (command == "wr:") {
    this.emit("write", input.substr(3, input.length));

    // if en, end process
  } else if (command == "en:") {
    this.emit("end");

    // just echo back to standard output
  } else {
    this.emit("echo", input);
  }
};

// testing new object and event handling
let ic = new InputChecker("Vitor", "output");

// Criando o evento de escrita no arquivo que será criado
ic.on("write", function (data) {
  this.writeStream.write(data, "utf8");
});

// Criando o evento de apresentação do conteúdo do arquivo
ic.on("echo", function (data) {
  process.stdout.write(ic.name + " wrote " + data);
});

// Criando o evento de encerramento do processo
ic.on("end", function () {
  process.exit();
});

// capture input after setting encoding
process.stdin.setEncoding("utf8");
process.stdin.on("readable", function () {
  let input = process.stdin.read();
  if (input !== null) ic.check(input);
});
