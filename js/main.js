console.log('fooditude');

// DEFAULTS .....................
setInterval(() => {
    scroller()
}, 2000);

$('#recipe-cont').hide()
$('#dwopdown-ul').hide()
$('#srchInp').hide()
$('#toggle-list').hide()

// NAVBAR CODE ..........................................

// nav-toggle 
$('#toggle').on('click', function () {
    $('#toggle-list').slideToggle(200);
    $('.line-1').toggleClass('rotate-1');
    $('.line-2').toggleClass('visibility');
    $('.line-3').toggleClass('rotate-2');
});

// recipe button toggle 
$('#recipe-btn').on('click', function () {
    $('#dwopdown-ul').slideToggle(100);
});


// HOME CODE ..............................................
// home 
$('#home-btn').on('click', function () {
    $('#cards-cont').hide()
    $('#content').show()
});

// <!-- slides  -->
let slideIndex = 1;
showSlides(slideIndex);

// next / previous controls 
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// thumbnail Image/ default image 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.cont1-slides');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}


// FEATURED SLIDES CODE............................... 

let slide = 380
let hovering = false

function scroller() {

    if (!hovering) {

        $('#featured-scroller').animate({ scrollLeft: slide }, 800);
        // each card is 300px wide 
        slide = slide + 380
        console.log(slide)
        if (slide > 2655) {
            $('#featured-scroller').animate({ scrollLeft: -slide }, 700);
            slide = 380
        }
    }
}

$('#featured-scroller').hover(function () {
    hovering = true
},
    function () {
        hovering = false
    });


// Nav searchbar input event listener
const searchbar = document.querySelectorAll('.searchbar');
const cardsCont = document.getElementById('cards-cont');

searchbar.forEach(bar => {
    bar.addEventListener('input', function () {
        $('#recipe-cont').hide()
        $('#cards-cont').show()
        $('#content').hide()

        let inputVal = bar.value.toUpperCase()
        
        hiddenCards.forEach(card => {

            if (inputVal.length > 0) {
                let h4 = card.firstElementChild.nextElementSibling.innerHTML.toUpperCase();
                let catagory = card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML.toUpperCase();
                if (h4.includes(inputVal) || catagory.includes(inputVal)) {
                    card.style.display = "block"

                }
                else {
                    card.style.display = "none"
                }
            }
            else {
                $('#cards-cont').hide()
                $('#content').show()
            }
        });
    });
});

// Navbar ul2 click event listener .........
$('.hidden').hide()
$('#cards-cont').hide()
const ul2Btn = document.querySelectorAll('.ul2Btn');
const hiddenCards = document.querySelectorAll('.hidden');
const ftrdCards = document.querySelectorAll('.featured-card');

ul2Btn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        $('#recipe-cont').hide()
        $('#cards-cont').show()
        $('#content').hide()

        let btnText = e.target.innerHTML
        btnText = btnText.toUpperCase();

        hiddenCards.forEach(card => {

            let cardText = card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
            cardText = cardText.toUpperCase()
            if (cardText.includes(btnText)) {
                card.style.display = "block"
            }
            else {
                card.style.display = "none"
            }
        });
    });
});


// hidden button event listener 
const hdnBtn = document.querySelectorAll('.hidden-btn');
const recipeCont = document.getElementById('recipe-cont')
hdnBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        $('#recipe-cont').show()
        $('#cards-cont').hide()
        $('#content').hide()
        e.preventDefault()
        let img = this.parentElement.firstElementChild.src
        let ctgry = this.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText
        let para = this.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText
        let heading = this.parentElement.firstElementChild.nextElementSibling.innerText

        $('#recipe-cont').show()
        recipeCont.innerHTML = `<div id="recipe-img"><img src="${img}" alt=""></div>
        <div id="recipe-content">
        <h1>${heading}</h1>
        <p id="ctgry">${ctgry}</p>
        <div id="ingrednts">
        <h6>Ingredients:</h6>
        <p>ingredients here...</p>
        </div>
        <div id="method">
        <h6>Method:</h6>
        <p>${para}</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium suscipit nisi, ipsum laudantium deserunt inventore. Ex in explicabo ratione autem neque alias perspiciatis consectetur corporis facere, eos, eius velit?</p>
           </div>
           <a href="" class="recp-back-btn dismiss">Back</a>
           </div>`;
    });
});

$('.dismiss').on('click',(e)=>{
    e.preventDefault()
    console.log('cont hiding')
    $('#recipe-cont').hide()
    $('#cards-cont').hide()
    $('#content').show()
})

const readMoreBtn = document.querySelectorAll('.readMore')
readMoreBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        $('#recipe-cont').show()
        $('#cards-cont').hide()
        $('#content').hide()
        let img = this.parentElement.parentElement.firstElementChild.nextElementSibling.src
        let heading = this.parentElement.firstElementChild.innerHTML
        recipeCont.innerHTML = `<div id="recipe-img"><img src="${img}" alt=""></div>
        <div id="recipe-content">
        <h1>${heading}</h1>
        <div id="ingrednts">
        <h6>Ingredients:</h6>
        <p>ingredients here...</p>
        </div>
        <div id="method">
        <h6>Method:</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium suscipit nisi, ipsum laudantium deserunt inventore. Ex in explicabo ratione autem neque alias perspiciatis consectetur corporis facere, eos, eius velit?</p>
        </div>
        <a href="" class="recp-back-btn dismiss">Back</a>
        </div>
        `

    })
});

// catagory click event listener 
$('.hover-div').hide();
const catagories = document.querySelectorAll('.catagory');
catagories.forEach(catagory => {
    catagory.addEventListener('click', (_e) => {
        id = catagory.getAttribute("id");
        $(`.${id}`).slideToggle(200)
    });
});


// validation for contact form 
const cntctFN = document.getElementById('contact-form-Fname');
const cntctLN = document.getElementById('contact-form-Lname');
const cntctEmail = document.getElementById('contact-form-EmailInp');
const cntctTA = document.getElementById('textArea');
let validCLN = false
let validCFN = false
let validCEmail = false
$('#error1').hide()
$('#success1').hide()

cntctFN.addEventListener('blur', () => {
    let fName = cntctFN.value
    let regex = /[a-zA-Z]{3,15}/
    if (regex.test(fName)) {
        cntctFN.classList.remove('is-invalid')
        validCFN = true;
    }
    else {
        cntctFN.classList.add('is-invalid')
        validCFN = false;
    }
});
cntctLN.addEventListener('blur', () => {
    let LName = cntctLN.value
    let regex = /[a-zA-Z\.\ ]{3,15}/
    if (regex.test(LName)) {
        cntctLN.classList.remove('is-invalid')
        validCLN = true;
    }
    else {
        cntctLN.classList.add('is-invalid')
        validCLN = false;
    }
});
cntctEmail.addEventListener('blur', () => {
    let email = cntctEmail.value
    let regex = /([a-zA-Z0-9\.\*\-\_\&]{3,15}@[a-zA-Z]{1,5}\.[a-zA-Z]{2,3})/
    if (regex.test(email)) {
        cntctEmail.classList.remove('is-invalid')
        validCEmail = true;
    }
    else {
        cntctEmail.classList.add('is-invalid')
        validCEmail = false;
    }
});

let contactFormBtn = document.getElementById('contactFormBtn')
contactFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validCEmail && validCFN && validCLN) {
        $('#success1').show()
        $('#error1').hide()
        setTimeout(() => {
            $('#success1').hide()
        }, 3500);
    }
    else {
        $('#error1').show()
        $('#success1').hide()
        setTimeout(() => {
            $('#error1').hide()
        }, 3500);
    }
})

// validation for subscription form 
let lttrFN = document.getElementById('fNameInp');
let lttrLN = document.getElementById('lNameInp');
let lttrEmail = document.getElementById('emailInp');
let sbscrbformBtn = document.getElementById('sbscrbformBtn')
let validLLN = false
let validLFN = false
let validLEmail = false
$('#error2').hide()
$('#success2').hide()

// subscribe letter first name input
lttrFN.addEventListener('blur', () => {
    let fName = lttrFN.value
    let regex = /[a-zA-Z]{3,15}/
    if (regex.test(fName)) {
        lttrFN.classList.remove('is-invalid')
        validLFN = true;
    }
    else {
        lttrFN.classList.add('is-invalid')
        validLFN = false;
    }
});

// subscribe letter last name input
lttrLN.addEventListener('blur', () => {
    let LName = lttrLN.value
    let regex = /[a-zA-Z\.\ ]{3,15}/
    if (regex.test(LName)) {
        lttrLN.classList.remove('is-invalid')
        validLLN = true;
    }
    else {
        lttrLN.classList.add('is-invalid')
        validLLN = false;
    }
});
// subscribe letter email input
lttrEmail.addEventListener('blur', () => {
    let email = lttrEmail.value
    let regex = /([a-zA-Z0-9\.\*\-\_\&]{3,15}@[a-zA-Z]{1,5}\.[a-zA-Z]{2,3})/
    if (regex.test(email)) {
        lttrEmail.classList.remove('is-invalid')
        validLEmail = true;
    }
    else {
        lttrEmail.classList.add('is-invalid')
        validLEmail = false;
    }
});

// subscribe letter button
sbscrbformBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validLEmail && validLFN && validLLN) {
        $('#success2').show()
        $('#error2').hide()
        setTimeout(() => {
            $('#success2').hide()
        }, 3500);
    }
    else {
        $('#error2').show()
        $('#success2').hide()
        setTimeout(() => {
            $('#error2').hide()
        }, 3500);
    }
});

let hoverDivA = document.querySelectorAll('.hoverA')
hoverDivA.forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault()
    })
});

//  Phone code ........................................................................   
// phone searchbar code ..............
let srchInp = document.getElementById('srchInp');
$('#srchSpan').on('click', function () {
    if (srchInp.style.display == "none") {
        $('#srchInp').show();
        $('#logo').hide(300)
    }
    else {
        $('#srchInp').hide();
        $('#logo').show()
    }
});

// phone toggle list event listener 
let dropRcp = document.querySelectorAll('.drop-rcp');
dropRcp.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault()
        $('.line-1').toggleClass('rotate-1');
        $('.line-2').toggleClass('visibility');
        $('.line-3').toggleClass('rotate-2');
        $('#recipe-cont').hide()
        $('#toggle-list').slideToggle()
        $('#cards-cont').show()
        $('#content').hide()

        let btnText = e.target.innerHTML
        btnText = btnText.toUpperCase();

        hiddenCards.forEach(card => {

            let cardText = card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
            cardText = cardText.toUpperCase()
            if (cardText.includes(btnText)) {
                card.style.display = "block"
            }
            else {
                card.style.display = "none"
            }
        });
    });
});

const featuredScroller = document.getElementById('featured-scroller');
const x = window.matchMedia("(max-width:925px)");
ftrdPhone(x);
x.addListener(ftrdPhone);

function ftrdPhone(x){
    if(x.matches){
        hovering = true
    };
}







