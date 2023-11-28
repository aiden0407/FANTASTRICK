// 공통 부분
function setViewportHeight() {
    document.body.style.height = window.innerHeight + "px";
}
window.addEventListener("load", setViewportHeight);
window.addEventListener("resize", setViewportHeight);

const inputBoxElements = document.querySelectorAll('.input_box');
function init() {
    inputBoxElements.forEach(function (e) {
        e.setAttribute("autocomplete", "off");
    });
}

const images = document.getElementsByTagName('img');
Array.from(images).forEach((image) => {
  image.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
});

// 로그인 이전 파트
const loginBackElements = document.querySelectorAll('.login_page_back');
const loginNextElements = document.querySelectorAll('.login_page_next');
loginBackElements.forEach(function (e) {
    e.addEventListener('click', function () {
        const elementIdIndex = Number(e.parentElement.id.split('_')[2]);
        const previousPageElement = document.getElementById(`login_page_${elementIdIndex-1}`);
        previousPageElement.style.display = "flex";
        e.parentElement.style.display = "none";
    });
});
loginNextElements.forEach(function (e) {
    e.addEventListener('click', function () {
        const elementIdIndex = Number(e.parentElement.id.split('_')[2]);
        const nextPageElement = document.getElementById(`login_page_${elementIdIndex+1}`);
        nextPageElement.style.display = "flex";
        e.parentElement.style.display = "none";
    });
});
eden_button.addEventListener('click', function () {
    window.location.href = 'http://fantastrick.co.kr/rooms/firstfoundbride/';
})
abel_button.addEventListener('click', function () {
    window.location.href = 'http://fantastrick.co.kr/rooms/bookofduat/';
})
here_button_1.addEventListener('click', function () {
    // window.location.href = '인스타링크';
})
here_button_2.addEventListener('click', function () {
    login_hint.style.animation = "popup-animation 0.1s ease-in-out";
    login_hint.style.display = "flex";
})
login_hint_close.addEventListener('click', function () {
    login_hint.style.animation = "popup-close-animation 0.25s ease-in-out";
    setTimeout(function () {
        login_hint.style.display = "none";
    }, 200);
})
login_enter.addEventListener('click', function () {
    var inputValue = login_input.value;
    // if (inputValue === "7934") {
        document.body.style.backgroundImage = "url('assets/bg2.gif')";
        jormungand.style.display = "flex";
        login.style.display = "none";
    // } else {
    //     wrong_sound.play();
    // }
})

// 로그인 이후 파트