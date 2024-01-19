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

    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (fantastrickLocalData?.isCodeSubmitted) {
        document.body.style.backgroundImage = "none";
	    document.body.style.backgroundColor = "#000027";
        past_world.style.display = "flex";
        jormungand.style.display = "none";
    }
}

const images = document.getElementsByTagName('img');
Array.from(images).forEach((image) => {
  image.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
});

function wrong() {
    wrong_sound.play();
    wrong_effect.style.display = "flex";
    setTimeout(function () {
        wrong_effect.style.display = "none";
    }, 400);
}

// 요르문간드 파트
enter0.addEventListener('click', function () {
    if (jormungand_input_0.value === "1234") {
        click_sound.play();
        jormungand_page_1.style.display = "flex";
        jormungand_page_0.style.display = "none";
    } else {
        wrong();
    }
});

next1.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_2.style.display = "flex";
    jormungand_page_1.style.display = "none";
});

answer2.addEventListener('click', function () {
    // if (true) {
    if (jormungand_input_1.value === "발바닥" && jormungand_input_2.value === "체력" && jormungand_input_3.value === "구간") {
        click_sound.play();
        jormungand_page_3.style.display = "flex";
        jormungand_page_2.style.display = "none";
    } else {
        wrong();
    }
});
back2.addEventListener('click', function () {
    click_sound.play();
    jormungand_page_1.style.display = "flex";
    jormungand_page_2.style.display = "none";
});

w3w.addEventListener('click', function () {
    window.open('https://what3words.com/%EB%B0%9C%EB%B0%94%EB%8B%A5.%EC%B2%B4%EB%A0%A5.%EA%B5%AC%EA%B0%84', '_blank');
});
answer3.addEventListener('click', function () {
    // if (true) {
    if (jormungand_input_4.value === "ENTER" || jormungand_input_4.value === "Enter" || jormungand_input_4.value === "enter") {
        const initialValue = {
            isCodeSubmitted: true,
            isQ1Solved: false,
            isQ2Solved: false,
            isQ3Solved: false,
            isQ4Solved: false,
            isQ5Solved: false,
            isQ6Solved: false,
        };    
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(initialValue));
        click_sound.play();
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#000027";
        past_world.style.display = "flex";
        jormungand.style.display = "none";
    } else {
        wrong();
    }
});

// PAST WORLD 파트
past_world_enter.addEventListener('click', function () {
    click_sound.play();
    past_world_enter.style.display = "none";

    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);

    if (fantastrickLocalData?.isQ6Solved) {
        past_world.style.backgroundImage = "url('assets/off_42_bg.png')";
    } else if (fantastrickLocalData?.isQ5Solved) {
        past_world.style.backgroundImage = "url('assets/off_22_bg.png')";
        building7_mark.style.display = "none";
    } else if (fantastrickLocalData?.isQ1Solved && fantastrickLocalData?.isQ2Solved && fantastrickLocalData?.isQ3Solved && fantastrickLocalData?.isQ4Solved) {
        past_world.style.backgroundImage = "url('assets/off_19_bg.png')";
        building6_mark.style.display = "none";
        building7_mark.style.display = "none";
    } else {
        past_world.style.backgroundImage = "url('assets/off_5_bg.png')";
        building5_mark.style.display = "none";
        building6_mark.style.display = "none";
        building7_mark.style.display = "none";
    }

    if (fantastrickLocalData?.isQ1Solved) {
        building1_mark.src = 'assets/off5_check_button.png';
        building1_context.src = 'assets/off_building4_memo_long.png';
        building1_input.style.display = "none";
        building1_enter.style.display = "none";
        building1_hint.style.display = "none";
        building1_detail.style.display = "flex";
    }
    if (fantastrickLocalData?.isQ2Solved) {
        building2_mark.src = 'assets/off5_check_button.png';
        building2_context.src = 'assets/off_building2_memo_long1.png';
        building2_input.style.display = "none";
        building2_enter.style.display = "none";
        building2_hint.style.display = "none";
        building2_detail.style.display = "flex";
        building2_next.style.display = "flex";
    }
    if (fantastrickLocalData?.isQ3Solved) {
        building3_mark.src = 'assets/off5_check_button.png';
        building3_context.src = 'assets/off_building1_memo_long.png';
        building3_input.style.display = "none";
        building3_enter.style.display = "none";
        building3_hint.style.display = "none";
        building3_detail.style.display = "flex";
    }
    if (fantastrickLocalData?.isQ4Solved) {
        building4_mark.src = 'assets/off5_check_button.png';
        building4_context.src = 'assets/off_building3_memo_long.png';
        building4_input.style.display = "none";
        building4_enter.style.display = "none";
        building4_hint.style.display = "none";
        building4_detail.style.display = "flex";
    }
    if (fantastrickLocalData?.isQ5Solved) {
        building5_mark.src = 'assets/off5_check_button.png';
        building5_context.src = 'assets/off_building5_memo.png';
        building5_input.style.display = "none";
        building5_enter.style.display = "none";
        building5_hint.style.display = "none";
    }
    if (fantastrickLocalData?.isQ6Solved) {
        building6_mark.src = 'assets/off5_check_button.png';
        building6_context.src = 'assets/off_subway_quest18.png';
        building6_input1.style.display = "none";
        building6_enter1.style.display = "none";
        building6_hint1.style.display = "none";
    }

    past_world_page.style.display = "flex";
});

// 1번 건물 파트
building1_mark.addEventListener('click', function () {
    click_sound.play();
    building1_question.style.display = "flex";
});
building1_enter.addEventListener('click', function () {
    // if (true) {
    if (building1_input.value === "IRONY" || building1_input.value === "Irony" || building1_input.value === "irony") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ1Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building1_mark.src = 'assets/off5_check_button.png';
        building1_context.src = 'assets/off_building4_memo_long.png';
        building1_input.style.display = "none";
        building1_enter.style.display = "none";
        building1_hint.style.display = "none";
        building1_detail.style.display = "flex";
    } else {
        wrong();
    }
});
building1_detail.addEventListener('click', function () {
    click_sound.play();
    if (building1_context.src.includes('assets/off_building4_memo_sum.png')){
        building1_context.src = 'assets/off_building4_memo_long.png';
        building1_detail.src = 'assets/off_memo_sum_button.png';
    } else {
        building1_context.src = 'assets/off_building4_memo_sum.png';
        building1_detail.src = 'assets/off_memo_long_button.png';
    }
});
building1_close.addEventListener('click', function () {
    click_sound.play();
    building1_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (!fantastrickLocalData?.isQ6Solved && !fantastrickLocalData?.isQ5Solved && fantastrickLocalData?.isQ1Solved && fantastrickLocalData?.isQ2Solved && fantastrickLocalData?.isQ3Solved && fantastrickLocalData?.isQ4Solved) {
        past_world.style.backgroundImage = "url('assets/off_19_bg.png')";
        building5_mark.style.display = "flex";
    }
});

// 2번 건물 파트
building2_mark.addEventListener('click', function () {
    click_sound.play();
    building2_question.style.display = "flex";
});
building2_enter.addEventListener('click', function () {
    // if (true) {
    if (building2_input.value === "IMMUNITY" || building2_input.value === "Immunity" || building2_input.value === "immunity") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ2Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building2_mark.src = 'assets/off5_check_button.png';
        building2_context.src = 'assets/off_building2_memo_long1.png';
        building2_input.style.display = "none";
        building2_enter.style.display = "none";
        building2_hint.style.display = "none";
        building2_detail.style.display = "flex";
        building2_next.style.display = "flex";
    } else {
        wrong();
    }
});
building2_next.addEventListener('click', function () {
    click_sound.play();
    building2_context.src = 'assets/off_building2_memo_long2.png';
    building2_next.style.display = "none";
    building2_back.style.display = "flex";
});
building2_back.addEventListener('click', function () {
    click_sound.play();
    building2_context.src = 'assets/off_building2_memo_long1.png';
    building2_next.style.display = "flex";
    building2_back.style.display = "none";
});
building2_detail.addEventListener('click', function () {
    click_sound.play();
    if (building2_context.src.includes('assets/off_building2_memo_sum.png')){
        building2_context.src = 'assets/off_building2_memo_long1.png';
        building2_detail.src = 'assets/off_memo_sum_button.png';
        building2_next.style.display = "flex";
        building2_back.style.display = "none";
    } else {
        building2_context.src = 'assets/off_building2_memo_sum.png';
        building2_detail.src = 'assets/off_memo_long_button.png';
        building2_next.style.display = "none";
        building2_back.style.display = "none";
    }
});
building2_close.addEventListener('click', function () {
    click_sound.play();
    building2_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (!fantastrickLocalData?.isQ6Solved && !fantastrickLocalData?.isQ5Solved && fantastrickLocalData?.isQ1Solved && fantastrickLocalData?.isQ2Solved && fantastrickLocalData?.isQ3Solved && fantastrickLocalData?.isQ4Solved) {
        past_world.style.backgroundImage = "url('assets/off_19_bg.png')";
        building5_mark.style.display = "flex";
    }
});

// 3번 건물 파트
building3_mark.addEventListener('click', function () {
    click_sound.play();
    building3_question.style.display = "flex";
});
building3_enter.addEventListener('click', function () {
    // if (true) {
    if (building3_input.value === "주장") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ3Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building3_mark.src = 'assets/off5_check_button.png';
        building3_context.src = 'assets/off_building1_memo_long.png';
        building3_input.style.display = "none";
        building3_enter.style.display = "none";
        building3_hint.style.display = "none";
        building3_detail.style.display = "flex";
    } else {
        wrong();
    }
});
building3_detail.addEventListener('click', function () {
    click_sound.play();
    if (building3_context.src.includes('assets/off_building1_memo_sum.png')){
        building3_context.src = 'assets/off_building1_memo_long.png';
        building3_detail.src = 'assets/off_memo_sum_button.png';
    } else {
        building3_context.src = 'assets/off_building1_memo_sum.png';
        building3_detail.src = 'assets/off_memo_long_button.png';
    }
});
building3_close.addEventListener('click', function () {
    click_sound.play();
    building3_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (!fantastrickLocalData?.isQ6Solved && !fantastrickLocalData?.isQ5Solved && fantastrickLocalData?.isQ1Solved && fantastrickLocalData?.isQ2Solved && fantastrickLocalData?.isQ3Solved && fantastrickLocalData?.isQ4Solved) {
        past_world.style.backgroundImage = "url('assets/off_19_bg.png')";
        building5_mark.style.display = "flex";
    }
});

// 4번 건물 파트
building4_mark.addEventListener('click', function () {
    click_sound.play();
    building4_question.style.display = "flex";
});
building4_enter.addEventListener('click', function () {
    // if (true) {
    if (building4_input.value === "희망") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ4Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building4_mark.src = 'assets/off5_check_button.png';
        building4_context.src = 'assets/off_building3_memo_long.png';
        building4_input.style.display = "none";
        building4_enter.style.display = "none";
        building4_hint.style.display = "none";
        building4_detail.style.display = "flex";
    } else {
        wrong();
    }
});
building4_detail.addEventListener('click', function () {
    click_sound.play();
    if (building4_context.src.includes('assets/off_building3_memo_sum.png')){
        building4_context.src = 'assets/off_building3_memo_long.png';
        building4_detail.src = 'assets/off_memo_sum_button.png';
    } else {
        building4_context.src = 'assets/off_building3_memo_sum.png';
        building4_detail.src = 'assets/off_memo_long_button.png';
    }
});
building4_close.addEventListener('click', function () {
    click_sound.play();
    building4_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (!fantastrickLocalData?.isQ6Solved && !fantastrickLocalData?.isQ5Solved && fantastrickLocalData?.isQ1Solved && fantastrickLocalData?.isQ2Solved && fantastrickLocalData?.isQ3Solved && fantastrickLocalData?.isQ4Solved) {
        past_world.style.backgroundImage = "url('assets/off_19_bg.png')";
        building5_mark.style.display = "flex";
    }
});

// 5번 건물 파트
building5_mark.addEventListener('click', function () {
    click_sound.play();
    building5_question.style.display = "flex";
});
building5_enter.addEventListener('click', function () {
    // if (true) {
    if (building5_input.value === "라그나로크") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ5Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building5_mark.src = 'assets/off5_check_button.png';
        building5_context.src = 'assets/off_building5_memo.png';
        building5_input.style.display = "none";
        building5_enter.style.display = "none";
        building5_hint.style.display = "none";
    } else {
        wrong();
    }
});
building5_close.addEventListener('click', function () {
    click_sound.play();
    building5_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (!fantastrickLocalData?.isQ6Solved && fantastrickLocalData?.isQ5Solved) {
        past_world.style.backgroundImage = "url('assets/off_22_bg.png')";
        building6_mark.style.display = "flex";
    }
});

// 6번 건물 파트
building6_mark.addEventListener('click', function () {
    click_sound.play();
    building6_question.style.display = "flex";
});
building6_next.addEventListener('click', function () {
    click_sound.play();
    const urlString = building6_context.src;
    const fileName = urlString.split('/').pop();
    const index = Number(fileName.match(/(\d+)/)[0])+1;
    building6_context.src = `assets/off_subway_quest${index}.png`;
    if (index===3) {
        building6_back.style.display = "flex";
    }
    if (index===8) {
        building6_next.style.display = "none";
        building6_input2.style.display = "flex";
        building6_enter2.style.display = "flex";
        building6_hint2.style.display = "flex";
    }
    if (index===11) {
        building6_next.style.display = "none";
        building6_input4.style.display = "flex";
        building6_enter4.style.display = "flex";
        building6_hint4.style.display = "flex";
    }
    if (index===13) {
        building6_back.style.display = "flex";
    }
    if (index===17) {
        building6_next.style.display = "none";
        building6_input5.style.display = "flex";
        building6_enter5.style.display = "flex";
        building6_hint5.style.display = "flex";
    }
});
building6_back.addEventListener('click', function () {
    click_sound.play();
    const urlString = building6_context.src;
    const fileName = urlString.split('/').pop();
    const index = Number(fileName.match(/(\d+)/)[0])-1;
    building6_context.src = `assets/off_subway_quest${index}.png`;
    if (index===2) {
        building6_back.style.display = "none";
    }
    if (index===7) {
        building6_next.style.display = "flex";
        building6_input2.style.display = "none";
        building6_enter2.style.display = "none";
        building6_hint2.style.display = "none";
    }
    if (index===12) {
        building6_back.style.display = "none";
    }
    if (index===16) {
        building6_next.style.display = "flex";
        building6_input5.style.display = "none";
        building6_enter5.style.display = "none";
        building6_hint5.style.display = "none";
    }
});
building6_enter1.addEventListener('click', function () {
    // if (true) {
    if (building6_input1.value === "DIARY" || building6_input1.value === "Diary" || building6_input1.value === "diary") {
        click_sound.play();
        building6_context.src = 'assets/off_subway_quest2.png';
        building6_next.style.display = "flex";
        building6_input1.style.display = "none";
        building6_enter1.style.display = "none";
        building6_hint1.style.display = "none";
    } else {
        wrong();
    }
});
building6_enter2.addEventListener('click', function () {
    // if (true) {
    if (building6_input2.value === "DASHCAM" || building6_input2.value === "Dashcam" || building6_input2.value === "dashcam") {
        click_sound.play();
        building6_context.src = 'assets/off_subway_quest9.png';
        building6_input2.style.display = "none";
        building6_enter2.style.display = "none";
        building6_hint2.style.display = "none";
        building6_back.style.display = "none";
        building6_black_box.style.display = "flex";
    } else {
        wrong();
    }
});
building6_black_box.addEventListener('click', function () {
    building6_black_box.style.display = "none";
    click_sound.play();
    building6_context.src = 'assets/blackbox_video.png';
    building6_input3.style.display = "flex";
    building6_enter3.style.display = "flex";
    building6_hint3.style.display = "flex";
});
building6_enter3.addEventListener('click', function () {
    // if (true) {
    if (building6_input3.value === "" || building6_input3.value === "1234" || building6_input3.value === "") {
        click_sound.play();
        building6_context.src = 'assets/off_subway_quest10.png';
        building6_input3.style.display = "none";
        building6_enter3.style.display = "none";
        building6_hint3.style.display = "none";
        building6_next.style.display = "flex";
    } else {
        wrong();
    }
});
building6_enter4.addEventListener('click', function () {
    // if (true) {
    if (building6_input4.value === "HIDE" || building6_input4.value === "Hide" || building6_input4.value === "hide") {
        click_sound.play();
        building6_context.src = 'assets/off_subway_quest12.png';
        building6_input4.style.display = "none";
        building6_enter4.style.display = "none";
        building6_hint4.style.display = "none";
        building6_next.style.display = "flex";
    } else {
        wrong();
    }
});
building6_enter5.addEventListener('click', function () {
    // if (true) {
    if (building6_input5.value === "TOEDEN" || building6_input5.value === "TO EDEN" || building6_input5.value === "ToEden" || building6_input5.value === "To Eden" || building6_input5.value === "Toeden" || building6_input5.value === "To eden" || building6_input5.value === "toeden" || building6_input5.value === "to eden") {
        click_sound.play();
        const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
        const fantastrickLocalData = JSON.parse(storedJsonData);
        fantastrickLocalData.isQ6Solved = true;
        sessionStorage.setItem('FANTASTRICK_OFFLINE_DATA', JSON.stringify(fantastrickLocalData));

        building6_context.src = 'assets/off_subway_quest18.png';
        building6_mark.src = 'assets/off5_check_button.png';
        building6_input5.style.display = "none";
        building6_enter5.style.display = "none";
        building6_hint5.style.display = "none";
        building6_back.style.display = "none";
    } else {
        wrong();
    }
});
building6_close.addEventListener('click', function () {
    click_sound.play();
    building6_question.style.display = "none";
    const storedJsonData = sessionStorage.getItem('FANTASTRICK_OFFLINE_DATA');
    const fantastrickLocalData = JSON.parse(storedJsonData);
    if (fantastrickLocalData?.isQ6Solved) {
        past_world.style.backgroundImage = "url('assets/off_42_bg.png')";
        building7_mark.style.display = "flex";
    }
});

// 7번 건물 파트
building7_mark.addEventListener('click', function () {
    click_sound.play();
    building7_question.style.display = "flex";
});
building7_enter1.addEventListener('click', function () {
    // if (true) {
    if (building7_input1.value === "HORN" || building7_input1.value === "Horn" || building7_input1.value === "horn") {
        click_sound.play();
        building7_context.src = 'assets/off_building6_video.png';
        building7_input1.style.display = "none";
        building7_enter1.style.display = "none";
        building7_hint1.style.display = "none";
        building7_input2.style.display = "flex";
        building7_enter2.style.display = "flex";
        building7_hint2.style.display = "flex";
    } else {
        wrong();
    }
});
building7_enter2.addEventListener('click', function () {
    // if (true) {
    if (building7_input2.value === "" || building7_input2.value === "1234" || building7_input2.value === "") {
        click_sound.play();
        building7_context.src = 'assets/off_building6_end.png';
        building7_input2.style.display = "none";
        building7_enter2.style.display = "none";
        building7_hint2.style.display = "none";
    } else {
        wrong();
    }
});
building7_close.addEventListener('click', function () {
    click_sound.play();
    building7_question.style.display = "none";
});