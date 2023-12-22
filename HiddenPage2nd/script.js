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
    main_bgm.volume = 0.7;
    story_bgm.loop = true;
    story_bgm.volume = 0.7;

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

sound_warning_button.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('assets/BG.gif')";
    sound_warning.style.display = "none";
    authentication_check.style.display = "flex";
    bgmChange(1);
})

authentication_check_confirm.addEventListener('click', function () {
    var inputValue = authentication_check_input.value;
    if (inputValue === "e3b1" || inputValue === "E3B1") {
        click_sound.play();
        main_menu.style.display = "flex";
        authentication_check.style.display = "none";
    } else {
        wrong();
    }
})

main_menu_button1.addEventListener('click', function () {
    click_sound.play();
    alert("준비 중인 기능입니다.");
})
main_menu_button2.addEventListener('click', function () {
    click_sound.play();
    main_menu_popup.style.display = "flex";
})
main_menu_button3.addEventListener('click', function () {
    click_sound.play();
    alert("준비 중인 기능입니다.");
})
main_menu_button4.addEventListener('click', function () {
    window.location.href = '../';
})
main_menu_popup_close.addEventListener('click', function () {
    click_sound.play();
    main_menu_popup.style.display = "none";
})
main_menu_popup_confirm.addEventListener('click', function () {
    click_sound.play();
    story_page_1.style.animation = "popup-animation 0.1s ease-in-out";
    story_page_1.style.display = "flex";
    main_menu_popup.style.display = "none";
    bgmChange(2);

    setTimeout(function () {
        story_page_1.style.animation = "none";
    }, 1000);
})

const pageElements = document.querySelectorAll('.story_page');
const closeElements = document.querySelectorAll('.story_page_close');
const backElements = document.querySelectorAll('.story_page_back');
const nextElements = document.querySelectorAll('.story_page_next');
const hintElements = document.querySelectorAll('.story_page_hint');
const hintCloseElements = document.querySelectorAll('.story_page_hint_close');
const hintBackElements = document.querySelectorAll('.story_page_hint_back');
closeElements.forEach(function (e) {
    e.addEventListener('click', function () {
        click_sound.play();
        e.parentElement.style.display = "none";
        bgmChange(1);
    });
});
backElements.forEach(function (e) {
    e.addEventListener('click', function () {
        click_sound.play();
        const elementIdIndex = Number(e.parentElement.id.split('_')[2]);
        const previousPageElement = document.getElementById(`story_page_${elementIdIndex-1}`);
        previousPageElement.style.display = "flex";
        e.parentElement.style.display = "none";
    });
});
nextElements.forEach(function (e) {
    e.addEventListener('click', function () {
        click_sound.play();
        const elementIdIndex = Number(e.parentElement.id.split('_')[2]);
        const nextPageElement = document.getElementById(`story_page_${elementIdIndex+1}`);
        nextPageElement.style.display = "flex";
        e.parentElement.style.display = "none";
    });
});
hintElements.forEach(function (e) {
    e.addEventListener('click', function () {
        click_sound.play();
        const elementIdIndex = Number(e.parentElement.id.split('_')[2]);
        const hintPageElement = document.getElementById(`story_page_${elementIdIndex}hint`);
        hintPageElement.style.animation = "popup-animation 0.2s ease-in-out";
        hintPageElement.style.zIndex = "5";
        hintPageElement.style.display = "flex";
    });
});
hintCloseElements.forEach(function (e) {
    e.addEventListener('click', function () {
        click_sound.play();
        e.parentElement.style.animation = "popup-close-animation 0.25s ease-in-out";
        setTimeout(function () {
            e.parentElement.style.display = "none";
        }, 200);
    });
});

story_page_3_confirm.addEventListener('click', function () {
    var inputValue = story_page_3_input.value;
    if (inputValue === "12512") {
        click_sound.play();
        story_page_4.style.display = "flex";
        story_page_3.style.display = "none";
    } else {
        wrong();
    }
})

function puzzleRefresh() {
    image_group1.style.top = '170px';
    image_group1.style.left = '305px';
    image_group2.style.top = '200px';
    image_group2.style.left = '350px';
    image_group3.style.top = '170px';
    image_group3.style.left = '320px';
    image_group4.style.top = '170px';
    image_group4.style.left = '321px';
    image_group5.style.top = '170px';
    image_group5.style.left = '410px';
    image_group6.style.top = '169px';
    image_group6.style.left = '350px';
    image_group7.style.top = '185px';
    image_group7.style.left = '395px';
}

story_page_6_confirm.addEventListener('click', function () {
    var inputValue = story_page_6_input.value;
    if (inputValue === "LIFE" || inputValue === "Life" || inputValue === "life") {
        click_sound.play();
        story_page_7.style.display = "flex";
        story_page_6.style.display = "none";
        puzzleRefresh();
    } else {
        wrong();
    }
})
story_page_6_close.addEventListener('click', function () {
    puzzleRefresh();
});
story_page_6_back.addEventListener('click', function () {
    puzzleRefresh();
});
story_page_6_hint.addEventListener('click', function () {
    setTimeout(function () {
        puzzleRefresh();
    }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
    const draggableImages = document.querySelectorAll('.draggable_image');
    let activeImageGroup = null;
    let initialX, initialY;

    function mousedown(e) {
        activeImageGroup = e.target.parentElement;
        initialX = e.clientX - activeImageGroup.offsetLeft;
        initialY = e.clientY - activeImageGroup.offsetTop;
        activeImageGroup.style.zIndex = 2;
    }
    function touchstart(e) {
        activeImageGroup = e.target.parentElement;
        initialX = e.touches[0].clientX - activeImageGroup.offsetLeft;
        initialY = e.touches[0].clientY - activeImageGroup.offsetTop;
        activeImageGroup.style.zIndex = 2;
    }

    function mousemove(e) {
        if (activeImageGroup) {
            e.preventDefault();
            const x = e.clientX - initialX;
            const y = e.clientY - initialY;
            activeImageGroup.style.left = x + 'px';
            activeImageGroup.style.top = y + 'px';
        }
    }
    function touchmove(e) {
        if (!activeImageGroup) return;
        e.preventDefault();
        const x = e.touches[0].clientX - initialX;
        const y = e.touches[0].clientY - initialY;
        activeImageGroup.style.left = x + 'px';
        activeImageGroup.style.top = y + 'px';
    }

    function end() {
        if(activeImageGroup){
            activeImageGroup.style.zIndex = '';
        }
        activeImageGroup = null;
    }

    draggableImages.forEach(function (image) {
        image.addEventListener('touchstart', touchstart);
        image.addEventListener('touchmove', touchmove);
        image.addEventListener('touchend', end);
        image.addEventListener('mousedown', mousedown);
    });
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', end);
});

story_page_9_confirm.addEventListener('click', function () {
    var inputValue = story_page_9_input.value;
    if (inputValue === "MASTERMIND" || inputValue === "MasterMind" || inputValue === "masterMind" || inputValue === "mastermind") {
        click_sound.play();
        story_page_10.style.display = "flex";
        story_page_9.style.display = "none";
    } else {
        wrong();
    }
})

story_page_11_confirm.addEventListener('click', function () {
    var inputValue = story_page_11_input.value;
    if (inputValue === "TRUTH" || inputValue === "Truth" || inputValue === "truth") {
        click_sound.play();
        story_page_12.style.display = "flex";
        story_page_11.style.display = "none";
    } else {
        wrong();
    }
})

story_page_13_confirm.addEventListener('click', function () {
    var inputValue = story_page_13_input.value;
    if (inputValue === "원액") {
        click_sound.play();
        story_page_14.style.display = "flex";
        story_page_13.style.display = "none";
    } else {
        wrong();
    }
})

story_page_15_confirm.addEventListener('click', function () {
    var inputValue = story_page_15_input.value;
    if (inputValue === "성물제어실") {
        click_sound.play();
        story_page_16.style.display = "flex";
        story_page_15.style.display = "none";
    } else {
        wrong();
    }
})

story_page_18_confirm.addEventListener('click', function () {
    var inputValue = story_page_18_input.value;
    if (inputValue === "ECHO" || inputValue === "Echo" || inputValue === "echo") {
        click_sound.play();
        story_page_19.style.display = "flex";
        story_page_18.style.display = "none";
    } else {
        wrong();
    }
})

story_page_19_delete.addEventListener('click', function () {
    click_sound.play();
    var glitchElement = document.querySelector('.glitch');
    glitchElement.classList.toggle('active');

    setTimeout(function () {
        glitchElement.classList.remove('active');
        var gifContainer = document.querySelector(".gif-container");
        var gifImage = new Image();
        gifImage.src = "assets/turnOn.gif";
        gifContainer.appendChild(gifImage);
        gifContainer.style.display = "flex";

        setTimeout(function () {
            gifImage.src = "";
            gifImage.src = "assets/hacker.gif";
            setTimeout(function () {
                gifImage.src = "";
                gifImage.src = "assets/turnOff.gif";
                setTimeout(function () {
                    gifContainer.style.display = "none";
                    gifContainer.removeChild(gifImage);
                    story_page_19.style.display = "none";
                    story_page_popup.style.display = "flex";
                }, 2000);
            }, 5000);
        }, 300);
    }, 2500);
})
story_page_popup_close.addEventListener('click', function () {
    story_page_popup.style.display = "none";
    click_sound.play();
    bgmChange(1);
})
story_page_popup_confirm.addEventListener('click', function () {
    story_page_popup.style.display = "none";
    click_sound.play();
    bgmChange(1);
})