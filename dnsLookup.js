
//prompts user to input a domain name to lookup.
//takes input and outputs the domain name's ip address
const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Type a domain name: ', (domainName) => {
    dns.lookup(`${domainName}`, (error, address) => {
        if (error){
            console.log(error.message);
            return;
        };
        console.log(`IP Address: ${address}`)

        rl.close();
    });
});

