function calcCircleGeometries(radius) {
    const area = Math.PI * radius * 2
    const circumference = 2 * Math.PI * radius
    const diameter = 2 * radius
    return [area, circumference, diameter]
 }
 

 //Used for returning the actual results into HTML FORMAT
 function displayCircleGeometries(radius, index) {
    const [area, circumference, diameter] = calcCircleGeometries(radius)
    const resultsDiv = document.getElementById(`results-${index}`)
    const html = `
      <p>Radius: ${radius}</p>
      <p>Area: ${area}</p>
      <p>Circumference: ${circumference}</p>
      <p>Diameter: ${diameter}</p>
    `
    resultsDiv.innerHTML = html
 }
 
 /*
      Three different forms for users to input different radius numbers
  */
 const form1 = document.forms[0]
 form1.addEventListener('submit', function(event) {
   event.preventDefault(); 
   const radiusInput = document.getElementById('radius-input-1')
   const radius = Number(radiusInput.value)
   displayCircleGeometries(radius, 1)
 });
 
 const form2 = document.forms[1]
 form2.addEventListener('submit', function(event) {
   event.preventDefault(); 
   const radiusInput = document.getElementById('radius-input-2')
   const radius = Number(radiusInput.value)
   displayCircleGeometries(radius, 2)
 });
 
 const form3 = document.forms[2]
 form3.addEventListener('submit', function(event) {
   event.preventDefault(); 
   const radiusInput = document.getElementById('radius-input-3')
   const radius = Number(radiusInput.value)
   displayCircleGeometries(radius, 3)
 });
 