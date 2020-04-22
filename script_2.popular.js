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

//반복문 : 사진 가로로 배열
for(var i = 0;i < slideCount;i++){
    slides[i].style.left = i * 900 + 'px';
}

//함수 : 슬라이드 이동
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -900 + 'px';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    for(var i = 0; i< slideCount; i++){
        Sbutton[i].style.backgroundColor = 'white'
    }
    Sbutton[idx].style.backgroundColor = 'lightgray';
}

//함수 실행 : 첫번째 슬라이드 먼저 보여주기
goToSlide(0)

//4초마다 슬라이드 전환되기
setInterval(function(){
    if(currentIndex == slideCount -1){goToSlide(0)}
    else{goToSlide(currentIndex +1)}
}, 3000);

//이벤트 : 버튼에 마우스를 올려놓으면 해당 슬라이드 화면이 나오도록 하기
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
