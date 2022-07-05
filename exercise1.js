const { exec } = require('node:child_process')

const  command = exec('jshell -q 2.txt')


var array=[]

command.stdout.on('data', output => {

    // the output data is captured and printed in the callback
    array.push(output.toString())

    console.log("Output: ", output.toString())
    console.log(array)
    for(var i=0;i<array.length;i++){
        if(array[0]=="jshell> "){
            console.log("syntax mistake...")
            break
        }else if (array[0]=="10\n"){
            console.log("Correct!!!!")
            break

        }else{
            console.log("Incorrect Output!!!")
            break
        }
        // if(array[i]=="1\n"){
        //     console.log("right!!!!")
        //     break
        // }else{
        //     console.log("Wrong!!!")
        // }
    }


})