let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceId = "service_i902t9f";
    const templateId = "template_7qch4pg";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById("name").value = "",
                document.getElementById("email").value = "",
                document.getElementById("subject").value = "",
                document.getElementById("message").value = ""
            console.log(res);

            alert("Your message sent successfully");
        })
        .catch(error => console.log(error));

}


