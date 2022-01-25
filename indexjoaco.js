document.querySelector(".btn-back").addEventListener("mouseover", function() {
    console.log("mouseover")
    let btnMail = document.querySelector(".btn-back")
    btnMail.style.backgroundColor = "white"
})

document.querySelector(".btn-back").addEventListener("mouseout", function() {
    console.log("mouseout")
    let btnMail = document.querySelector(".btn-back")
    btnMail.style.backgroundColor = ""
})
