$(function(){ 
    
    /* hamburger 버튼  클릭 */
    $('.hamburger').click(function(){
        
        
        if($(this).hasClass('on')){
            $('#top_btn').show()
        
            $('body').css({overflow:'auto','height':'auto'})
            $('.header_bottom').hide()
            $('.modal').hide()

            $(this).removeClass('on')
        }else{
            $('#top_btn').hide()
        
            $('body').css({overflow:'hidden','height':'100%'})
            $('.header_bottom').show()
            $('.modal').show()

            $(this).addClass('on')    
        }
        
        $(window).resize(function(){
            var win_w = $(this).outerWidth()
            
            $('.header_bottom').hide()
            $('body').css({overflow:'auto','height':'auto'})
            $('.modal').hide()
            $('.hamburger').removeClass('on')
            
            if(win_w > 600){
                $('.header_bottom').show()
            }        
        })
        
    })
    
    /* 모달을 클릭했을떄 */
    $('.modal').click(function(){
        $('.hamburger').removeClass('on')
        $('#top_btn').show()
        $('body').css({overflow:'auto','height':'auto'})
        $('.header_bottom').hide()
        $(this).hide()
        
    })
    
    /*모바일에서 검색창 버튼  클릭*/
    
    /* 클릭시 */
    $('.header_top .search a').click(function(){
        
        var win_w = $(window).outerWidth()
        
        $('.search input').show()
        $('.logo').hide()
        $('header').css('height','90px')
        $('.hamburger').hide()
        $('.header_top .search button').show()
        
        if(win_w > 600){
            $('.search input').show()
            $('.header_top .search button').hide()
            $('.logo').show()
            $('header').css('height','auto')
        }
        
        
        $(window).resize(function(){
            
            var win_w = $(this).outerWidth()
            
            $('.search input').hide()
            $('.logo').show()
            $('header').css('height','auto')
            $('.hamburger').show()
            $('.header_top .search button').hide()
            
            if(win_w > 600){
                $('.search input').show()
                $('.header_top .search button').hide()
                $('.logo').show()
                $('header').css('height','auto')
            }
        })
    })
    
    /* 취소버튼클릭시 */
    
    $('.header_top .search button').click(function(){
        $('.search input').hide()
        $('.logo').show()
        $('header').css('height','auto')
        $('.hamburger').show()
        $(this).hide()
    })

    
    
    /*  a태그 메뉴 클릭 스크롤 */
        
    $('.header_bottom a').click(function(){
        
        var win_w = $(window).outerWidth()
        
        if(win_w > 600) {
        
            var info_val = $('#info').offset().top
            var product_val = $('#product').offset().top
            var notice_val  = $('#notice').offset().top
            var event_val = $('#event').offset().top


            if($(this).parents('li').index() == 0){
                $('html,body').stop().animate({'scrollTop':info_val})
            }else if($(this).parents('li').index() == 1){
                $('html,body').stop().animate({'scrollTop':product_val})
            }else if($(this).parents('li').index() == 2){
                $('html,body').stop().animate({'scrollTop':notice_val}) 
            }else if($(this).parents('li').index() == 3){
                $('html,body').stop().animate({'scrollTop':event_val}) 
            }
            
            $('.header_bottom').show()
            
        }else if(win_w < 600){
            var info_val = $('#info').offset().top
            var product_val = $('#product').offset().top
            var notice_val  = $('#notice').offset().top
            var event_val = $('#event').offset().top


            if($(this).parents('li').index() == 0){
                $('html,body').stop().animate({'scrollTop':info_val})
            }else if($(this).parents('li').index() == 1){
                $('html,body').stop().animate({'scrollTop':product_val})
            }else if($(this).parents('li').index() == 2){
                $('html,body').stop().animate({'scrollTop':notice_val}) 
            }else if($(this).parents('li').index() == 3){
                $('html,body').stop().animate({'scrollTop':event_val}) 
            }
            
            $('#top_btn').show()
        
            $('body').css({overflow:'auto','height':'auto'})
            $('.header_bottom').hide()
            $('.modal').hide()

            $('.hamburger').removeClass('on')
        }
        
        $(window).resize(function(){
                var win_w = $(window).outerWidth()

                if(win_w > 600){
                var info_val = $('#info').offset().top
                var product_val = $('#product').offset().top
                var notice_val  = $('#notice').offset().top
                var event_val = $('#event').offset().top


                if($(this).parents('li').index() == 0){
                    $('html,body').stop().animate({'scrollTop':info_val})
                }else if($(this).parents('li').index() == 1){
                    $('html,body').stop().animate({'scrollTop':product_val})
                }else if($(this).parents('li').index() == 2){
                    $('html,body').stop().animate({'scrollTop':notice_val}) 
                }else if($(this).parents('li').index() == 3){
                    $('html,body').stop().animate({'scrollTop':event_val}) 
                }
                    
                $('.header_bottom').show()
                    
            }else if(win_w < 600){
                var info_val = $('#info').offset().top
                var product_val = $('#product').offset().top
                var notice_val  = $('#notice').offset().top
                var event_val = $('#event').offset().top


                if($(this).parents('li').index() == 0){
                    $('html,body').stop().animate({'scrollTop':info_val})
                }else if($(this).parents('li').index() == 1){
                    $('html,body').stop().animate({'scrollTop':product_val})
                }else if($(this).parents('li').index() == 2){
                    $('html,body').stop().animate({'scrollTop':notice_val}) 
                }else if($(this).parents('li').index() == 3){
                    $('html,body').stop().animate({'scrollTop':event_val}) 
                }

                $('#top_btn').show()

                $('body').css({overflow:'auto','height':'auto'})
                $('.header_bottom').hide()
                $('.modal').hide()

                $('.hamburger').removeClass('on')
            }

        })
        
    })
     
    /* 스크롤 탑 */
    
    $(window).scroll(function(){
        if($(this).scrollTop()>= 300){
            $('#top_btn').fadeIn()
        }else{
            $('#top_btn').fadeOut()
            $('#top_btn').removeClass('wh')
        }
        
        $('#top_btn').click(function(e){
            $('html,body').stop().animate({scrollTop:'0'})
            $(this).addClass('wh')

        })
    })
    
   
    /* 플레이 */
    var videoPlayer = $('#visual').find('video')
    function vplay(){
        videoPlayer.get(0).play()
    }
    
    function vpause(){
        videoPlayer.get(0).pause()
    }
    
    $('.play').click(function(e){
        vplay()
        $(this).hide()
        $('.pause').show()
    })
    
    $('.pause').click(function(e){
        vpause()
        $(this).hide()
        $('.play').show()
    })
    
    
    
    /* 슬라이드 */
    var mySwiper = new Swiper('.new_pro', {
      // Optional parameters
      direction: 'horizontal',
      autoplay:true,
      loop: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },    
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
        
    })
    
    /* a클릭 막기 */
    
    $('a').click(function(e){
        e.preventDefault()
    })
    
    
    
   
})