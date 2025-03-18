document.getElementById("submit").addEventListener("click", () => {
    const data = {
        nome: document.getElementById("name").value,
        age: document.getElementById("age").value,
        postal: document.getElementById("postal").value,
        taste: document.getElementById("taste").value,
        time: document.getElementById("time").value,
        ambiance: document.getElementById("ambiance").value
    };

    fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => {
        console.error("Error sending data:", error);
        alert("Error sending data");
    });
});
