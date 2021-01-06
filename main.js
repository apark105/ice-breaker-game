document.addEventListener("DOMContentLoaded", handler);


function handler() {
    console.log(`it's ready`)
    console.log(questionsArray)
    createCardLayout();
}

var questionsArray = [
    {
        id: 1,
        question: 'What are your favorite songs from your teenage years that you still rock out to when nobody else is listening?'
    },
    {
        id: 2,
        question: 'Who was your childhood actor/actress crush?'
    },
    {
        id: 3,
        question: 'What’s the craziest dare you ever took?'
    },
    {
        id: 4,
        question: 'What’s the grossest food you ever had to eat to be polite?'
    },
    {
        id: 5,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },
    {
        id: 6,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },
    {
        id: 7,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },
    {
        id: 8,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },
    {
        id: 9,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },
    {
        id: 10,
        question: 'What’s the worst thing you ever did as a kid — and got away with?'
    },

]

function createCardLayout() {
    var mainBody = document.querySelector('.main-body')

    //card index, increases to 0, 3, 7 
    var i = 0;
    

    for (var x = 0; x < 3; x++) {
        
        var cardRow = document.createElement("div")
        cardRow.classList.add("card-row")
        
        console.log('card row', x)
        console.log('answer should be (0, 3, 7)', i)
        for (i; i < 10; i++) {
            var card = document.createElement("div")
            var extraCard = document.createElement("div")
            var cardInfo = document.createElement("span")
            var cardBox = document.createElement("div")

            card.classList.add("card")
            extraCard.classList.add("extra-card")
            cardInfo.classList.add("card-info")
            extraCard.innerText = "Back of the Card"
            cardBox.classList.add("card-box")
            questionsArray[i]["flag"]=false;

            (function btn(index, cardBox){
                cardBox.addEventListener("click", function(e){

                    // questionsArray[index].flag = true;
                    // flag = !flag;
                    // if(questionsArray[index].flag === false) {

                        cardBox.classList.toggle("is-flipped")

                    //     questionsArray[index].flag = true;
                    // } else {
                    //     extraCard.classList.remove("extra-card__hide")
                    //     questionsArray[index].flag = false;


                    // }


                    console.log('Index:', index, '....', questionsArray[index].flag)
                    // console.log('what is i', index, 'what is flag:', flag)
                }) 
            })(i, cardBox)
            

            cardInfo.innerText = questionsArray[i].question

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