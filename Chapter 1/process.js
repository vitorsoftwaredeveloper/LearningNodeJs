process.stdin.setEncoding("utf-8");

process.stdin.on("readable", () => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write(input);

    const command = input.trim();

    if (command === "exit") {
      console.log("entrando");
      process.exit(0);
    }
  }
});
