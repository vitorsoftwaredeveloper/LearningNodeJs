var fs = require("fs"),
  async = require("async");

// exemplo de execução funções assincronas sendo executadas paralelamente
// com o auxilio da lib Async com o método parallel que garante a sequencia
// correta da execução
async.parallel(
  {
    data1: function (callback) {
      fs.readFile("./data/fruit1.txt", "utf8", function (err, data) {
        console.log("fruit1");
        callback(err, data);
      });
    },
    data2: function (callback) {
      fs.readFile("./data/fruit2.txt", "utf8", function (err, data) {
        console.log("fruit2");
        callback(err, data);
      });
    },
    data3: function readData3(callback) {
      fs.readFile("./data/fruit3.txt", "utf8", function (err, data) {
        console.log("fruit3");
        callback(err, data);
      });
    },
  },
  function (err, result) {
    if (err) {
      console.log(err.message);
    } else {
      console.log(result);
    }
  }
);
