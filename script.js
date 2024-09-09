// let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let inputText = document.getElementById("input-text");
let img = document.getElementById("img");
let qrText = document.getElementById("qr-text");
let qrLink;

btn2.addEventListener('click', () => {
    if(inputText.value !== "")
    {
        qrText.innerText = "QR Code:";
        qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=7fffd4&data=";
        qrLink += inputText.value;
        img.src = qrLink;
        inputText.value = "";
        // btn1.classList.remove("hidden");
    }
    else
        alert("Please enter a text or link");
});

// btn1.addEventListener('click', () => {
//     const link = document.getElementById('link');
//     link.href = qrLink;
//     link.download = 'downloaded-image.jpg'; // Name of the file to be downloaded
//     link.click(); // Simulate a click to trigger the download
// });