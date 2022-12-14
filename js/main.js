//검색 돋보기 아이콘
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

//badges,to-top lodash gsap
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
                                // _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });

        //탑버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0,
        });

    }else{

        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });

        //탑버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100,
        });
    }
}, 300));

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0,
    });
});

// main visual fade-in
const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7 1.4 2.1 2.8
        opacity: 1
    });
});

//swiper notice
//new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

//swiper promotion img
new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, //한번에 보여줄 슬라이드 수
    spacebetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번슬라이드가 가운데 보이기
    loop: true,
    /* autoplay: {
        delay: 5000
    } */
    pagination:{
        el: '.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable: true,
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next',
    }
});

//swiper awards
new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spacebetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next',
    }
});

//promotion toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide');
    }else{
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});

//floating icons
//범위랜덤함수
function random(min, max){
    //.toFixed()를 통해 반환된 문자데이터를,
    //parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay, size){
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector,
        random(1.5, 2.5), {
            y: size,
            repeat: -1, //무한반복
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay),
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8,
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

//연도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//2022