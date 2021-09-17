const process = require('child_process');
const iconv = require('iconv-lite');
const os = require('os');
console.log('os.platform(): ', os.platform());

let s;
switch (os.platform()) {
    case 'darwin':
        s = process.spawn('traceroute', ['s.kwaixiaodian.com']);
        break;
    case 'win32':
        // s = process.spawn(c, [d]);
    break
}

s.stdout.setEncoding('binary');
s.stderr.setEncoding('binary');

s.stdout.on('data', (chunk) => {
    console.log(`chunk: ${chunk}`);
    // const str = iconv.decode(Buffer.from(chunk, 'binary'), 'cp936');
});

s.stderr.on('data', (chunk) => {
    const str = iconv.decode(Buffer.from(chunk, 'binary'), 'cp936');
});

s.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});