function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(`Email: ${username}`);
    console.log(`Password: ${password}`);

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `Email: ${username}<br>Password: ${password}`;
}

