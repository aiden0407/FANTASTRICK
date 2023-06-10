var main_bgm = document.querySelector("#main_bgm");
var story_bgm = document.querySelector("#story_bgm");
var wrong_sound = document.querySelector("#wrong_sound");

var sound_warning = document.getElementById('sound_warning');
var sound_warning_button = document.getElementById('sound_warning_button');

var authentication_check = document.getElementById('authentication_check');
var authentication_check_button = document.getElementById('authentication_check_button');

var main_menu = document.getElementById('main_menu');
var main_menu_button1 = document.getElementById('main_menu_button1');
var main_menu_button2 = document.getElementById('main_menu_button2');
var main_menu_button3 = document.getElementById('main_menu_button3');
var main_menu_button4 = document.getElementById('main_menu_button4');
var main_menu_popup = document.getElementById('main_menu_popup');
var main_menu_popup_close = document.getElementById('main_menu_popup_close');
var main_menu_popup_confirm = document.getElementById('main_menu_popup_confirm');

var story_page_1 = document.getElementById('story_page_1');
var story_page_1_close = document.getElementById('story_page_1_close');
var story_page_1_next = document.getElementById('story_page_1_next');

var story_page_2 = document.getElementById('story_page_2');
var story_page_2_close = document.getElementById('story_page_2_close');
var story_page_2_back = document.getElementById('story_page_2_back');
var story_page_2_next = document.getElementById('story_page_2_next');

var story_page_3 = document.getElementById('story_page_3');
var story_page_3_close = document.getElementById('story_page_3_close');
var story_page_3_back = document.getElementById('story_page_3_back');
var story_page_3_input = document.getElementById('story_page_3_input');
var story_page_3_confirm = document.getElementById('story_page_3_confirm');
var story_page_3_hint = document.getElementById('story_page_3_hint');

var story_page_4 = document.getElementById('story_page_4');
var story_page_4_close = document.getElementById('story_page_4_close');
var story_page_4_back = document.getElementById('story_page_4_back');
var story_page_4_next = document.getElementById('story_page_4_next');

var story_page_5 = document.getElementById('story_page_5');
var story_page_5_close = document.getElementById('story_page_5_close');
var story_page_5_back = document.getElementById('story_page_5_back');
var story_page_5_next = document.getElementById('story_page_5_next');

var story_page_6 = document.getElementById('story_page_6');
var story_page_6_close = document.getElementById('story_page_6_close');
var story_page_6_back = document.getElementById('story_page_6_back');
var story_page_6_input = document.getElementById('story_page_6_input');
var story_page_6_confirm = document.getElementById('story_page_6_confirm');
var story_page_6_hint = document.getElementById('story_page_6_hint');

var story_page_7 = document.getElementById('story_page_7');
var story_page_7_close = document.getElementById('story_page_7_close');
var story_page_7_back = document.getElementById('story_page_7_back');
var story_page_7_next = document.getElementById('story_page_7_next');

var story_page_8 = document.getElementById('story_page_8');
var story_page_8_close = document.getElementById('story_page_8_close');
var story_page_8_back = document.getElementById('story_page_8_back');
var story_page_8_next = document.getElementById('story_page_8_next');

var story_page_9 = document.getElementById('story_page_9');
var story_page_9_close = document.getElementById('story_page_9_close');
var story_page_9_back = document.getElementById('story_page_9_back');
var story_page_9_input = document.getElementById('story_page_9_input');
var story_page_9_confirm = document.getElementById('story_page_9_confirm');
var story_page_9_hint = document.getElementById('story_page_9_hint');

var story_page_10 = document.getElementById('story_page_10');
var story_page_10_close = document.getElementById('story_page_10_close');
var story_page_10_back = document.getElementById('story_page_10_back');
var story_page_10_next = document.getElementById('story_page_10_next');

var story_page_11 = document.getElementById('story_page_11');
var story_page_11_close = document.getElementById('story_page_11_close');
var story_page_11_back = document.getElementById('story_page_11_back');
var story_page_11_input = document.getElementById('story_page_11_input');
var story_page_11_confirm = document.getElementById('story_page_11_confirm');
var story_page_11_hint = document.getElementById('story_page_11_hint');

var story_page_12 = document.getElementById('story_page_12');
var story_page_12_close = document.getElementById('story_page_12_close');
var story_page_12_back = document.getElementById('story_page_12_back');
var story_page_12_next = document.getElementById('story_page_12_next');

var story_page_13 = document.getElementById('story_page_13');
var story_page_13_close = document.getElementById('story_page_13_close');
var story_page_13_back = document.getElementById('story_page_13_back');
var story_page_13_input = document.getElementById('story_page_13_input');
var story_page_13_confirm = document.getElementById('story_page_13_confirm');
var story_page_13_hint = document.getElementById('story_page_13_hint');

function init() {
    story_page_3_input.setAttribute("autocomplete", "off");
    story_page_6_input.setAttribute("autocomplete", "off");
    story_page_9_input.setAttribute("autocomplete", "off");
    story_page_11_input.setAttribute("autocomplete", "off");
}

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

sound_warning_button.addEventListener('click', function () {
    sound_warning.style.display = "none";
    bgmChange(1);
})
authentication_check_button.addEventListener('click', function () {
    authentication_check.style.display = "none";
    main_menu.style.display = "flex";
})

main_menu_button1.addEventListener('click', function () {
    alert("준비 중인 기능입니다.");
})
main_menu_button2.addEventListener('click', function () {
    main_menu_popup.style.display = "flex";
})
main_menu_button3.addEventListener('click', function () {
    alert("준비 중인 기능입니다.");
})
main_menu_button4.addEventListener('click', function () {
    alert("준비 중인 기능입니다.");
})
main_menu_popup_close.addEventListener('click', function () {
    main_menu_popup.style.display = "none";
})
main_menu_popup_confirm.addEventListener('click', function () {
    story_page_1.style.display = "flex";
    main_menu_popup.style.display = "none";
    bgmChange(2);
})

story_page_1_close.addEventListener('click', function () {
    story_page_1.style.display = "none";
    bgmChange(1);
})
story_page_1_next.addEventListener('click', function () {
    story_page_2.style.display = "flex";
    story_page_1.style.display = "none";
})

story_page_2_close.addEventListener('click', function () {
    story_page_2.style.display = "none";
    bgmChange(1);
})
story_page_2_back.addEventListener('click', function () {
    story_page_1.style.display = "flex";
    story_page_2.style.display = "none";
})
story_page_2_next.addEventListener('click', function () {
    story_page_3.style.display = "flex";
    story_page_2.style.display = "none";
})

story_page_3_close.addEventListener('click', function () {
    story_page_3.style.display = "none";
    bgmChange(1);
})
story_page_3_back.addEventListener('click', function () {
    story_page_2.style.display = "flex";
    story_page_3.style.display = "none";
})
story_page_3_confirm.addEventListener('click', function () {
    var inputValue = story_page_3_input.value;
    if (inputValue === "") {
    //if (inputValue === "12512") {
        story_page_4.style.display = "flex";
        story_page_3.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_3_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})

story_page_4_close.addEventListener('click', function () {
    story_page_4.style.display = "none";
    bgmChange(1);
})
story_page_4_back.addEventListener('click', function () {
    story_page_3.style.display = "flex";
    story_page_4.style.display = "none";
})
story_page_4_next.addEventListener('click', function () {
    story_page_5.style.display = "flex";
    story_page_4.style.display = "none";
})

story_page_5_close.addEventListener('click', function () {
    story_page_5.style.display = "none";
    bgmChange(1);
})
story_page_5_back.addEventListener('click', function () {
    story_page_4.style.display = "flex";
    story_page_5.style.display = "none";
})
story_page_5_next.addEventListener('click', function () {
    story_page_6.style.display = "flex";
    story_page_5.style.display = "none";
})

story_page_6_close.addEventListener('click', function () {
    story_page_6.style.display = "none";
    bgmChange(1);
})
story_page_6_back.addEventListener('click', function () {
    story_page_5.style.display = "flex";
    story_page_6.style.display = "none";
})
story_page_6_confirm.addEventListener('click', function () {
    var inputValue = story_page_6_input.value;
    if (inputValue === "") {
    //if (inputValue === "LIFE") {
        story_page_7.style.display = "flex";
        story_page_6.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_6_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})

story_page_7_close.addEventListener('click', function () {
    story_page_7.style.display = "none";
    bgmChange(1);
})
story_page_7_back.addEventListener('click', function () {
    story_page_6.style.display = "flex";
    story_page_7.style.display = "none";
})
story_page_7_next.addEventListener('click', function () {
    story_page_8.style.display = "flex";
    story_page_7.style.display = "none";
})

story_page_8_close.addEventListener('click', function () {
    story_page_8.style.display = "none";
    bgmChange(1);
})
story_page_8_back.addEventListener('click', function () {
    story_page_7.style.display = "flex";
    story_page_8.style.display = "none";
})
story_page_8_next.addEventListener('click', function () {
    story_page_9.style.display = "flex";
    story_page_8.style.display = "none";
})

story_page_9_close.addEventListener('click', function () {
    story_page_9.style.display = "none";
    bgmChange(1);
})
story_page_9_back.addEventListener('click', function () {
    story_page_8.style.display = "flex";
    story_page_9.style.display = "none";
})
story_page_9_confirm.addEventListener('click', function () {
    var inputValue = story_page_9_input.value;
    if (inputValue === "") {
    //if (inputValue === "MASTERMIND") {
        story_page_10.style.display = "flex";
        story_page_9.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_9_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})

story_page_10_close.addEventListener('click', function () {
    story_page_10.style.display = "none";
    bgmChange(1);
})
story_page_10_back.addEventListener('click', function () {
    story_page_9.style.display = "flex";
    story_page_10.style.display = "none";
})
story_page_10_next.addEventListener('click', function () {
    story_page_11.style.display = "flex";
    story_page_10.style.display = "none";
})

story_page_11_close.addEventListener('click', function () {
    story_page_11.style.display = "none";
    bgmChange(1);
})
story_page_11_back.addEventListener('click', function () {
    story_page_10.style.display = "flex";
    story_page_11.style.display = "none";
})
story_page_11_confirm.addEventListener('click', function () {
    var inputValue = story_page_11_input.value;
    if (inputValue === "") {
    //if (inputValue === "TRUTH") {
        story_page_12.style.display = "flex";
        story_page_11.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_11_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})

story_page_12_close.addEventListener('click', function () {
    story_page_12.style.display = "none";
    bgmChange(1);
})
story_page_12_back.addEventListener('click', function () {
    story_page_11.style.display = "flex";
    story_page_12.style.display = "none";
})
story_page_12_next.addEventListener('click', function () {
    story_page_13.style.display = "flex";
    story_page_12.style.display = "none";
})

story_page_13_close.addEventListener('click', function () {
    story_page_13.style.display = "none";
    bgmChange(1);
})
story_page_13_back.addEventListener('click', function () {
    story_page_12.style.display = "flex";
    story_page_13.style.display = "none";
})
story_page_13_confirm.addEventListener('click', function () {
    var inputValue = story_page_13_input.value;
    if (inputValue === "") {
    //if (inputValue === "원액") {
        story_page_14.style.display = "flex";
        story_page_13.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_13_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})