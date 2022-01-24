const delay = 3000

const slides1 = document.querySelector('.slides1');

const slides2 = document.querySelector('.slides2');

const slides3 = document.querySelector('.slides3');

console.log('slides',slides1);

const slidesCount1 = slides1.childElementCount;

const slidesCount2 = slides2.childElementCount;

const slidesCount3 = slides3.childElementCount;

console.log('slidescount',slidesCount1);

const maxLeft1 = (slidesCount1 -1) * 100 * -1

const maxLeft2 = (slidesCount2 -1) * 100 * -1

const maxLeft3 = (slidesCount3 -1) * 100 * -1

console.log(maxLeft1)

let current1 = 0;

let current2 = 0;

let current3 = 0;

function changeSlide1(next = true) {
    if (next) {
        current1 += current1 > maxLeft1 ? -100 : current1*-1 ;
    } else {
        current1 = current1 < 0 ? current1 + 100 : maxLeft1 ;
    }
    slides1.style.left = `${current1}%`
    //slides.style.left = current + "%"
}

function changeSlide2(next = true) {
    if (next) {
        current2 += current2 > maxLeft2 ? -100 : current2*-1 ;
    } else {
        current2 = current2 < 0 ? current2 + 100 : maxLeft2 ;
    }
    slides2.style.left = `${current2}%`
    //slides.style.left = current + "%"
}

function changeSlide3(next = true) {
    if (next) {
        current3 += current3 > maxLeft3 ? -100 : current3*-1 ;
    } else {
        current3 = current3 < 0 ? current3 + 100 : maxLeft3 ;
    }
    slides3.style.left = `${current3}%`
    //slides.style.left = current + "%"
}

//let autoChange = setInterval(changeSlide,delay)

/*function restart() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide,delay);
}*/

//controls

document.querySelector(".next-slide1").addEventListener("click", function(){
    changeSlide1();
//    restart();
})

document.querySelector(".prev-slide1").addEventListener("click", function(){
    changeSlide1(false);
//    restart();
})

document.querySelector(".next-slide2").addEventListener("click", function(){
    changeSlide2();
//    restart();
})

document.querySelector(".prev-slide2").addEventListener("click", function(){
    changeSlide2(false);
//    restart();
})


document.querySelector(".next-slide3").addEventListener("click", function(){
    changeSlide3();
//    restart();
})

document.querySelector(".prev-slide3").addEventListener("click", function(){
    changeSlide3(false);
//    restart();
})


document.querySelector("#hera").addEventListener("mouseover", function() {
    console.log("mouseover")
    let hero = document.querySelector("#hera")
    hero.style.backgroundColor = "pink"
})

document.querySelector("#hera").addEventListener("mouseout", function() {
    console.log("mouseover")
    let hero = document.querySelector("#hera")
    hero.style.backgroundColor = ""
})