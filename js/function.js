//text_banner
$(function(){
    const $textBn = $('.text-banner>ul>li');

    let nowIdx = 0

    setInterval(function(){
        nowIdx++;
        if(nowIdx>$textBn.length-1){
            nowIdx=0;
        }        
        $textBn.eq(nowIdx).stop().slideDown().css({display:'block'}).siblings().fadeOut();
    },2000)
})

//header 고정
$(window).on('scroll',function(){
   if($(this).scrollTop()>28){
        $('header').addClass('fixed');
        $('#slides').css({marginTop:'90px'});
   }else{
    $('header').removeClass('fixed');
    $('#slides').css({marginTop:'30px'});
   }
})

//slide 
$(function(){
    const $slides = $('.slides>.slides-container>li');
    const $indicator = $('.slides>.slides-pagination>li>a')
    const $btnPrev = $('.slides .slides-prev');
    const $btnNext = $('.slides .slides-next');

    let nowIdx = 5;

    const slideFn = ()=> {
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slides.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
    }

    $indicator.on('click',function(evt){
        evt.preventDefault();
        
        nowIdx = $indicator.index(this);
        slideFn();
    })
    
    $btnPrev.on('click',function(evt){
        evt.preventDefault();

        nowIdx>0?nowIdx--:(nowIdx=$indicator.length-1);
        slideFn();
    })

    $btnNext.on('click',function(evt){
        evt.preventDefault();

        nowIdx<$indicator.length-1?nowIdx++:nowIdx=0;
        slideFn();
    })
})

//더보기
$(function(){
    const $moreBtn = $('.weekly-best>.container+p>a');
    const $items = $('.weekly-best>.more>ul>li');

    $items.hide()

    $moreBtn.on('click',function(evt){
        evt.preventDefault();
        
        $('.weekly-best>.more>ul>li:hidden').slice(0,4).slideDown();
        if($('.weekly-best>.more>ul>li:hidden').length == 0){
            $moreBtn.parent().hide();
        }
    })
})
