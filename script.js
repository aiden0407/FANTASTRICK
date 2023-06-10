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
var story_page_3_confirm = document.getElementById('story_page_3_confirm');
var story_page_3_hint = document.getElementById('story_page_3_hint');
var story_page_3_back = document.getElementById('story_page_3_back');

function bgmChange(track) {
    main_bgm.loop = true;
    story_bgm.loop = true;

    if(track===1){
        story_bgm.pause();
        main_bgm.currentTime = 0;
        main_bgm.play();
    } else if(track===2) {
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

story_page_3_confirm.addEventListener('click', function () {
    //story_page_4.style.display = "flex";
    story_page_3.style.display = "none";
})

story_page_3_hint.addEventListener('click', function () {
    alert("힌트 리소스 부족");
})

story_page_3_back.addEventListener('click', function () {
    story_page_2.style.display = "flex";
    story_page_3.style.display = "none";
})