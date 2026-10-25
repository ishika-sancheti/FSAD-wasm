const Module=require('./calculations.js');
Module().then((instance)=> {
    const sum=instance._add(5,7);
    console.log("Result from web-asm - sum: " + sum);

    const product=instance._multiply(5,7);
    console.log("Result from web-asm - product: " + product);
} );