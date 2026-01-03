/* TAMBAHAN PRIBADI */
function sendMail(event){
    event.preventDefault(); // Mencegah Reload Halaman

    // Ambil Nilai Input
    let name = document.getElementById("name").value.trim();
	let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validasi Kosong
    if (!name || !lastname || !email || !subject || !message) {
        alert("Failed to send message! Please fill in all fields!");
        return;
    }

    // Validasi Format Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email address! Please enter a valid email like example@gmail.com !");
        return;
    }

    let parms = {
        name: name,
		lastname: lastname,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_scarecrowstudio", "template_scarecrowstudio", parms)
        .then(function(response) {
            alert("Thank you for your message! Your time and interest are truly appreciated!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email! Please try again!");
            console.log("FAILED...", error);
        });
}