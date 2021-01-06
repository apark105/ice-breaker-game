document.addEventListener("DOMContentLoaded", handler);


var questionsArray;
var counter = 0;




function handler() {
    console.log(`it's ready`)
    console.log(questionsArray)
    getAllData();
    var dealBtn = document.querySelector('.deal');
    var resetBtn = document.querySelector('.reset');
    // var shuffleBtn = document.querySelector('.shuffle');

    dealBtn.addEventListener("click", dealCards);
    resetBtn.addEventListener("click", resetCards);
    // shuffleBtn.addEventListener("click", shuffleCards);

}

async function getAllData() {
    try {
        const response = await fetch("http://localhost:5000/listOfQuestions")
        const jsonData = await response.json();

        questionsArray = jsonData;
        console.log(questionsArray);
        createCardLayout();
    } catch (err) {
        console.error(err.message);
    }
}

function dealCards(){
    console.log("deal btn")
    if (counter === 10) {

        for(let x=0; x<3; x++) {
            var elem = document.querySelector('.card-row');
            elem.parentNode.removeChild(elem);
        }

        var newArry = [];
        for (let i=0; i<questionsArray.length; i++) {
            if(questionsArray[i].flip === false) {
                newArry.push(questionsArray[i])
            }
        }
        questionsArray = newArry;
        counter = 0;
        // console.log(questionsArray)
        createCardLayout();
    }
}

function resetCards(){
    counter = 0; 
    for(let x=0; x<3; x++) {
        var elem = document.querySelector('.card-row');
        elem.parentNode.removeChild(elem);
    }
    getAllData();
}

function shuffleCards() {
    // console.log(array)
    var array = questionsArray;
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    console.log(array)
    return array;
  }

function createCardLayout() {

    shuffleCards();
    var mainBody = document.querySelector('.main-body')

    //card index, increases to 0, 3, 7 
    var i = 0;


    for (var x = 0; x < 3; x++) {

        var cardRow = document.createElement("div")
        cardRow.classList.add("card-row")

        console.log('card row', x)
        console.log('answer should be (0, 3, 7)', i)
        for (i; i < 10; i++) {
            var card = document.createElement("div");
            var extraCard = document.createElement("div");
            var cardInfo = document.createElement("span");
            var cardBox = document.createElement("div");

            card.classList.add("card");
            extraCard.classList.add("extra-card");
            cardInfo.classList.add("card-info");
            extraCard.innerText = "Back of the Card";
            cardBox.classList.add("card-box");
            // questionsArray[i]["flag"] = false;
            // questionsArray[i];

            // console.log(questionsArray[i].flip = true)

            (function btn(index, cardBox) {
                cardBox.addEventListener("click", function (e) {

                    // questionsArray[index].flip = true;
                    // flag = !flag;
                    if (questionsArray[index].flip === false) {
                        // console.log(questionsArray[index])
                        cardBox.classList.add("is-flipped")
                        questionsArray[index].flip = true;
                        counter += 1;
                        // } else {
                        //     extraCard.classList.remove("extra-card__hide")
                        //     questionsArray[index].flag = false;
                    } 


                    console.log('Index:', index, '....', questionsArray[index].flip, counter)
                    // console.log('what is i', index, 'what is flag:', flag)
                })
            })(i, cardBox)


            cardInfo.innerText = questionsArray[i].question;

            card.appendChild(cardInfo)

            //if card row 1 
            if (x === 0) {
                if (i > 2) {
                    break;
                }
                cardBox.appendChild(card)
                cardBox.appendChild(extraCard)

                cardRow.appendChild(cardBox)

                //if card row 2
            } else if (x === 1) {
                if (i > 6) {
                    break;
                }
                cardBox.appendChild(card)
                cardBox.appendChild(extraCard)

                cardRow.appendChild(cardBox)


                //if card row 3
            } else {
                cardBox.appendChild(card)
                cardBox.appendChild(extraCard)

                cardRow.appendChild(cardBox)
            }
        }

        mainBody.appendChild(cardRow)
    }

}