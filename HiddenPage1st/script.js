window.onload = function () {
    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function () {
                var index = list.indexOf(this);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            };
            list.push(img);
            img.src = array[i];
        }
    }
    preloadImages([
        "https://i.ibb.co/9s5X2bm/jarvis1.gif",
        "https://i.ibb.co/mDW9K4D/jarvis2.gif",
        "https://i.ibb.co/G7rTXqQ/bg-login.png",
        "https://i.ibb.co/0tFg9jH/letter.png",
        "https://i.ibb.co/zmwwLzL/bg-answer.png",
        "https://i.ibb.co/4WcNn7r/bg-page.jpg",
        "https://i.ibb.co/swnRMmP/object-play.jpg",
        "https://i.ibb.co/SxsNgLx/bg-subpage.png",
        "https://i.ibb.co/98WW3n6/rotate.png",
        "http://fantastrick.co.kr/wp-content/uploads/2021/08/card.png",
        "https://i.ibb.co/PMTDFKc/quiz2.png",
        "https://i.ibb.co/0YY136f/quiz3.png",
        "https://i.ibb.co/Vmvw78x/quiz4.png",
        "https://i.ibb.co/z27wHgm/quiz6.png",
        "https://i.ibb.co/TcWcVqd/quiz5.png",
        "https://i.ibb.co/C7DVSxG/headphone.png",
        "https://i.ibb.co/drbdydT/letter1.gif",
        "https://i.ibb.co/TvYyMwy/letter2.png"
    ]);

    var before_chk = document.querySelector("#before_chk");
    var ready = document.querySelector("#ready_btn");
    before_chk.style.opacity = "1";
    setTimeout(function () {
        ready.style.opacity = "1";
    }, 2000);

    var startLogin = document.querySelector("#start_btn");

    startLogin.addEventListener(
        "click",
        function () {
            var loginArea = document.querySelector("#login_area");
            loginArea.style.display = "block";
            document.querySelector("#login_pw").focus();
            this.style.display = "none";
        },
        false
    );
};

var bgm1 = document.querySelector("#bgm1");
var bgm2 = document.querySelector("#bgm2");
var errSe = document.querySelector("#errSe");
var rdBar = 0;
var before = document.querySelector("#before_load");
var title = document.querySelector("#title");
var bgImg = document.querySelector("#bg-wrap");
var bgLoading = document.querySelector(".loading");
var bgLoaded = document.querySelector(".loaded");
var loadArea = document.querySelector("#loading_area");
var startArea = document.querySelector("#start_area");
bgm1.volume = 0.1;
bgm2.volume = 0.1;

function fadeOut(audio) {
    // TweenMax.to(sym.$('music’), 5, {volume:.5});
    //TweenMax.to($("#music"), 2, {volume:.1});
    TweenMax.to(audio, 1, { volume: 0.1 });
    //audio.volume =.1;
    audio.volume = 0.1;
    audio.pause();
    audio.currentTime = 0;
    //alert("caca");
}

function fadeIn(audio) {
    audio.volume = 0.1;
    audio.loop = true;
    audio.play();
    // TweenMax.to(sym.$('music’), 5, {volume:.5});
    //TweenMax.to($("#music"), 2, {volume:.1});        
    TweenMax.to(audio, 1, { volume: 0.6 });
    //audio.volume =.1;

    //alert("caca");
}

function move() {
    if (rdBar == 0) {
        rdBar = 1;
        var elem = document.querySelector("#loadBar");
        var width = 1;
        var id = setInterval(frame, 10);
        var pNum = document.querySelector("#pNum");

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                rdBar = 0;
                var change = setTimeout(function () {
                    loadArea.style.display = "none";
                    startArea.style.display = "block";
                }, 2000);
            } else {
                width++;
                elem.style.width = width + "%";
                if (width < 10) {
                    pNum.innerText = "0" + width;
                } else {
                    pNum.innerText = width;
                }
            }
        }
    }
}

function readyGo() {
    before.style.display = "none";
    title.style.display = "block";
    bgm1.play();
    fadeIn(bgm1);
    var loadComplete = setTimeout(function () {
        bgLoading.style.display = "none";
        bgLoaded.style.display = "block";
        loadArea.style.display = "block";
    }, 3000);
    var loadStart = setTimeout(function () {
        move();
    }, 3500);
}
var counter;
var p = 0;
var subcontent;
var page;
var subArea = document.querySelector("#subpage_area");
var object = document.querySelector("#object_play");

var pCount = document.querySelector("#page_count");
var pMove = document.querySelector(".page_move");

var countPage = document
    .querySelector("#page_count")
    .querySelector(".count");

var countMax = document
    .querySelector("#page_count")
    .querySelector(".count-max");

function openSubPage(c) {
    subArea.style.display = "block";
    subcontent = document.querySelector(
        ".subpage_content[data-content='" + c + "'"
    );
    page = subcontent.querySelectorAll(".page");
    subcontent.style.display = "block";
    page[0].style.display = "block";
    countPage.innerHTML = 1;
    countMax.innerHTML = page.length;
    counter = c;
    if (c > 1) {
        fadeOut(bgm1);
        fadeIn(bgm2);
    }
}

var answers = [
    "789603692065531",
    "VIP ROOM",
    "선악과",
    "204",
    "BOOM",
    "ESC",
    "ONE MONTH LATER"
];

var currected = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]

function answerInput(a) {
    var input = document.querySelectorAll(".answer-input");
    if (input[a].value == answers[a]) {
        if (a == 0) {
            document.querySelector("#login").style.display = "none";
            document.querySelector("#main_wrap").style.display = "block";
        } else {
            if (p < page.length - 1) {
                p = p + 1;
                for (i = 0; i < page.length; i++) {
                    page[i].style.display = "none";
                }
                page[p].style.display = "block";
                countPage.innerHTML = p + 1;
            } else {
                alert("마지막 페이지 입니다");
            }
            input[a].value = "";
            document.querySelector(
                ".answer_area[data-quiz='" + a + "']"
            ).style.display = "none";
            currected[a] = true;
        }
    } else {
        errSe.play();
    }
}

var subC = document.querySelectorAll('.subpage_content');

function closeIt() {
    subArea.style.display = "none";
    document.querySelector(".answer_area").style.display = "none";
    for (k = 0; k < subC.length; k++) {
        subC[k].style.display = 'none';
    }
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    for (j = 1; j < currected.length - 1; j++) {
        currected[j] = false;
    }
    p = 0;
    fadeOut(bgm2);
    fadeIn(bgm1);
}

function soon() {
    alert("곧 업데이트 됩니다. 기대해 주세요!");
}

function pageNext() {
    if (counter == 2) {
        if (p == 2 && !currected[1]) {
            document.querySelector(
                ".answer_area[data-quiz='1']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='1']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else if (p == 4 && !currected[2]) {
            document.querySelector(
                ".answer_area[data-quiz='2']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='2']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else if (p == 5 && !currected[3]) {
            document.querySelector(
                ".answer_area[data-quiz='3']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='3']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else if (p == 7 && !currected[4]) {
            document.querySelector(
                ".answer_area[data-quiz='4']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='4']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else if (p == 9 && !currected[5]) {
            document.querySelector(
                ".answer_area[data-quiz='5']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='5']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else if (p == 11 && !currected[6]) {
            document.querySelector(
                ".answer_area[data-quiz='6']"
            ).style.display = "block";
            document
                .querySelector(".answer_area[data-quiz='6']")
                .querySelectorAll(".answer_card")[0]
                .querySelector("input[type=text]")
                .focus();
        } else {
            if (p < page.length - 1) {
                p = p + 1;
                for (i = 0; i < page.length; i++) {
                    page[i].style.display = "none";
                }
                page[p].style.display = "block";
                countPage.innerHTML = p + 1;
            } else {
                alert("마지막 페이지 입니다");
            }
        }
    } else {
        if (p < page.length - 1) {
            p = p + 1;
            for (i = 0; i < page.length; i++) {
                page[i].style.display = "none";
            }
            page[p].style.display = "block";
            countPage.innerHTML = p + 1;
        } else {
            alert("마지막 페이지 입니다");
        }
    }
}
function pagePrev() {
    if (p > 0) {
        p = p - 1;
        for (i = 0; i < page.length; i++) {
            page[i].style.display = "none";
        }
        page[p].style.display = "block";
        countPage.innerHTML = p + 1;
    } else {
        alert("첫번째 페이지 입니다");
    }
}

function closePop(u) {
    if (u == 0) {
        var loginArea = document.querySelector("#login_area");
        loginArea.style.display = 'none';
        var startLogin = document.querySelector("#start_btn").style.display = 'block';
    } else {
        document.querySelectorAll('.answer_area')[u - 1].style.display = 'none';
        document.querySelectorAll('.answer_area')[u - 1].querySelectorAll(".answer_card")[0].querySelector("input[type=text]").value = '';
    }
}