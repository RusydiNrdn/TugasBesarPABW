const searchIcon = document.querySelector("#searchIcon");
const nav = document.querySelector(".sticky-top");
const form = document.querySelector("#formSearch");

nav.classList.remove("sticky-top");
nav.classList.add("fixed-top");

searchIcon.addEventListener('click', function () {
    form.style = "display: flex";
    searchIcon.style = "display: none";
});

form.addEventListener('submit', function (e){
    e.preventDefault();

    let keyword = form.elements.keyword.value.toLowerCase();
    let string = "blue lagoon kebun buah mangunan bukit klangon paralayang candi prambanan titik nol 0 kilometer km waduk sermo gumuk pasir parangkusumo taman sari";
    if(string.includes(keyword)) {
        if("gumuk pasir parangkusumo".includes(keyword)){
            window.location.assign("pasirparangkusumo.html");
        } else if("blue lagoon".includes(keyword)){
            window.location.assign("lagoon.html");
        } else if("kebun buah mangunan".includes(keyword)){
            window.location.assign("mangunan.html");
        } else if("bukit klangon".includes(keyword)){
            window.location.assign("klangon.html");
        } else if("paralayang".includes(keyword)){
            window.location.assign("paralayang.html");
        } else if("candi prambanan".includes(keyword)){
            window.location.assign("prambanan.html");
        } else if("titik nol 0 kilometer km".includes(keyword)){
            window.location.assign("titiknol.html");
        } else if("waduk sermo".includes(keyword)){
            window.location.assign("waduksermo.html");
        } else if("taman sari".includes(keyword)){
            window.location.assign("tamansari.html");
        }
    } else {
        window.location.assign("notfound.html");
    }
});