"use strict";

const options = {
    name : 'Test',
    width : 1024,
    height : 1024,
    colors : {
        border : 'black' ,
        bg : 'red'
    },
    makeTest : function (){
        console.log ('Test');
    }

};
options.makeTest();


// console.log (options);

// console.log (options ['colors']["border"]);

// const {border,bg} = options.colors;
// console.log (border);

// console.log (Object.keys (options).length);