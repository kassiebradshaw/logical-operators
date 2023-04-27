'use strict';

// array of expressions
let expressions = [
  '5 > 3 && 10 < 20', 
  '3 < 2 || 5 > 10',
  '!(4 == 4)',
  '7 >= 6 && !(8 != 8)',
  '5 * 2 == 10 && "hello" != "world"',
  'true && false || true',
  '!(10 < 5) || (8 > 6 && 4 <= 4)',
  '(3 < 5 && 4 > 2) || (1 == 1 && false)'
]

// array of correct evaluations
let answers = [
  'true',
  'false',
  'false',
  'true',
  'true',
  'true',
  'true',
  'true'
]

let explanations = [
  'This expression will evaluate to true because both conditions are true.',
  'This expression will evaluate to false because both conditions are false.', 
  'This expression will evaluate to false because the condition inside the parentheses is true, but the ! operator negates it.',
  'This expression will evaluate to true because the first condition is true and the second condition is false (negated by the ! operator).',
  'This expression will evaluate to true because both conditions are true.',
  'This expression will evaluate to true because the first two conditions (true && false) evaluate to false, but the third condition (true) is true.',
  'This expression will evaluate to true because the first condition (!(10 < 5)) is true (negated by the ! operator), and the second condition (8 > 6 && 4 <= 4) is also true.',
  'This expression will evaluate to true because the first condition (3 < 5 && 4 > 2) is true, and the second condition (1 == 1 && false) is false, but the || operator evaluates to true if at least one condition is true.'
]

function renderExpressions(){
  for (let i = 0; i < expressions.length; i++){
    document.write(`
      <li class='expressions'>
        ${expressions[i]} 
        <section class='buttons'>
          <button id='${i}' onClick=solveIt(${i})>Solve me!</button>
          <button onClick=renderExplanation(${i})>See Answer</button>
        </section>
      </li>`
    );
  }
}

function solveIt(index){
  let userAnswer = prompt(`True or False: ${expressions[index]}`);
  if (userAnswer.toLowerCase() == answers[index]){
    alert(`You are correct! It is ${answers[index]}`);
    renderExplanation(index);
  } else {
    if (confirm('That is incorrect. Try again?')){
      solveIt(index);
    };
  }
}

function renderExplanation(index){
  alert(`${expressions[index]} : ${explanations[index]}`);
}

