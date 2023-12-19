// modify ThreadPool size based on the CPU cores
const OS = require('os');
console.log("CPU CORES:", OS.cpus().length);
process.env.UV_THREADPOOL_SIZE = OS.cpus().length; //8

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});
// this being called almost instantly without waiting for the first function to finish
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

// this one takes longer as libuv default ThreadPool size is 4 threads
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});