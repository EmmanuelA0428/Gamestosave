
//call buttons
let gameButton = document.querySelector("#Games")
let homeButton = document.querySelector("#Home")
let homeLogoLink = document.querySelector("#homelogo")
let donationButton = document.querySelector("#Donations")
let charitieButton = document.querySelector("#Charities")
let contactButton = document.querySelector("#Contact")
let profilesButton = document.querySelector("#Profile")

// let canvas = document.querySelector("")

//call pages
let headerSection = document.querySelector("#Header")
let gameSection = document.querySelector("#gamePage")
let donationSection = document.querySelector("#donationPage")
let contactSection = document.querySelector("#contactPage")
let homeSection = document.querySelector("#homePage")
let trashGame = document.querySelector("#TrashGame")
let profilesSection = document.querySelector("#profilesSection")

//Game Button/page

gameButton.onclick = function(event) {
    event.preventDefault();

    let canvas = document.querySelector("#defaultCanvas0")
    
    gameSection.innerHTML = "";

    headerSection.style.display ="none";
    gameSection.style.display = "flex";
    gameSection.style.flexWrap = "wrap";
    gameSection.style.justifyContent = "space-around";
    homeSection.style.display = "none";
    donationSection.style.display = "none";
    contactSection.style.display = "none";
    trashGame.style.display = "none";
    profilesSection.style.display = "none";

    let TrashGameButton = document.createElement("button");
    TrashGameButton.innerHTML = "TrashGame";
    TrashGameButton.style.width = "500px";
    TrashGameButton.style.height = "500px";
    TrashGameButton.style.backgroundColor = "white";

    TrashGameButton.onclick = function(event) {
        event.preventDefault();

        gameSection.innerHTML = "";
        trashGame.style.display = "block";
        gameSection.appendChild(trashGame);
    }

    let adGif = document.createElement("img");
    adGif.src = "https://monophy.com/media/UTYnjUzKivMpvOHIqx/monophy.gif";
    adGif.style.width = "300px";
    adGif.style.height = "300px";
    adGif.style.marginTop = "100px";
    gameSection.appendChild(TrashGameButton);
    gameSection.appendChild(adGif);

    let anotherShowGame = document.createElement("button");
    anotherShowGame.innerHTML = "Another Game";
    anotherShowGame.style.width = "500px";
    anotherShowGame.style.height = "500px";
    anotherShowGame.style.backgroundColor = "white";

    anotherShowGame.onclick = function(event) {
        event.preventDefault();
    }

    let AnotherAdGif = document.createElement("img");
    AnotherAdGif.src = "https://monophy.com/media/UTYnjUzKivMpvOHIqx/monophy.gif";
    AnotherAdGif.style.width = "300px";
    AnotherAdGif.style.height = "300px";
    AnotherAdGif.style.marginTop = "100px";
    gameSection.appendChild(anotherShowGame);
    gameSection.appendChild(AnotherAdGif);

}

//Donations Button 

donationButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none";
    gameSection.style.display = "none";
    donationSection.style.display = "block";
    contactSection.style.display = "none";
    homeSection.style.display = "none";
    trashGame.style.display = "none";
    profilesSection.style.display = "none";
}

//Contact Us Button

contactButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none";
    gameSection.style.display = "none";
    donationSection.style.display = "none";
    contactSection.style.display = "block";
    homeSection.style.display = "none";
    trashGame.style.display = "none";
    profilesSection.style.display = "none";

}


// Home Button
homeButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="block";
    gameSection.style.display = "none";
    donationSection.style.display = "none";
    contactSection.style.display = "none";
    homeSection.style.display = "block";
    trashGame.style.display = "none";
    profilesSection.style.display = "none";

}

profilesButton.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="none";
    gameSection.style.display = "none";
    donationSection.style.display = "none";
    contactSection.style.display = "none";
    homeSection.style.display = "none";
    trashGame.style.display = "none";
    profilesSection.style.display = "flex";
    profilesSection.style.flexDirection = "column";
    profilesSection.style.alignItems = "center";

} 

homeLogoLink.onclick = function(event) {
    event.preventDefault();

    headerSection.style.display ="block";
    gameSection.style.display = "none";
    donationSection.style.display = "none";
    contactSection.style.display = "none";
    homeSection.style.display = "block";
    trashGame.style.display = "none";
    profilesSection.style.display = "none";

}