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

// 로그인 파트
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
        cain.style.display = "flex";
        login.style.display = "none";
        // bgmChange(1);
        setTimeout(function () {
            scifi_login_message.style.animation = "slideIn 0.25s ease-out";
            scifi_login_message.style.display = "flex";
        }, 500);
    // } else {
    //     wrong();
    // }
})

// 카인 파트
scifi_login_message_confirm.addEventListener('click', function () {
    click_sound.play();
    cain_message_hint.style.animation = "popup-animation 0.1s ease-in-out";
    cain_message_hint.style.display = "flex";
    scifi_login_hint_button.style.display = "none";
    scifi_login_message.style.display = "none";
})
cain_message_hint_close.addEventListener('click', function () {
    click_sound.play();
    cain_message_hint.style.animation = "popup-close-animation 0.25s ease-in-out";
    setTimeout(function () {
        cain_message_hint.style.display = "none";
        cain_message_hint_popup.src = "assets/cain_message_1.png";
        cain_message_back.style.display = "none";
        cain_message_next.style.display = "flex";
        scifi_login_hint_button.style.display = "flex";
        scifi_login_message.style.display = "flex";
        cain_message_img1_button.style.display = "none";
        cain_message_img2_button.style.display = "none";
    }, 200);
})
cain_message_next.addEventListener('click', function () {
    click_sound.play();
    const urlString = cain_message_hint_popup.src;
    const fileName = urlString.split('/').pop();
    const index = Number(fileName.match(/(\d+)/)[0]);
    cain_message_hint_popup.src = `assets/cain_message_${index+1}.png`;
    cain_message_back.style.display = "flex";
    if (index===4) {
        cain_message_next.style.display = "none";
        cain_message_img1_button.style.display = "flex";
        cain_message_img2_button.style.display = "flex";
    }
})
cain_message_back.addEventListener('click', function () {
    click_sound.play();
    const urlString = cain_message_hint_popup.src;
    const fileName = urlString.split('/').pop();
    const index = Number(fileName.match(/(\d+)/)[0]);
    cain_message_hint_popup.src = `assets/cain_message_${index-1}.png`;
    cain_message_next.style.display = "flex";
    cain_message_img1_button.style.display = "none";
    cain_message_img2_button.style.display = "none";
    if (index===2) {
        cain_message_back.style.display = "none";
    }
})
cain_message_img1_button.addEventListener('click', function () {
    click_sound.play();
    cain_message_img1.style.display = "flex";
})
cain_message_img1.addEventListener('click', function () {
    click_sound.play();
    cain_message_img1.style.display = "none";
})
cain_message_img2_button.addEventListener('click', function () {
    click_sound.play();
    cain_message_img2.style.display = "flex";
})
cain_message_img2.addEventListener('click', function () {
    click_sound.play();
    cain_message_img2.style.display = "none";
})

scifi_login_hint_button.addEventListener('click', function () {
    click_sound.play();
    scifi_login_hint.style.animation = "popup-animation 0.1s ease-in-out";
    scifi_login_hint.style.display = "flex";
    scifi_login_hint_button.style.display = "none";
    scifi_login_message.style.display = "none";
})
scifi_login_hint_close.addEventListener('click', function () {
    click_sound.play();
    scifi_login_hint.style.animation = "popup-close-animation 0.25s ease-in-out";
    setTimeout(function () {
        scifi_login_hint.style.display = "none";
        scifi_login_hint_popup.src = "assets/cain_message_hint.png";
        scifi_login_back.style.display = "none";
        scifi_login_next.style.display = "flex";
        scifi_login_hint_button.style.display = "flex";
        scifi_login_message.style.display = "flex";
    }, 200);
})
scifi_login_next.addEventListener('click', function () {
    click_sound.play();
    scifi_login_hint_popup.src = "assets/cain_message_answer.png";
    scifi_login_back.style.display = "flex";
    scifi_login_next.style.display = "none";
})
scifi_login_back.addEventListener('click', function () {
    click_sound.play();
    scifi_login_hint_popup.src = "assets/cain_message_hint.png";
    scifi_login_next.style.display = "flex";
    scifi_login_back.style.display = "none";
})
scifi_login_enter.addEventListener('click', function () {
    var inputValue = scifi_login_input.value;
    // if (inputValue === "JORMUNGAND" || inputValue === "Jormungand" || inputValue === "jormungand" || inputValue === "요르문간드") {
        click_sound.play();
        jormungand.style.display = "flex";
        cain.style.display = "none";
        setTimeout(function () {
            jormungand_popup.style.display = "flex";
        }, 500);
        // bgmChange(2);
    // } else {
    //     wrong();
    // }
})

// 요르문간드 파트
jormungand_popup_confirm.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_1.style.display = "flex";
    jormungand_page_0.style.display = "none";
})
answer1_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_1_1.style.display = "flex";
    jormungand_page_1.style.display = "none";
})
answer1_2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_1_2.style.display = "flex";
    jormungand_page_1.style.display = "none";
})