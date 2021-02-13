function onChestClickEventHandler() {
    var chest = document.getElementById("chest");
    if(chest.style.borderStyle == "outset") {
        chest.style.borderStyle = "inset";
        chest.style.backgroundColor = "#fdcc95";
    } else {
        chest.style.borderStyle = "outset";
        chest.style.backgroundColor = "lightblue";
    }
}

function onAbsClickEventHandler() {
    var abs = document.getElementById("abs");
    if(abs.style.borderStyle == "outset") {
        abs.style.borderStyle = "inset";
        abs.style.backgroundColor = "#fdcc95";
        
    } else {
        abs.style.borderStyle = "outset";
        abs.style.backgroundColor = "lightblue";
    }
}

function onLegsClickEventHandler() {
    var legs = document.getElementById("legs");
    if(legs.style.borderStyle == "outset") {
        legs.style.borderStyle = "inset";
        legs.style.backgroundColor = "#fdcc95";
    } else {
        legs.style.borderStyle = "outset";
        legs.style.backgroundColor = "lightblue";
    }        		
}

function onCardioClickEventHandler() {
    var cardio = document.getElementById("cardio");
    if(cardio.style.borderStyle == "outset") {
        cardio.style.borderStyle = "inset";
        cardio.style.backgroundColor = "#fdcc95";
    } else {
        cardio.style.borderStyle = "outset";
        cardio.style.backgroundColor = "lightblue";
    }        		
}

function onGenerateClickEventHandler() {
    var chest = document.getElementById("chest");
    var abs = document.getElementById("abs");
    var legs = document.getElementById("legs");
    var cardio = document.getElementById("cardio");

    const choices = [];
    if(chest.style.borderStyle == "inset") {
        choices.push("chest");
    }
    if(abs.style.borderStyle == "inset") {
        choices.push("abs");
    }
    if(legs.style.borderStyle == "inset") {
        choices.push("legs");
    }
    if(cardio.style.borderStyle == "inset") {
        choices.push("cardio");
    }
    localStorage.setItem("selected", choices);
}