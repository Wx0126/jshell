// const { exec } = require('node:child_process');
// temp=`echo 'String.format("%06d", 19)'|jshell`

// exec('echo $temp', (err, output) => {
//     // once the command has completed, the callback function is called
//     if (err) {
//         // log and return if we encounter an error
//         console.error("could not execute command: ", err)
//         return
//     }
//     // log the output received from the command
//     console.log("Output: \n", output)
// })


const { exec } = require('node:child_process')

const  command = exec('jshell --feedback concise')
const input="System.out.println(\"A Java Tutor\")\n"
command.stdin.write(input)
command.stdin.end()
const array=[]
var count=0
command.stdout.on('data', output => {
    array.push(output.toString())


    // the output data is captured and printed in the callback

    // console.log("Output: ", output.toString())

    console.log(array)

    // count++;
    // if(count==4){
    //     console.log(array.slice(-2))     

    // }
    console.log(array[2])
})

