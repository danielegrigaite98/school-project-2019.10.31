//const job = "Designer";
//const where = "Sweden";
//const partner = "myself"
//const numKids ="none"
//
//const fortune = " I will be a " + job + " living in " + where + " and married to " + partner + " with our " + numKids + " kids.";
//
//console.log(fortune);
//const button = document.querySelector("#changeBtn");
//const name = "Daniele";
//
//const boxElement.addEventListener("click", displayName);
//
//function displayName () {
//    console.log (name);
//    boxElement.textContent = name;
//
//}

//displayName();


let hero = document.querySelector("#hero");
hero.addEventListener('click', startAnimation);
function startAnimation(){
    hero.classList.toggle('enable')
}
