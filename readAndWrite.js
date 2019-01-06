

//reads the input file and capitalizes the data in it
//stores the new data in a variable and writes the new data in the output file
const fs = require('fs');
const readline = require('readline');
var newData;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Input file: ', (readFile) => {
    rl.question('Output file: ', (writeFile) => {
        fs.readFile(`./${readFile}`, (error, data) => {
            if (error) {
                console.log(error.message);
                return;
            };

            newData = data.toString().toUpperCase();

            fs.writeFile(`${writeFile}`, newData, (error) => {
                if (error) {
                    console.log(error.message);
                    return;
                };
                console.log(`Wrote to file output.txt`);
                console.log(`As a result, output.txt should now contain the text ${newData} `)

                rl.close();
            });

        });
    });
});


