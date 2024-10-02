
//Click for next counter:
let click_counter = 0;
let score_counter = 0;
const question_box = document.getElementsByClassName("questions")[click_counter]


//Understand of object and working:
/* '[]' esto bracket le index lauxa(vanna le [ab,cd,de] aaba ab ko index 0 vo cd ko 1 vayo )
ra '{}' esto bracket le kura string gari store garxa ki k{ans:asd,bss:asd,cds:ads}
aaba store garxa index hudaina esko (k.eso)  garera ans aauxa

*/
const que_ans = [
    {
        que: "Who is the richest person in the world currently? ",
        answers: [
            { ans: "Elon Musk", check: "true" },
            { ans: "Jeff Bezos", check: "false" },
            { ans: "Bernard Arnault", check: "false" },
            { ans: "Mark Zukerberg", check: "false" },
        ]
    }, {
        que: "Which is the biggest building in the world? ",
        answers: [
            { ans: "Great Mosque of Mecca", check: "false" },
            { ans: "Aerium", check: "false" },
            { ans: "Boeing Factory", check: "true" },
            { ans: "Burj Khalifa", check: "false" },
        ]
    },
    {
        que: "Who is the author/writer of One Piece manga? ",
        answers: [
            { ans: "Masashi Kishimoto", check: "false" },
            { ans: "Eiichiro Oda", check: "true" },
            { ans: "Tite Kubo", check: "false" },
            { ans: "Adachitoka", check: "false" },
        ]
    },

    {
        que: "What is the speed of light in air? ",
        answers: [
            { ans: "343 m/s", check: "false" },
            { ans: "234,445,12 m/s", check: "false" },
            { ans: "713 m/s", check: "false" },
            { ans: "299,792,458 m/s", check: "true" },
        ]
    }
]

//question haru add garne window load vaye paxi
window.addEventListener("load", () => {
    //let click_counter = 0;
    // yo 0 ra 1 ko lagi kei system soch kam garne khale

    question_box.innerHTML = que_ans[click_counter].que;

    document.getElementsByClassName("ans1")[0]
        .innerHTML = que_ans[click_counter].answers[0].ans;

    document.getElementsByClassName("ans1")[1]
        .innerHTML = que_ans[click_counter].answers[1].ans;

    document.getElementsByClassName("ans1")[2]
        .innerHTML = que_ans[click_counter].answers[2].ans;

    document.getElementsByClassName("ans1")[3]
        .innerHTML = que_ans[click_counter].answers[3].ans;



})

//answer check garnee
function answer_check(n) {

    //'next' button appearance
    document.getElementsByClassName("app")[0].style.height = 370;
    document.getElementsByClassName("next")[0].style.display = "flex";

    //no re-click

    document.getElementsByClassName("ans1")[0].disabled = true;
    document.getElementsByClassName("ans1")[1].disabled = true;
    document.getElementsByClassName("ans1")[2].disabled = true;
    document.getElementsByClassName("ans1")[3].disabled = true;

    if (que_ans[click_counter].answers[n].check == "true") {
        //green parne right xa vane 
        score_counter++
        document.getElementsByClassName("ans1")[n].style.backgroundColor = "rgb(72, 184, 72)"
    }
    else {
        // green ra red parne wrong xa vane
        let i = 0;
        for (let i = 0; i < 4; i++) {

            if (que_ans[click_counter].answers[i].check == "true") {

                document.getElementsByClassName("ans1")[i].style.backgroundColor = "rgb(72, 184, 72)"
                document.getElementsByClassName("ans1")[n].style.backgroundColor = " rgb(214, 65, 65)"
                break;
            }
        }
        //  .style.backgroundColor = "rgb(72, 184, 72)"
    }

}



//adding question layers/ next click
document.getElementsByClassName("next")[0].addEventListener('click', () => {

    click_counter++;
    //last click paxi score dekhaune banako
    if (click_counter == 4) {

        document.getElementsByClassName("app")[0].innerHTML = "";

        document.getElementsByClassName("app")[0].style = "height:200px";

        let element = document.createElement('h2');
        element.innerHTML = "You scored " + `${score_counter}` + " out of 4";
        document.getElementsByClassName("app")[0].append(element);

        //style deko
        element.style = "margin-top:80px;margin-left:73px"

        //replay button
        let sec_element = document.createElement('button');
        sec_element.innerHTML = "replay";
        document.getElementsByClassName("app")[0].append(sec_element);

        sec_element.style = "height: 40px; width: 97px;border: 1px solid black; border-radius: 6px; font-size: 19px;margin-left: 35%;margin-top: 25;display:flex;justify-content: center;align-items: center;background-color: purple;color: white;cursor: pointer"
        sec_element.addEventListener('click', () => {
            location.reload();
        })
    } else {

        //button haru feri thichna milne banako
        document.getElementsByClassName("ans1")[0].disabled = false;
        document.getElementsByClassName("ans1")[1].disabled = false;
        document.getElementsByClassName("ans1")[2].disabled = false;
        document.getElementsByClassName("ans1")[3].disabled = false
        //right ra wrong ko colour hatako
        document.getElementsByClassName("ans1")[0].style.backgroundColor = "white"
        document.getElementsByClassName("ans1")[1].style.backgroundColor = "white"
        document.getElementsByClassName("ans1")[2].style.backgroundColor = "white"
        document.getElementsByClassName("ans1")[3].style.backgroundColor = "white"

        //arko arko que add gareko
        question_box.innerHTML = que_ans[click_counter].que;

        document.getElementsByClassName("ans1")[0]
            .innerHTML = que_ans[click_counter].answers[0].ans;

        document.getElementsByClassName("ans1")[1]
            .innerHTML = que_ans[click_counter].answers[1].ans;

        document.getElementsByClassName("ans1")[2]
            .innerHTML = que_ans[click_counter].answers[2].ans;

        document.getElementsByClassName("ans1")[3]
            .innerHTML = que_ans[click_counter].answers[3].ans;

    }
})


/*
console.log(que_ans.answers1.ans1.check)

//setting of que and ans as of object
document.getElementsByClassName("questions")[0].innerHTML = que_ans.que1;
document.getElementsByClassName("ans1")[0].innerHTML = que_ans.answers1.ans1.ans;
document.getElementsByClassName("ans1")[1].innerHTML = que_ans.answers1.ans2.ans;
document.getElementsByClassName("ans1")[2].innerHTML = que_ans.answers1.ans3.ans;
document.getElementsByClassName("ans1")[3].innerHTML = que_ans.answers1.ans4.ans;

//click for next que
document.getElementsByClassName("next")[0].addEventListener("click", next_que)
//function for next que task
function next_que() {
    click_counter++;
    if (click_counter == 1) {
        //building
        document.getElementsByClassName("questions")[0].innerHTML = que_ans.que2;
        document.getElementsByClassName("ans1")[0].innerHTML = que_ans.answers2.ans1.ans;
        document.getElementsByClassName("ans1")[1].innerHTML = que_ans.answers2.ans2.ans;
        document.getElementsByClassName("ans1")[2].innerHTML = que_ans.answers2.ans3.ans;
        document.getElementsByClassName("ans1")[3].innerHTML = que_ans.answers2.ans4.ans;
    }
    else if (click_counter == 2) {
        //writer bala
        document.getElementsByClassName("questions")[0].innerHTML = que_ans.que3;
        document.getElementsByClassName("ans1")[0].innerHTML = que_ans.answers3.ans1.ans;
        document.getElementsByClassName("ans1")[1].innerHTML = que_ans.answers3.ans2.ans;
        document.getElementsByClassName("ans1")[2].innerHTML = que_ans.answers3.ans3.ans;
        document.getElementsByClassName("ans1")[3].innerHTML = que_ans.answers3.ans4.ans;

    }
    else if (click_counter == 3) {
        //speed of light bala
        document.getElementsByClassName("questions")[0].innerHTML = que_ans.que4;
        document.getElementsByClassName("ans1")[0].innerHTML = que_ans.answers4.ans1.ans;
        document.getElementsByClassName("ans1")[1].innerHTML = que_ans.answers4.ans2.ans;
        document.getElementsByClassName("ans1")[2].innerHTML = que_ans.answers4.ans3.ans;
        document.getElementsByClassName("ans1")[3].innerHTML = que_ans.answers4.ans4.ans;

    }
    else {
        alert("done")
    }
}
//function for click to check ans
document.getElementsByClassName("ans1")[0].addEventListener("click", () => { if (this.que_ans.answers1.ans1.check == "true") { alert("hell") } });
document.getElementsByClassName("ans1")[1].addEventListener("click", () => { console.log() });
document.getElementsByClassName("ans1")[2].addEventListener("click", () => { console.log() });
document.getElementsByClassName("ans1")[3].addEventListener("click", () => { console.log() });

function chosed_ans(e) {
    //let chosen=document.getElementsByClassName("ans")

}
*/