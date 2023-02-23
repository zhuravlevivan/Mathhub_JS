// alert('Hello');

// confirm('You are learning JS');


// const skill = document.getElementById('skill');
// const isLove = document.getElementById('isLove');
// const string = document.getElementById('string');


// const skillText = prompt('How are you learn JS?', "I'm not shure");
// const isLoveValue = confirm('Do you love this language?', "I'm not shure");

// skill.innerText = skillText;
// isLove.innerText = isLoveValue;

// string.innerHTML = "str";

//STRING
// const str1 = 'Greeting';
// const str2 = "Text";
// const str3 = `Reverse ${str1}`;

// console.log(str1, typeof(str1))
// console.log(str2, typeof(str2))
// console.log(str3, typeof(str3))

//NUMBER
// const num1 = 75 + 15 ;
// const num2 = 79 ** 3 ;
// alert(num2);

//BIGINT
// console.log(99999999999999999999n);
// const bigint = 12343313453n;
// console.log(typeof(bigint));

//BOOLEAN
// true / false
// > < >= <= >== <== == === !=
// const bool = 10 > 5;
// console.log(bool);

//NULL
// let empty = null;
// console.log(empty, typeof(empty));

//UNDEFINED
// let box = undefined;
// console.log(box, typeof(box));

//SYMBOL
// const uniq = Symbol('id');
// console.log(uniq, typeof(uniq));

//OBJECT
// const obj = {
//     name: 'Sasha',
//     age: 19,
//     isHappy: true 
// };

// console.log(obj.name);
// console.log(obj['name']);

// obj.job = "Google";
// console.log(obj);

// const array = ["Anna", 19, false];
// console.log(array);

// FUNCTION

// declaration

// function scream(a, b){
//     return a * b
// }
// scream();
// console.log(scream(4, 5));

// expression

// const wowScream = function (){
//     alert("WOOOOOW")
// }
// wowScream();

//arrow

// const arrow = () => {
//     alert("arrow is in the sky")
// }
// arrow();


// GAME
// 

const getRundomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {

    const symbol = (Math.random() > 0.5) ? "+" : "-";

    const task = `${getRundomNumInRange(0, 100)} ${symbol} ${getRundomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}



const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Game is started!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Check"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "You win!" : "You lose"
        btnGame.innerText = "Restart game"
        toggleGameState()
    }
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})





const choosedEl = document.querySelectorAll(".choosed_block-container > div");
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
}

const changeCount = (value) => {
    choosedState.countElements += value
    counterEl.innerText = choosedState.countElements
}

const eventFunc = (e) => {
    // choosedEl[i].className = "choosed_element"

    if (e.target.className === "") {
        e.target.className = "choosed_element"
        changeCount(1)
    } else {
        e.target.className = ""
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}

// choosedEl[2].removeEventListener("click", eventFunc);

// const timeIsOver = () => {
//     alert("Time's up")
// }
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)
// clearInterval(alarm)



// const alarm = setInterval (() => {
//     let wantToSleep = confirm("Do you want to sleep?")
//     if (wantToSleep) {
//         console.log("tic");
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)


const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")


function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
    })
    .catch((err) => (err.message))

function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postsBlock.append(postItem)
}
}

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//         .then(res => console.log(res))
//         .catch((err) => (err.message))
// }

// createPost("title", "body", 15)

// showPostsBTN.onclick = getPosts

getPosts()
