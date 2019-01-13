document.addEventListener("DOMContentLoaded", function(){
    var submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function(){
        window.scrollTo({left: 0,top: document.querySelector(".game").scrollHeight + 10, behavior: 'smooth'});
    });

    var restartButton = document.querySelector("#newGame");
    restartButton.addEventListener("click", function(){
        window.location.reload(true);
    });

    var newGameButton = document.querySelector("#newGameAtEnd");
    newGameButton.addEventListener("click", function(){
        window.scrollTo({left: 0,top: document.querySelector(".game").scrollHeight + 10, behavior: 'smooth'});
        setTimeout(function(){
            window.location.reload(true);    
        },300);
    });

    newSources = dealCards();

    function dealCards(){
        let numOfCards = 18;
        const sources = ["prince.jpg", "rose.jpg", "fox.jpg", "tree.jpg", "planet.jpg", "snake.jpg", "prince sword.jpg", "sheep.jpg", "elephant.jpg",
                        "prince.jpg", "rose.jpg", "fox.jpg", "tree.jpg", "planet.jpg", "snake.jpg", "prince sword.jpg", "sheep.jpg", "elephant.jpg"];
        const newSources = [];
        while(newSources.length < numOfCards){
            let pic = Math.floor(Math.random() * numOfCards);
            if(sources[pic]){
                newSources.push(sources[pic]);
                sources[pic] = undefined;
            }
        }

        // var images = document.getElementsByTagName("img");
        // for(let i = 0; i < images.length; i++){

        //     images[i].setAttribute("src", newSources[i]);
        // }

        return newSources;
    }
    let counter = 0;
    const photoToFlipBack = [];
    let temp;
    let cardCount = newSources.length;

    document.addEventListener('click', function (event) {
        if (event.target.getAttribute("src") !== "the-little-prince back.jpg" || photoToFlipBack.length > 1){
            return;
        }
    
        // Don't follow the link
        event.preventDefault();

        photoLocation = event.target.id;  
        if(photoLocation !== temp){
            counter++;
        }      

        var score = document.getElementById("currentScore");
        score.innerText = "Current Score: " + counter;

        var setNewSource = document.getElementById(photoLocation);
        setNewSource.setAttribute("src", newSources[photoLocation - 1]);
        photoToFlipBack.push(setNewSource);
        temp = photoLocation;

        if(photoToFlipBack.length === 2){
            let currentPhoto = setNewSource.getAttribute("src");
            let previousPhoto = photoToFlipBack[0].getAttribute("src");
            if(currentPhoto === previousPhoto){
                photoToFlipBack.splice(0, photoToFlipBack.length);
                cardCount = checkFinish(cardCount, counter);
            }
            else{
                var timerId = setTimeout(function(){
                    photoToFlipBack[0].setAttribute("src", "the-little-prince back.jpg")
                    setNewSource.setAttribute("src", "the-little-prince back.jpg");
                    photoToFlipBack.splice(0,photoToFlipBack.length);
                },1500);
            }
        } 
    }, false);

    function checkFinish(cardCount, counter){
        cardCount -= 2;
        if(cardCount === 0){
            window.scrollTo({left: 0,top: document.body.scrollHeight, behavior: 'smooth'});
            let finalMessage = document.getElementById("finalScore");
            finalMessage.innerText = "You finished in " + counter +" steps.";
        }
        else{
            return cardCount;
        }
    }


    // function flip(){
    //     var photoURL=document.querySelector("#URL");
    //     var uppertext=document.querySelector("#texttop");
    //     var lowertext=document.querySelector("#textbottom")

    //     if(photoURL.value === ''){
    //         alert("please enter URL!");
    //         return;
    //     }
    //     var container= document.createElement('div');
    //     container.setAttribute("id", i);
    //     container.setAttribute("class","meme");
    //     var upp= document.createElement("span");
    //     upp.innerText= uppertext.value;
    //     upp.setAttribute("id","top");
    //     var newPhoto = document.createElement("img");
    //     newPhoto.setAttribute("src",photoURL.value);
    //     newPhoto.setAttribute("alt", "sorry, something went wront!");
    //     newPhoto.setAttribute("id", "memephoto")
    //     newPhoto.setAttribute("class", "meme");
    //     var bottom= document.createElement("span");
    //     bottom.innerText= lowertext.value;
    //     bottom.setAttribute("id", "bottom")
    //     var removex = document.createElement("img");
    //     removex.setAttribute("src", "http://cdn.onlinewebfonts.com/svg/img_439489.png");
    //     removex.setAttribute("id", "removex");
    //     removex.setAttribute("class", i)
    //     container.appendChild(newPhoto);        
    //     container.appendChild(upp);
    //     container.appendChild(bottom);
    //     container.appendChild(removex); 
    //     var body=document.querySelector("body");
    //     body.appendChild(container);
    //     photoURL.value = '';
    //     uppertext.value = '';
    //     lowertext.value = '';
    //     i++;   
    // };
    // var submitButton = document.querySelector(".submit");
    // submitButton.addEventListener("click", ifSubmitted);
    // document.addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //       ifSubmitted();
    //     }
    // });

    // document.addEventListener('click', function (event) {
    //     if (!event.target.matches('#removex')){
    //         return;
    //     } 
    
    //     // Don't follow the link
    //     event.preventDefault();

    //     memeToBeRemoved = event.target.className;
    //     var elementToBeRemoved = document.getElementById(memeToBeRemoved);
    //     var parentOfElement = document.querySelector("body");
    //     parentOfElement.removeChild(elementToBeRemoved);
    
    // }, false);
});

