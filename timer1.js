
args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  let seconds = args[i];
  if (seconds > 0) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, seconds * 1000);
  };
}
