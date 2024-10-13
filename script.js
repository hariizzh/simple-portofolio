let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if (top >= offset - height / 3) {
            let id = sec.getAttribute('id');
            // console.log('Condition met:', id);
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // navLinks.forEach((links) => {
            //     links.classList.remove('active');
            //     // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            // })
        }
        // console.log('after met:', id);
    })
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const setDarkLightMode = () => {
    // Cara1
    const icon = document.getElementById('icon-dark-light');
    document.body.classList.toggle('darkMode')
    if (document.body.classList.contains('darkMode')) {
        icon.src = "./img/sun.png"
    } else {
        icon.src = "./img/moon.png"
    }

    // Cara2 
    // if (mode) {
    //     document.body.setAttribute('id', 'darkMode')
    // } else {
    //     document.body.setAttribute('id', '')

    // }
}

function sendEmail(e) {
    e.preventDefault()
    const messageInBody = `
        Name: ${document.getElementById('fullNameContact').value} <br> <br>
        Email: ${document.getElementById('emailContact').value} <br> <br>
        Phone Number: ${document.getElementById('phoneNumberContact').value} <br> <br>
        Message: ${document.getElementById('messageContact').value}
    
    `


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "legendpalu12@gmail.com",
        Password: "539D4430B67439E11D88CE8DF0C50EEA2193",
        To: 'legendpalu12@gmail.com',
        From: 'microzz27@gmail.com',
        Subject: document.getElementById('subjectContact').value,
        Body: `
            Message from Contact Client in Web Portofolio: 
            <br> <br>
            ${messageInBody}
        `
    }).then(
        message => alert(message)
    ).catch(error => {
        alert("Failed to send email: " + error);
        console.log(error)
    });
}