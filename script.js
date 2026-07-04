const form = document.getElementById("formMasukan");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Terima kasih! Masukan Anda telah berhasil dikirim.");

        form.reset();

    });
}