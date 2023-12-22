// 공통 부분
function setViewportHeight() {
    document.body.style.height = window.innerHeight + "px";
    document.body.style.display = "flex";
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
    main_bgm.volume = 0.9;
    story_bgm.loop = true;
    story_bgm.volume = 0.9;

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
    window.open('http://fantastrick.co.kr/rooms/firstfoundbride/', '_blank');
})
abel_button.addEventListener('click', function () {
    window.open('http://fantastrick.co.kr/rooms/bookofduat/', '_blank');
})
login_enter.addEventListener('click', function () {
    var inputValue = login_input.value;
    if (inputValue === "7934") {
        document.body.style.backgroundImage = "url('assets/bg2.gif')";
        cain.style.display = "flex";
        login.style.display = "none";
        bgmChange(1);
        setTimeout(function () {
            scifi_login_message.style.animation = "slideIn 0.25s ease-out";
            scifi_login_message.style.display = "flex";
        }, 500);
    } else {
        wrong();
    }
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
        scifi_login_hint_button.style.display = "flex";
        scifi_login_message.style.display = "flex";
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
    if (inputValue === "JORMUNGAND" || inputValue === "Jormungand" || inputValue === "jormungand" || inputValue === "요르문간드") {
        click_sound.play();
        jormungand.style.display = "flex";
        cain.style.display = "none";
        setTimeout(function () {
            jormungand_popup.style.display = "flex";
        }, 500);
        bgmChange(2);
    } else {
        wrong();
    }
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
answer1_2_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_1_3.style.display = "flex";
    jormungand_page_1_2.style.display = "none";
})
answer1_1_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_2.style.display = "flex";
    jormungand_page_1_1.style.display = "none";
})
answer1_3_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_2.style.display = "flex";
    jormungand_page_1_3.style.display = "none";
})

answer2_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_3_1.style.display = "flex";
    jormungand_page_2.style.display = "none";
})
answer2_2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_3_2.style.display = "flex";
    jormungand_page_2.style.display = "none";
})

answer3_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_4.style.display = "flex";
    jormungand_page_3_1.style.display = "none";
})
answer3_2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_4.style.display = "flex";
    jormungand_page_3_2.style.display = "none";
})

answer4_hint.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_4.style.animation = "popup-animation 0.1s ease-in-out";
    jormungand_hint_4.style.display = "flex";
})
jormungand_hint_close_4.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_4.style.animation = "popup-close-animation 0.25s ease-in-out";
    setTimeout(function () {
        jormungand_hint_4.style.display = "none";
        jormungand_hint_context_4.src = "assets/jor_echo_4_hint.png";
        jormungand_hint_back_4.style.display = "none";
        jormungand_hint_next_4.style.display = "flex";
    }, 200);
})
jormungand_hint_next_4.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_context_4.src = "assets/jor_echo_4_answer.png";
    jormungand_hint_back_4.style.display = "flex";
    jormungand_hint_next_4.style.display = "none";
})
jormungand_hint_back_4.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_context_4.src = "assets/jor_echo_4_hint.png";
    jormungand_hint_next_4.style.display = "flex";
    jormungand_hint_back_4.style.display = "none";
})
answer4_enter.addEventListener('click', function () {
    var inputValue = jormungand_input_4.value;
    if (inputValue === "FUTURE" || inputValue === "future") {
        click_sound.play();
        jormungand_page_5.style.display = "flex";
        jormungand_page_4.style.display = "none";
    } else {
        wrong();
    }
})

answer5_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_6.style.display = "flex";
    jormungand_page_5.style.display = "none";
})

answer6_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_7.style.display = "flex";
    jormungand_page_6.style.display = "none";
})

answer7_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_8_1.style.display = "flex";
    jormungand_page_7.style.display = "none";
})
answer7_2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_8_2.style.display = "flex";
    jormungand_page_7.style.display = "none";
})

answer8_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_9.style.display = "flex";
    jormungand_page_8_1.style.display = "none";
})
answer8_2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_9.style.display = "flex";
    jormungand_page_8_2.style.display = "none";
})

answer9_1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_10.style.display = "flex";
    jormungand_page_9.style.display = "none";
})

answer10_hint.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_10.style.animation = "popup-animation 0.1s ease-in-out";
    jormungand_hint_10.style.display = "flex";
})
jormungand_hint_close_10.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_10.style.animation = "popup-close-animation 0.25s ease-in-out";
    setTimeout(function () {
        jormungand_hint_10.style.display = "none";
        jormungand_hint_context_10.src = "assets/jor_echo_10_hint.png";
        jormungand_hint_back_10.style.display = "none";
        jormungand_hint_next_10.style.display = "flex";
    }, 200);
})
jormungand_hint_next_10.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_context_10.src = "assets/jor_echo_10_answer.png";
    jormungand_hint_back_10.style.display = "flex";
    jormungand_hint_next_10.style.display = "none";
})
jormungand_hint_back_10.addEventListener('click', function () {
    click_sound.play();
    jormungand_hint_context_10.src = "assets/jor_echo_10_hint.png";
    jormungand_hint_next_10.style.display = "flex";
    jormungand_hint_back_10.style.display = "none";
})
answer10_enter.addEventListener('click', function () {
    var inputValue = jormungand_input_10.value;
    if (inputValue === "전당포근처" || inputValue === "전당포 근처") {
        click_sound.play();
        jormungand_page_11.style.display = "flex";
        jormungand_page_10.style.display = "none";
    } else {
        wrong();
    }
})