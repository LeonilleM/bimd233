let carArr = [
];

fetch('./Assets/files/carData.txt')
    .then(response => response.text())
    .then(data => {

        let lines = data.trim().split('\n');
        for (let i = 0; i < lines.length; i += 5) {
            let car = [lines[i].trim(), // Make
            lines[i + 1].trim(),        // Model
            lines[i + 2].trim(),        // Color
            parseInt(lines[i + 3]),     // Year
            parseInt(lines[i + 4].slice(1).replace(',', ''))  // Price (convert to number)
            ];
            carArr.push(car);
        }

        let carDataHtml = '';
        for (let i = 0; i < carArr.length; i++) {
            carDataHtml += '<tr>';
            carDataHtml += '<td>' + carArr[i][0] + '</td>';
            carDataHtml += '<td>' + carArr[i][1] + '</td>';
            carDataHtml += '<td>' + carArr[i][2] + '</td>';
            carDataHtml += '<td>' + carArr[i][3] + '</td>';
            carDataHtml += '<td>$' + carArr[i][4].toLocaleString() + '</td>';
            carDataHtml += '</tr>';
        }
        document.getElementById('carTable').innerHTML = carDataHtml;
    });