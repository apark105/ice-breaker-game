

document.addEventListener("DOMContentLoaded", handler);


// var questionsArray;

var questionsArray = [{"question":"What are your favorite songs from your teenage years that you still rock out to when nobody else is listening?","flip":false,"id":1},{"question":"Who was your childhood actor/actress crush?","flip":false,"id":2},{"question":"Whats the craziest dare you ever took?","flip":false,"id":3},{"question":"Whats the grossest food you ever had to eat to be polite?","flip":false,"id":4},{"question":"Whats the worst thing you ever did as a kid Ñ and got away with?","flip":false,"id":5},{"question":"What did you get into the most trouble for with your parents as a kid?","flip":false,"id":6},{"question":"Whats your silliest memory with your best friend?","flip":false,"id":7},{"question":"Do you have any crazy roommate stories?","flip":false,"id":8},{"question":"What is the weirdest thing youve ever eaten for breakfast that is not a breakfast food?","flip":false,"id":9},{"question":"Have you ever gotten super lost? What happened?","flip":false,"id":10},{"question":"Whats the story of your first crush?","flip":false,"id":11},{"question":"Whats the funniest thing that ever happened on your family vacation?","flip":false,"id":12},{"question":"Whats the most ridiculous thing your parents ever did to embarrass you?","flip":false,"id":13},{"question":"Whats the craziest thing on your bucket list?","flip":false,"id":14},{"question":"Whats a weird fact you happen to know?","flip":false,"id":15},{"question":"Everyone has those recurring bad dreams É what is your nightmare?","flip":false,"id":16},{"question":"Whats a funny (appropriate) pick-up line that works for you?","flip":false,"id":17},{"question":"Whats your favorite part of a county fair?","flip":false,"id":18},{"question":"Which celebrity do you shamelessly follow in the news?","flip":false,"id":19},{"question":"Whats something about you that people would be surprised to know?","flip":false,"id":20},{"question":"What is your favorite smell and why?","flip":false,"id":21},{"question":"Whats the best knock-knock joke you know?","flip":false,"id":22},{"question":"What food could you not live without?","flip":false,"id":23},{"question":"What interesting skill do you want to learn?","flip":false,"id":24},{"question":"Whats the most random thing in your purse/wallet?","flip":false,"id":25},{"question":"What do you pretend to hate but actually love?","flip":false,"id":26},{"question":"If your best friend picked a tattoo for you to get, what would he/she pick?","flip":false,"id":27},{"question":"If you could only eat at one restaurant forever, what restaurant would it be?","flip":false,"id":28},{"question":"If you could have any celebrity be your best friend, which celebrity would you pick?","flip":false,"id":29},{"question":"If all your clothes had to be one color forever, what color would you pick?","flip":false,"id":30},{"question":"If you had lots of money, what unnecessary thing would you splurge on (i.e. a private plane, concert tickets)?","flip":false,"id":31},{"question":"If you had to use a fake name, what fake name would you make up?","flip":false,"id":32},{"question":"If you could eliminate one food so that no one would eat it ever again, what would you pick to destroy?","flip":false,"id":33},{"question":"If you were an Olympic athlete, what sport would you compete in?","flip":false,"id":34},{"question":"Which celebrity would you pick to exchange lives with?","flip":false,"id":35},{"question":"If you could pick one job to do forever (and be guaranteed all the money you need), what job would it be?","flip":false,"id":36},{"question":"If you had to change your first name, what would you pick?","flip":false,"id":37},{"question":"Whats your favorite nickname, and is there a story behind it?","flip":false,"id":38},{"question":"Whats one of your guilty pleasures?","flip":false,"id":39},{"question":"Whats the most adventurous thing youve ever done?","flip":false,"id":40},{"question":"If you didnt have to work, what would do with your life?","flip":false,"id":41},{"question":"Whats your dream holiday destination?","flip":false,"id":42},{"question":"Whats your favorite way to spend the weekend?","flip":false,"id":43},{"question":"Do you believe in second chances?","flip":false,"id":44},{"question":"Whats something you have never told your parents?","flip":false,"id":45},{"question":"Whats one strange habit that you have?","flip":false,"id":46},{"question":"Name three of the happiest moments in your life","flip":false,"id":47},{"question":"Do you sing in the shower?","flip":false,"id":48},{"question":"Whats your all-time favorite movie?","flip":false,"id":49},{"question":"Whats your all-time favorite song?","flip":false,"id":50},{"question":"Pick three things to take with you if you were on a deserted island","flip":false,"id":51},{"question":"If you could be insanely talented at one thing, what would you choose?","flip":false,"id":52},{"question":"Whats the worst piece of advice anyone has ever given you?","flip":false,"id":53},{"question":"If you could ask for one wish, what would it be?","flip":false,"id":54},{"question":"Do you have any phobias?","flip":false,"id":55},{"question":"When was the last time you tried something for the first time?","flip":false,"id":56},{"question":"Whats the most embarrassing moment of your life?","flip":false,"id":57},{"question":"Do you prefer sunsets or sunrises?","flip":false,"id":58},{"question":"How would you spend your time if the electricity goes out forÊhours?","flip":false,"id":59},{"question":"Describe your idea of a perfect date","flip":false,"id":60},{"question":"Whats better, hugs or kisses?","flip":false,"id":61},{"question":"Would you rather stay in or go out?","flip":false,"id":62},{"question":"What do you feel most grateful for in life?","flip":false,"id":63},{"question":"Whats the weirdest Wikipedia rabbit hole youve stumbled down?","flip":false,"id":64},{"question":"Whats the single best piece of advice you ever received?","flip":false,"id":65},{"question":"If you could re-do one day in your life, what would it be and why?","flip":false,"id":66},{"question":"Good or bad, what image is forver burned into your brain?","flip":false,"id":67},{"question":"What annoys you the most about people?","flip":false,"id":68},{"question":"Whats the biggest \"what if\" in your mind?","flip":false,"id":69},{"question":"What expensive thing is absolutely worth the money?","flip":false,"id":70}]
var counter = 0;
var playerTurn = 1; 
// var playerTurn = 2; 



function handler() {
    console.log(`it's ready`)


    // const socket = io();
    // socket.on('connect', () => {
    //     console.log("connected to server")
    // });
    // const $events = document.getElementById('events');

    //     const newItem = (content) => {
    //       const item = document.createElement('li');
    //       item.innerText = content;
    //       return item;
    //     };

    // socket.on('connect', () => {
    //     $events.appendChild(newItem('connect'));
    // });


    console.log(questionsArray)
    // getAllData();
    createCardLayout();
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

function dealCards() {
    console.log("deal btn")
    if (counter === 10) {

        for (let x = 0; x < 3; x++) {
            var elem = document.querySelector('.card-row');
            elem.parentNode.removeChild(elem);
        }

        var newArry = [];
        for (let i = 0; i < questionsArray.length; i++) {
            if (questionsArray[i].flip === false) {
                newArry.push(questionsArray[i])
            }
        }
        questionsArray = newArry;
        counter = 0;
        // console.log(questionsArray)
        createCardLayout();
    }
}

function resetCards() {
    counter = 0;
    for (let x = 0; x < 3; x++) {
        var elem = document.querySelector('.card-row');
        elem.parentNode.removeChild(elem);
    }
    // getAllData();
    createCardLayout();

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

function changePlayer(){
    console.log('Current Player: ', playerTurn);
    var currentPlayer = document.querySelector(".emoji-player");
    // var currentPlayer = document.querySelector(".current-player");

    if (playerTurn === 1) {
        currentPlayer.classList.remove("emoji-player__1");
        currentPlayer.classList.add("emoji-player__2");
        playerTurn = 2

    } else {
        currentPlayer.classList.remove("emoji-player__2");
        currentPlayer.classList.add("emoji-player__1");
        playerTurn = 1
    }
    console.log('Next Player: ', playerTurn);
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
            var extraCardInfo = document.createElement("span");

            card.classList.add("card");
            extraCard.classList.add("extra-card");
            cardInfo.classList.add("card-info");
            extraCardInfo.innerText = "Zoom Questions";
            cardBox.classList.add("card-box");

            extraCard.appendChild(extraCardInfo);
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

                        changePlayer();


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