//--------------------Переход по ссылке-якорю-----------------------

//выбираем все якори(элементы с классом .scroll-to) в массив
const anchors = document.querySelectorAll('.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        //берем значение атрибута href(то, куда мы переходим)
        const blockID = anchor.getAttribute('href')

        //выбираем элемент с классом значения blockID
        document.querySelector(blockID).scrollIntoView({
            //медленный переход
            behavior: 'smooth',
            //переход к Началу блока
            block: 'start'
        })
    })
}
//--------------------Карусель фото---------------------------------

//по умолчанию показываем первый слайд
let slideIndex = 1;
showSlides(slideIndex);

// переходим на следующий(предыдущий) слайд
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel");
    //переходим на первый слайд если они закончились(вышли за границу справа)
    if (n > slides.length) {
        slideIndex = 1
    }
    //переходим на последний слайд если вышли за границу слева
    if (n < 1) {
        slideIndex = slides.length
    }
    //прячем все слайды
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //показываем нужный слайд
    slides[slideIndex - 1].style.display = "block";
}