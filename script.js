"use strict";

// //challange 1
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   //1
//   registerNewAnswer() {
//     const reply = prompt(`What is your favourite programming language?
//     0: JavaScript
//     1: Python
//     2: Rust
//     3: C++
//     (Write option number)`);
//     !isNaN(reply) && reply < this.answers.length && this.answers[reply]++;
//     {
//       console.log(reply);
//       console.log(this.answers);
//     }
//     this.displayResults('string');
//   },
//   displayResults(type) {
//     if(type === 'array'){
//         console.log(this.answers);
//     }
//     else if(type === 'string'){
//         console.log(`poll results are : ${this.answers.join(',')}`);
//     }
//     else{
//         console.log(`first select array/string for display!`);
//     }
//   },
// };
// // poll.registerNewAnswer();

// //2
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// //bonus
// let results = poll.displayResults.bind({answers : [5,79,54]});
// results('string');
// results = poll.displayResults.bind({answers : [1, 5, 3, 9, 6, 1]});
// results('array');











//challange 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const changeColor = function () {
    header.style.color =  header.style.color === 'red'? 'blue' : 'red';
  }

  document.querySelector('body').addEventListener('click',changeColor);
  })();