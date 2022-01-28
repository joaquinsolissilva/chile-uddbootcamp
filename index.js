const delay = 3000

/*document.getelementbyid()*/

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

document.querySelector(".joaquinsolis").addEventListener("mouseover", function() {
    console.log("mouseover")
    let joaquinsolis = document.querySelector(".joaquinsolis")
    joaquinsolis.style.backgroundColor = "white"
    joaquinsolis.style.borderRadius = "5px"
    joaquinsolis.style.height = "30px"
    joaquinsolis.style.width = "120px"
})

document.querySelector(".joaquinsolis").addEventListener("mouseout", function() {
    console.log("mouseout")
    let joaquinsolis = document.querySelector(".joaquinsolis")
    joaquinsolis.style.backgroundColor = ""
})


/*
var tamañoImagen = document.querySelector('.ctr')


tamañoImagen.style.width = '500px'//como hago para que esto se lea del html y no tener que tomarlo asi, lo intente y no me dejaba entrar a la propiedad, siempre me tiraba en blacno


function getNumbersInString(string) {//no entiendo bien todo, esta funcion no la hice yo
  var tmp = string.split("");
  var map = tmp.map(function(current) {
    if (!isNaN(parseInt(current))) {
      return current;
    }
  });

  var numbers = map.filter(function(value) {
    return value != undefined;
  });

  return numbers.join("");
}
 
function Agrandar() {  

    var tamañoImagen = document.querySelector('.ctr')
    var tamaño = tamañoImagen.style.width
    var size = Number(getNumbersInString(tamaño))

    size += 100
    console.log(size)

    tamañoImagen.style.width = `${size}px`;
    tamañoImagen.style.height = 'auto';
    console.log(tamañoImagen.style.width)  
}

function Achicar() {  

    var tamañoImagen = document.querySelector('.ctr')
    var tamaño = tamañoImagen.style.width
    var size = Number(getNumbersInString(tamaño))

    size -= 100
    console.log(size)

    tamañoImagen.style.width = `${size}px`;
    tamañoImagen.style.height = 'auto';
    console.log(tamañoImagen.style.width)  
}



let turnAngle = 10;
function turn(image) {
  image.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
  turnAngle = turnAngle + 10;
}*/
