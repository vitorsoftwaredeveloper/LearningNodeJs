var fs = require("fs"),
  async = require("async");

// exemplo de execução funções assincronas sendo executadas sequencialmente
// com o auxilio da lib Async com o método waterfall que garante a sequencia
// correta da execução
async.waterfall(
  [
    function readData(callback) {
      fs.readFile("./data/data1.txt", "utf8", function (err, data) {
        console.log("passou readData");
        callback(err, data);
      });
    },
    function modify(text, callback) {
      var adjdata = text.replace(/somecompany\.com/g, "burningbird.net");
      console.log("passou modify");

      callback(null, adjdata);
    },
    function writeData(text, callback) {
      fs.writeFile("./data/data1.txt", text, function (err) {
        console.log("passou writeData");

        callback(err, text);
      });
    },
  ],
  function (err, result) {
    if (err) {
      console.log(err.message);
    } else {
      console.log(result);
    }
  }
);
