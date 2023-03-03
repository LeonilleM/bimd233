let  countVal = 0;
const counterElement = document.getElementById('counterInput')

setInterval ( ()=>{
    countVal++;
    console.log(countVal)
    counterElement.innerText = countVal;
}
, 3000
)