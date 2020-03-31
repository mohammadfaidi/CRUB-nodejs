const fs = require('fs')

let data = "hello world"

fs.writeFile('C:/Users/Dell/Desktop/Output.txt', data, (err) => {

    if (err) throw err;
})

console.log('after writing a file');


fs.readFile('C:/Users/Dell/Desktop/Output.txt', 'utf8', function (err, contents) {
    console.log(contents);
});

console.log('after calling readFile');

const path = 'C:/Users/Dell/Desktop/Output.txt'

try {
    fs.unlinkSync(path)
} catch(err) {
    console.error(err)
}

console.log('after deleting a file');
