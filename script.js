var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right= "0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}


// Google sheet for Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxnMw7mOAs2_hHe_0d_p21st9ZzRvlO_dZ27RZlRa57EnaVuZb0lEFvHdgz-QKJej9K/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// sliding animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden, .hidden1');
hiddenElements.forEach((el) => observer.observe(el));

// text animation
const letters = "abcdefghijklmnopqrstuvwxyz";

function applyHackerEffect(element) {
    element.onmouseover = event => {
        let iteration = 0;
        const interval = setInterval(() => {
            element.querySelector(".hacker").innerText = element.querySelector(".hacker").dataset.value.split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return element.querySelector(".hacker").dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= element.querySelector(".hacker").dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 3);
    };
}

if (window.matchMedia("(min-width: 1024px)").matches) {
    document.querySelectorAll(".hidden").forEach(applyHackerEffect);
}
