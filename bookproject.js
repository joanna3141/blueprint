const titles = []
let oneStar = 0;
let non_fiction = 0;
let romance = 0;
let science_fiction = 0;
let fantasy = 0;
let mystery = 0;
let historical_fiction = 0;
let dystopian = 0;
let adventure = 0;
let other = 0 ;
let totalpages = 0;
let onestar = 0;
let fivestar = 0;
let totalhours = 0;
let topgenrebook = " ";
let highestpage = 0;

function enterInput(){
    let titlesinput = document.querySelector("#inputtitle");
    console.log(titlesinput);
    let title = titlesinput.value;  
    console.log(titles);

    let ratinginput = document.querySelector("#ratinginput");
    rating = ratinginput.value;
    if (rating == 1){
        onestar++;
    } if (rating == 5){
        fivestar++;
    }
    ratinginput.value="";

    let genreinput = document.querySelector("#genreinput");
    let genre = genreinput.value
    if (genre === "Non-Fiction"){
        non_fiction++;
    } if (genre === "Romance"){
        romance++;
    } if (genre === "Science-Fiction"){
        science_fiction++;
    } if (genre === "Fantasy"){
        fantasy++;
    } if (genre === "Mystery"){
        mystery++;
    } if (genre === "Historical Fiction"){
        historical_fiction++;
    } if (genre === "Dystopian"){
        dystopian++;
    } if (genre === "Adventure"){
        adventure++;
    } if (genre === "Other"){
        other++;
    }
    genreinput.value ="";
    let pagesinput = document.querySelector("#pagesinput");
    let pages = pagesinput.value;
    totalpages += pages;
    if (pages > highestpage){
        longestbook = title;
    }
    pagesinput.value="";
    console.log(pagesinput)

    hoursinput = document.querySelector("#hoursinput");
    let hours =  hoursinput.value;
    totalhours += hours;
    hoursinput.value="";
    titlesinput.value = "";
}
function output() {
if (fantasy > non_fiction && fantasy > science_fiction && fantasy > romance && fantasy > mystery && fantasy > historical_fiction && fantasy > dystopian && fantasy > adventure && fantasy > other){
    topgenrebook = "Fantasy"}
else if (non_fiction > fantasy && non_fiction > science_fiction && non_fiction > romance && non_fiction > mystery && non_fiction > historical_fiction && non_fiction > dystopian && non_fiction > adventure && non_fiction > other){
    topgenrebook = "Non_fiction"}
else if (romance > non_fiction && romance > science_fiction && romance > fantasy && romance > mystery && romance > historical_fiction && romance > dystopian && romance > adventure && romance > other){
    topgenrebook = "Romance"}
else if (science_fiction > non_fiction && science_fiction > fantasy && science_fiction > romance && science_fiction > mystery && science_fiction > historical_fiction && science_fiction > dystopian && science_fiction > adventure && science_fiction > other){
    topgenrebook = "Science_fiction"}
else if (mystery > non_fiction && mystery > science_fiction && mystery > romance && mystery > fantasy && mystery > historical_fiction && mystery > dystopian && mystery > adventure && mystery > other){
    topgenrebook = "Mystery"}
else if (historical_fiction > non_fiction && historical_fiction > science_fiction && historical_fiction > romance && historical_fiction > mystery && historical_fiction > fantasy && historical_fiction > dystopian && historical_fiction > adventure && historical_fiction > other){
    topgenrebook = "Historical Fiction"}
else if (dystopian > non_fiction && dystopian > science_fiction && dystopian > romance && dystopian > mystery && dystopian > historical_fiction && dystopian > fantasy && dystopian > adventure && dystopian > other){
    topgenrebook = "Dystopian"}
else if (adventure > non_fiction && adventure > science_fiction && adventure > romance && adventure > mystery && adventure > historical_fiction && adventure > dystopian && adventure > fantasy && adventure > other){
    topgenrebook = "Adventure"}
else if (other > non_fiction && other > science_fiction && other > romance && other > mystery && other > historical_fiction && other > dystopian && other > adventure && other > fantasy){
    topgenrebook = "Other"}
document.querySelector("#onestarnumber").innerHTML = onestar;
document.querySelector("#fivestarnumber").innerHTML = fivestar; 
document.querySelector("#totalhourspent").innerHTML = totalhours;
document.querySelector("#totalpagesread").innerHTML = totalpages;
document.querySelector("#topgenre").outerHTML = topgenre;
document.querySelector("#longestbookread").innerHTML = longestbook;
}
