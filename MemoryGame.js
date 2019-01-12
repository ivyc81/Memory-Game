document.addEventListener("DOMContentLoaded", function(){
    var i = 0;
    function ifSubmitted(){
        var photoURL=document.querySelector("#URL");
        var uppertext=document.querySelector("#texttop");
        var lowertext=document.querySelector("#textbottom")

        if(photoURL.value === ''){
            alert("please enter URL!");
            return;
        }
        var container= document.createElement('div');
        container.setAttribute("id", i);
        container.setAttribute("class","meme");
        var upp= document.createElement("span");
        upp.innerText= uppertext.value;
        upp.setAttribute("id","top");
        var newPhoto = document.createElement("img");
        newPhoto.setAttribute("src",photoURL.value);
        newPhoto.setAttribute("alt", "sorry, something went wront!");
        newPhoto.setAttribute("id", "memephoto")
        newPhoto.setAttribute("class", "meme");
        var bottom= document.createElement("span");
        bottom.innerText= lowertext.value;
        bottom.setAttribute("id", "bottom")
        var removex = document.createElement("img");
        removex.setAttribute("src", "http://cdn.onlinewebfonts.com/svg/img_439489.png");
        removex.setAttribute("id", "removex");
        removex.setAttribute("class", i)
        container.appendChild(newPhoto);        
        container.appendChild(upp);
        container.appendChild(bottom);
        container.appendChild(removex); 
        var body=document.querySelector("body");
        body.appendChild(container);
        photoURL.value = '';
        uppertext.value = '';
        lowertext.value = '';
        i++;   
    };
    var submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", ifSubmitted);
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          ifSubmitted();
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.matches('#removex')){
            return;
        } 
    
        // Don't follow the link
        event.preventDefault();

        memeToBeRemoved = event.target.className;
        var elementToBeRemoved = document.getElementById(memeToBeRemoved);
        var parentOfElement = document.querySelector("body");
        parentOfElement.removeChild(elementToBeRemoved);
    
    }, false);
});

