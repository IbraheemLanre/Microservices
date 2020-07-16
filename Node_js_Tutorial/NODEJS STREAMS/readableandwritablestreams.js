const fs = require('fs');
const zlib = require('zlib') // for pipe chaining

const gzip = zlib.createGzip(); // for pipe chaining
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt.gz');



/* readStream.on('data', chunk => {
    writeStream.write(chunk);
});
 */

 // Reading stream using the method pipe
 //readStream.pipe(writeStream);

 // Chaining
 readStream.pipe(gzip).pipe(writeStream);