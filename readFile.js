
// prompts user to choose a file to read. processes input and gives data of file in all caps as output.
//catches error and displays it to user
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What file do you want to read? ', (answer) => {
    var file = answer;
    fs.readFile(`./${file}`, (error, data) => {
        if (error){
            console.log(error.message)
            return;
        }
        console.log(`File Data: ${data.toString().toUpperCase()}`);
    });

    rl.close();
})





