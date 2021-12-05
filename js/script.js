var timer;
var timerStart;
var timeSpentOnSite = getTimeSpentOnSite();

function getTimeSpentOnSite() {
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCounting() {
    timerStart = Date.now();
    timer = setInterval(function () {
        timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - timerStart);
        localStorage.setItem('timeSpentOnSite', timeSpentOnSite);
        timerStart = parseInt(Date.now());
        // Convert to seconds
        console.log(parseInt(timeSpentOnSite / 1000));
    }, 1000);
}
//startCounting();

if (document.getElementById('read-more')) {
    document.getElementById('read-more').addEventListener('click', function () {
        location.replace('games.html');
    });
}

document.getElementById('nav-toggle').addEventListener('click', function () {
    let navMenu = document.getElementById('nav-menu-container');
    navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
});

let random = Math.random();

var modal = document.getElementById("myModal");
modal.style.display = "block";

const customerNum = document.getElementById("customer-num");
for (var x = 0; x < 12700 * random; x++) {
    customerNum.innerText = x;
    setTimeout(500);
}


const famousQuoteHolder = document.getElementById("famous-quotes");
axios.get("https://quotes.rest/qod?language=en").then(response => {
    famousQuoteHolder.innerText = response.data.contents.quotes[0].quote + " By " + response.data.contents.quotes[0].author;
}).catch(error => {
    famousQuoteHolder.innerText = "If nothing goes right.... Go left.. :D";
})

var closeModal = document.getElementById("index-modal-close");
closeModal.onclick = function () {
    modal.style.display = "none";
    alert("Visit games page for latest updates.");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        alert("Visit games page for latest updates.");
    }
}
