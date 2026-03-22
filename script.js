 function bookEvent(event){
    event.preventDefault();

    const data = {
        name: document.querySelector("#bname").value,
        phone: document.querySelector("#bphone").value,
        date: document.querySelector("#bdate").value,
        event: document.querySelector("#bevent").value,
        address: document.querySelector("#baddress").value
    };

    fetch("/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(data => alert(data));
}

function sendMessage(event){
    event.preventDefault();

    const data = {
        name: document.querySelector("#cname").value,
        email: document.querySelector("#cemail").value,
        message: document.querySelector("#cmessage").value
    };

    fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(data => alert(data));
}
