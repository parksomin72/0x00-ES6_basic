console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
  process.stdin.end();
});

process.stdin.on('end', () => {
  // The program will exit automatically after process.stdin.end() is called.
});
