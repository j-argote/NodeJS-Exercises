
//prompts user for a url.
//retrieves html source code from url.
// promts user to input name of file to save the html source code.
const request = require('request');
const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
rl.question("url: ", (url) => {
    rl.question("Save to file: ", (sourceCodeFile) => {
        request.get(url, (error, response, html) => {
            if (error) {
                console.log(error.message);
                return;
            };

            var sourceCode = html;

            fs.writeFile(sourceCodeFile, sourceCode, (error) => {
                if (error){
                    console.log(error.message);
                    return;
                };
                console.log(`saved to file: ${sourceCodeFile}`);
                
                rl.close();
            });
        });
    });

});


