AOS.init({
    duration: 700,
    easing: 'ease-in-sine',
    offset: 300
});
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const send = document.getElementById('send-btn');

send.addEventListener('click', () => {

    const payload = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        message: message.value,
    };

    fetch("https://protected-wave.herokuapp.com/contact", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
            alert(JSON.stringify(data))
        })
})

firstname.value = "";
lastname.value = "";
email.value = "";
message.value = "";