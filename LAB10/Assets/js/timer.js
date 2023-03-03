let  countVal = 0;
const counterElement = document.getElementById('counterInput')

setInterval(1000);

setInterval ( ()=>{
    countVal++;
    console.log(countVal)
    counterElement.innerText = `My counter value: ${countVal} seconds: ${seconds}`
    counter
}
, 3000
)