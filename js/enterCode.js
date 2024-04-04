function onSubmit() {
    var inputPassword = document.getElementById("password").value;
    if (inputPassword === "0512") {
        window.location.href = "../html/loading.html";
    } else {
        const msg = document.getElementById('alert');
        msg.style.opacity = 1;
        document.getElementById('password').value = '';
    }
}