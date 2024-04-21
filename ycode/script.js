window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myButton").className = "show";
    } else {
        document.getElementById("myButton").className = "";
    }
};

function goToHomePage() {
    window.location.href = "#main";
}

var originalColor = document.getElementById("subscribe-function").style.backgroundColor;
var originalText = document.getElementById("subscribe-function").textContent;

document.getElementById("subscribe-function").addEventListener("click", function () {
    var button = document.getElementById("subscribe-function");
    if (button.classList.contains("clicked")) {
        button.style.backgroundColor = originalColor;
        button.textContent = originalText;
        button.classList.remove("clicked");
    } else {
        button.style.backgroundColor = "gray";
        button.textContent = "Unsubscribe";
        button.classList.add("clicked");
    }
});

function menuToggle(){
    document.getElementsByClassName('menu')[0].classList.toggle('active')
    document.getElementsByClassName('lines')[0].classList.toggle('opened')
}
 
function closeWindowAndMenu() {
    window.close();
    menuToggle();
}