Installation

1-nodejs
https://nodejs.org/en/download/?fbclid=IwAR0zufhEsXIdZvSXm6uFj2EVsatENtPA-c9rpyP-c9XRiU_FO5ACrT7Cm2c

2-phpstorm
https://www.jetbrains.com/phpstorm/promo/?gclid=Cj0KCQjw1Iv0BRDaARIsAGTWD1sS3oHqB-rVo-X1H2saQPcQg609IYAvbdiSBmm0UUpy9tpa5QOSticaApGPEALw_wcB&fbclid=IwAR2CuNd_TiwK231Yc2EppcxUK6IIbbWLV27AmLc8JWaXdwFS2oHf7bbPV5w

Matrials:
https://flaviocopes.com/how-to-remove-file-node/

https://code-maven.com/reading-a-file-with-nodejs

https://www.codecademy.com/articles/getting-user-input-in-node-js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});


