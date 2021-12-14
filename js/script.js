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

if (modal) {
    modal.style.display = "block";

    const customerNum = document.getElementById("customer-num");
    animateValue(customerNum, 10000, 12700 * random, 2000);

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
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

}

//Gallery
if (document.getElementById("gallery-images")) {
    function openModal() {
        document.getElementById("imageModal").style.display = "block";
    }

    // Close the Modal
    function closeModal() {
        document.getElementById("imageModal").style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        // var slides = document.getElementsByClassName("mySlides");
        var slides = document.getElementsByClassName("imageSlides");
        //var dots = document.getElementsByClassName("demo");
        //var dots = document.getElementsByClassName("thumbnail");
        // var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    }
}