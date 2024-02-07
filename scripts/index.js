// template_y698ovr
// service_qdtq2im
// CxCgkxHMCd-GpEDsM

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs 
        .sendForm (
            "service_qdtq2im",
            "template_y698ovr",
            event.target,
            "CxCgkxHMCd-GpEDsM"
    ) .then (() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        // console.log("it worked!")
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly on sijerina10@gmail.com"
        );
    });
}

let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }   
}