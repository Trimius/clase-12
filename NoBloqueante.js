let myTime = Date.now()
const endTime = myTime+3000
setTimeout(printTwo, 0)
function printTwo () {
    console.log(2)
}

console.log(1)
while(myTime<endTime){
    myTime = Date.now()
}


console.log(3)