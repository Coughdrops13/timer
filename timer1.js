const args = process.argv.slice(2);
console.log(args);

args.forEach(time => {
  if (typeof(args[time]) !== 'number') {
    return;
  }
  if (args[time] < 0) {
    return
  }
    setTimeout(() => {
    process.stdout.write('\x07');
    }, (time * 1000))
});