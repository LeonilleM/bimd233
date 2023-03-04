let  countVal = 0;
let secPassed = 0;
const counterElement = document.getElementById('counterInput')
const secsCounter = document.getElementById('seconds')


setInterval( ()=>{
    secPassed++;
    secsCounter.innerHTML = `Seconds elapsed: ${secPassed}`
},1000)

setInterval ( ()=>{
    countVal++;
    counterElement.innerText = `My counter value: ${countVal}`
}
, 3000
)