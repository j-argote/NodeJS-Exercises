const fs = require('fs');
const request = require('request');
const gm = require('gm');

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
}

// gm(request(options), (error, response, imageData)=>{
//     if (error){
//         console.log(error.message)
//     }
//     fs.writeFile('original.png', imageData, (error)=>{
//         if (error){
//             console.log(error.message);
//             return;
//         };
//         console.log('saved original')

//         gm('original.png').resizeExact(240, 240).write('resize240x240', (error)=>{
//             if (error){
//                 console.log(error.message)
//             }
//             console.log('done')
//         })
//     });
// });


gm(request(options)).write('resize240x240', (error)=>{
    if (error){
        console.log(error.message);
    }
    console.log('done')
})