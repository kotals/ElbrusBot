let askBtn = document.getElementById('myButton')

askBtn.addEventListener('click',function(){
  console.log('hello world')

  let text = document.getElementById('question').value.toLowerCase()
  console.log(text)

  let question = document.createElement('p') 
  question.innerText = text + '?'

let answerSection = document.getElementById('answer')

answerSection.appendChild(question)

let botAnswer = document.createElement('div')
answerSection.appendChild(botAnswer)


// switch(text){
// case 'elbrus':
// botAnswer.innerText = 'Класс'
// break;
// case 'js':
// botAnswer.innerText = 'Хочешь научиться программировать?'
// break;
// default:
// botAnswer.innerText = 'Я тебя не понимать'
// }
 
if(text.includes('elbrus'))
botAnswer.innerText = 'Хочешь научиться программировать?'
else{
  botAnswer.innerText = 'Я тебя не понимать'
}

})

