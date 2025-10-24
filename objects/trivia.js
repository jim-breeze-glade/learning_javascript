/* 
Code accesses random object from array, chooses a 
random answer to the object's question, and checks
chosen answer and object answer value for equality.
*/
const questions = [
  {
    "category": "geography",
    "question": "Where is Florida",
    "choices": ["A. I don't know man", "B. Miami?", "C. South"],
    "answer": "C. South"
  },
  {
    "category": "culinary",
    "question": "How would you feel if you hadn't eaten breakfast today?",
    "choices": ["A. Hungry", "B. But I did have breakfast", "C. I will kill you"],
    "answer": "B. But I did have breakfast"
  },
  {
    "category": "celebrities",
    "question": "Who was George Floyd?",
    "choices": ["A. The greatest black man to ever live", "B. America's hero", "C. Derek Chauvin's arch-enemy"],
    "answer": "A. The greatest black man to ever live"
  },
  {
    "category": "blades",
    "question": "Which sword is best?",
    "choices": ["A. Katana", "B. Shamshir", "C. Claymore"],
    "answer": "A. Katana"
  },
  {
    "category": "pets",
    "question": "Who is the best puppy?",
    "choices": ["A. Trigger", "B. Reyna", "C. Both"],
    "answer": "C. Both"
  }]

function getRandomQuestion(array) {
  return array[Math.floor(Math.random() * 5)];
}

function getRandomComputerChoice(obj) {
  return obj.choices[Math.floor(Math.random() * 3)];
}

function getResults(obj, choice) {
  if (obj.answer === choice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${obj.answer}`
  }
}

/* Stores random object to easily match values inside 
object */
const randQobj = getRandomQuestion(questions);
const compChoice = getRandomComputerChoice(randQobj);

// Output section
console.log(`Random question:\n ${randQobj.question}`);
console.log("---");
console.log(`Choices: \n${randQobj.choices[0]}\n${randQobj.choices[1]}\n${randQobj.choices[2]}`);
console.log("---");
console.log(`Computer's choice: ${compChoice}`);
console.log("---");
console.log(getResults(randQobj, compChoice));