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

function bgmChange(track) {
    main_bgm.loop = true;
    story_bgm.loop = true;

    if (track === 1) {
        story_bgm.pause();
        main_bgm.currentTime = 0;
        main_bgm.play();
    } else if (track === 2) {
        main_bgm.pause();
        story_bgm.currentTime = 0;
        story_bgm.play();
    } else {
        main_bgm.pause();
        story_bgm.pause();
    }
}

function wrong() {
    wrong_sound.play();
    wrong_effect.style.display = "flex";
    setTimeout(function () {
        wrong_effect.style.display = "none";
    }, 400);
}

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
    if (inputValue === "7934") {
        document.body.style.backgroundImage = "url('assets/bg2.gif')";
        cain.style.display = "flex";
        login.style.display = "none";
        // bgmChange(1);
        setTimeout(function () {
            scifi_login_message.style.animation = "slideIn 0.25s ease-out";
            scifi_login_message.style.display = "flex";
        }, 500);
    } else {
        wrong();
    }
})

// 로그인 이후 파트