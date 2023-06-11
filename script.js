function setViewportHeight() {
    var bodyElement = document.querySelector("body");
    bodyElement.style.height = window.innerHeight + "px";
}
window.addEventListener("load", setViewportHeight);
window.addEventListener("resize", setViewportHeight);

function init() {
    story_page_3_input.setAttribute("autocomplete", "off");
    story_page_6_input.setAttribute("autocomplete", "off");
    story_page_9_input.setAttribute("autocomplete", "off");
    story_page_11_input.setAttribute("autocomplete", "off");
    story_page_13_input.setAttribute("autocomplete", "off");
    story_page_15_input.setAttribute("autocomplete", "off");
    story_page_18_input.setAttribute("autocomplete", "off");
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
    if (inputValue === "12512") {
        story_page_4.style.display = "flex";
        story_page_3.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_3_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
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
    if (inputValue === "LIFE") {
        story_page_7.style.display = "flex";
        story_page_6.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_6_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
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
    if (inputValue === "MASTERMIND" || inputValue === "MasterMind" || inputValue === "mastermind") {
        story_page_10.style.display = "flex";
        story_page_9.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_9_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
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
    if (inputValue === "TRUTH" || inputValue === "Truth" || inputValue === "truth") {
        story_page_12.style.display = "flex";
        story_page_11.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_11_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
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
    if (inputValue === "원액") {
        story_page_14.style.display = "flex";
        story_page_13.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_13_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
})

story_page_14_close.addEventListener('click', function () {
    story_page_14.style.display = "none";
    bgmChange(1);
})
story_page_14_back.addEventListener('click', function () {
    story_page_13.style.display = "flex";
    story_page_14.style.display = "none";
})
story_page_14_next.addEventListener('click', function () {
    story_page_15.style.display = "flex";
    story_page_14.style.display = "none";
})

story_page_15_close.addEventListener('click', function () {
    story_page_15.style.display = "none";
    bgmChange(1);
})
story_page_15_back.addEventListener('click', function () {
    story_page_14.style.display = "flex";
    story_page_15.style.display = "none";
})
story_page_15_confirm.addEventListener('click', function () {
    var inputValue = story_page_15_input.value;
    if (inputValue === "성물제어실") {
        story_page_16.style.display = "flex";
        story_page_15.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_15_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
})

story_page_16_close.addEventListener('click', function () {
    story_page_16.style.display = "none";
    bgmChange(1);
})
story_page_16_back.addEventListener('click', function () {
    story_page_15.style.display = "flex";
    story_page_16.style.display = "none";
})
story_page_16_next.addEventListener('click', function () {
    story_page_17.style.display = "flex";
    story_page_16.style.display = "none";
})

story_page_17_close.addEventListener('click', function () {
    story_page_17.style.display = "none";
    bgmChange(1);
})
story_page_17_back.addEventListener('click', function () {
    story_page_16.style.display = "flex";
    story_page_17.style.display = "none";
})
story_page_17_next.addEventListener('click', function () {
    story_page_18.style.display = "flex";
    story_page_17.style.display = "none";
})

story_page_18_close.addEventListener('click', function () {
    story_page_18.style.display = "none";
    bgmChange(1);
})
story_page_18_back.addEventListener('click', function () {
    story_page_17.style.display = "flex";
    story_page_18.style.display = "none";
})
story_page_18_confirm.addEventListener('click', function () {
    var inputValue = story_page_18_input.value;
    if (inputValue === "ECHO") {
        story_page_19.style.display = "flex";
        story_page_18.style.display = "none";
    } else {
        wrong_sound.play();
    }
})
story_page_18_hint.addEventListener('click', function () {
    alert("힌트 리소스 없음");
})

story_page_19_close.addEventListener('click', function () {
    story_page_19.style.display = "none";
    bgmChange(1);
})
story_page_19_back.addEventListener('click', function () {
    story_page_18.style.display = "flex";
    story_page_19.style.display = "none";
})
story_page_19_delete.addEventListener('click', function () {
    //alert("핑거 스냅 효과 리소스 없음");

    var gifContainer = document.querySelector(".gif-container");
    var gifImage = new Image();
    gifImage.src = "assets/hacker.gif";
    
    gifContainer.appendChild(gifImage);
    gifContainer.style.display = "flex";
    
    setTimeout(function() {
      gifContainer.style.display = "none";
      gifContainer.removeChild(gifImage);
      story_page_19.style.display = "none";
      story_page_popup.style.display = "flex";
    }, 6500);
})
story_page_popup_close.addEventListener('click', function () {
    story_page_popup.style.display = "none";
    bgmChange(1);
})
story_page_popup_confirm.addEventListener('click', function () {
    story_page_popup.style.display = "none";
    bgmChange(1);
})