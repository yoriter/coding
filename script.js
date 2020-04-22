//변수지정
var sliderContainer = document.getElementsByClassName('slider'),
    slides = document.getElementsByClassName('slide_picture'),
    slideCount = slides.length,
    currentIndex = 0,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next'),
    Sbutton = document.getElementsByClassName('slide_button'),
    f_button = document.getElementById('first_b'),
    s_button = document.getElementById('second_b'),
    t_button = document.getElementById('third_b');

//사진 가로로 배열하기
for(var i = 0;i < slideCount;i++){
    slides[i].style.left = i * 900 + 'px';
}

//슬라이드 이동 함수 왜 함수인가.. 버튼을 누를때마다이므로..
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -900 + 'px';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    for(var i = 0; i< slideCount; i++){
        Sbutton[i].style.backgroundColor = 'white'
    }
    Sbutton[idx].style.backgroundColor = 'lightgray';
}

//버튼을 누르면 슬라이드 이동시키기
navPrev.addEventListener('mouseover', function(e){
    e.preventDefault();
    if(currentIndex == 0){goToSlide(slideCount -1)}
    else{goToSlide(currentIndex -1)}
})
navNext.addEventListener('mouseover', function(e){
    e.preventDefault();
    if(currentIndex == slideCount -1){goToSlide(0)}
    else{goToSlide(currentIndex +1)}
})

//첫번째 슬라이드 먼저 보여주기
goToSlide(0)

//4초마다 슬라이드 전환되기
setInterval(function(){
    if(currentIndex == slideCount -1){goToSlide(0)}
    else{goToSlide(currentIndex +1)}
}, 3000);

//각각의 음식버튼에 마우스를 올려놓으면(hover) 해당 슬라이드 화면이 나오도록 하기
f_button.addEventListener('mouseover', function(e){
    e.preventDefault();
    goToSlide(0)
})
s_button.addEventListener('mouseover', function(e){
    e.preventDefault();
    goToSlide(1)
})
t_button.addEventListener('mouseover', function(){
    goToSlide(2)
})
