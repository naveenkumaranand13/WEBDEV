// calculate()

// console.log("this is the beginning of the code")
// setTimeout(()=>( console.log("agter 2 sec")))

// const setiterval((=>(co))
// public class CountWithDelay {
//     public static void main(String[] args) {

//         for (int i = 1; i <= 10; i++) {
//             System.out.println("Number: " + i);
//             if (i == 10) {
//                 System.out.println("10 reached. Program stopped.");
//                 break;
//             }
//             try { Thread.sleep(1000); }
//             catch (InterruptedException e) { System.out.println("Error in timer."); }
//         }
//     }
// }
// let count=0

// const interval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===10){
//         clearInterval(interval)
//     }
// },1000)

// const para=document.querySelectorAll(".para")
// para[0].textContent="this is a paragraph"
// para[1].style.color="green"
// console.log(para)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")
// button.classList.remove("btn2")

// function show(){
//     alert("you have clicked the button")
// }

// button.addEventListener("click",show)
// button.addEventListener("clcik",show)
// index.html
// <button id ="btn">click me</button>
// <button id="stop">stop</button>
// script.js


// const button=document.getElementById("btn")
// const stopbtn=document.getElementById("stop")


// function show(){
//     alert("you have clicked the button")
// }

// button.addEventListener("click",show)
// button.addEventListener("clcik",show)
// index.html
// <button id ="btn">click me</button>
// <button id="stop">stop</button>
// script.js


// const button=document.getElementById("btn")
// const stopbtn=document.getElementById("stop")
// });


// const btn=document.querySelector("#btn")
// const stopbtn=document.querySelector("#stop")

// btn.addEventListener("keyup",(event)=>{
//    console.log(event.key)
// })

// const form=document.querySelector("form")
// form.addEventListener("submit",(event)=>{
//    event.preventDefault()
//    console.log(event.srcElement[0].value)
//    console.log(event.srcElement[1].value)
//    console.log(event)
//     console.log("button clciked")
// })
// const form=document.querySelector("form")
// form.addEventListener("submit",(event)=>{
//    event.preventDefault()
//    alert("form submitted")
// })

// debugger
// console.log(a);

// var a = 3453
// let b = 456;

// console.log(a)
// console.log(b);

// function print(){
//     console.log("xyz");
// }

// print()


// console.log("starting homewoek..");

// setTimeout(() => {
//     console.log("homework done!");
//     console.log("staring dinner..");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("getting ready to go out..");

//         setTimeout(() => {
//             console.log("going to the playground!");
//         }, 1000);// after dinner

//     }, 2000);// dinner time

// }, 3000);// homework time


// function finishedHomework(){
//     console.log("starting homework...");
//     setTimeout(() => {
//         console.log("homework done !");
//         callback();
//     },2000);
// }

// PROMISES
//  const p = new Promise((res,rej))=>{
//     console.log("going to do the homework!");
//     setTimeout(() => {
//         const done = true;
//         if(done){
//             res("success");
//     }else{
//         rej("failed to fetch data from the server");
//      }
//         },3000);

//      }

// function doHomework() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let homeworkDone = true;
//       if (homeworkDone) {
//         console.log("Homework is done");
//         resolve("Homework complete");
//       } else {
//         reject("Homework not done");
//       }
//     }, 3000);
//   })
//   return p;
// }

// function eatDinner() {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// let dinnerEaten = true;
// if (dinnerEaten) {
// console.log(" Dinner is eaten");
// resolve("Dinner complete");
// } else {
// reject(" Didn't eat dinner");
// }
// }, 2000);
// });
// }

// function goToPlayground() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let permission = true;
//       if (permission) {
//         console.log("Went to the playground");
//         resolve("Playground time!");
//       } else {
//         reject("Not allowed to go out");
//       }
//     }, 3000);
//   });
// }
// form.addEventListener('submit', (event) => {
//     const card = document.createElement('div');

//     card.innerHTML = `
//         <div class="card">
//             <h2>${title}</h2>
//             <p>${date}</p>
//             <button>${category}</button>
//             <p>${description}</p>
//             <button class="delete">❌</button>
//         </div>
//     `;

//     card.querySelector('.delete').addEventListener('click', () => {
//         card.remove();
//     });

//     eventCard.appendChild(card);
// });

// document.addEventListener('keydown', (event) => {
//     console.log(event.key);
// });

const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('event-list');
const keyDisplay = document.getElementById('key-display');
const clearBtn = document.getElementById('clear-all');


eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const desc = document.getElementById('description').value;

    createEventCard(title, date, category, desc);
    eventForm.reset();
});


function createEventCard(title, date, category, desc) {
    const card = document.createElement('div');
    card.className = 'event-item';
    
    card.innerHTML = `
        <button class="delete-btn">×</button>
        <h3>${title}</h3>
        <p> ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
    `;

    
    card.querySelector('.delete-btn').addEventListener('click', () => {
        card.remove();
    });

    eventList.appendChild(card);
}


clearBtn.addEventListener('click', () => {
    eventList.innerHTML = '';
});


document.addEventListener('keydown', (e) => {
    keyDisplay.textContent = e.key;
});