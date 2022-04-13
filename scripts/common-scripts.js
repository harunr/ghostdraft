
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
            $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
                if (this.value == this.defaultValue) {
                    this.value = ''
                }
            }).blur(function () {
                if (!this.value) {
                    this.value = this.defaultValue;
                }
            })
            // Ends input common focus and blur for value.


            // Begin input common focus and blur for value.
            $('input, textarea').keyup(function () {
                $(this).parent().addClass('populated')
            })


            $('input, textarea').blur(function () {
                if (!this.value) {
                    this.value = this.defaultValue;
                }
                if (this.value == this.defaultValue) {
                    $(this).parent().removeClass('populated')
                }
            });
		
        // Phone nav click function 
        $('.phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
            $("body").toggleClass("navExpanded");
            $(".main-nav > ul > li").find("> div.mega-menu-item-wrap:visible").slideUp()
            $(".main-nav > ul > li").find("> ul:visible").slideUp()
            $(".main-nav > ul > li").removeClass("active");
        });
		
        $('.main-nav ul > li').find(">ul").parent().addClass("dropdown");
        $('.main-nav ul > li.dropdown').find(">ul").addClass("dropdown-menu");
        $('.main-nav ul > li').find(">div").parent().addClass("mega");
        $('.main-nav ul > li.mega').find(">div").addClass("mega-menu");
            
        if($('#carousel').length){
            $('#carousel').slick({
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: true,
                 autoplay: true,
            });
        }
        
        if($('#full-width-carousel').length){
            $('#full-width-carousel').slick({
                  centerMode: true,
                  slidesToShow:1,
                centerPadding: '0',
            });
        }
        
        if($(window).width() < 992){
           $(".main-nav > ul > li.dropdown > .dropdown-icon").bind('click', 'touchend', function(){
               var $_this = $(this);
                $(".main-nav > ul > li").find("> ul:visible").slideUp();
               $(".main-nav > ul > li").find("> div.mega-menu-item-wrap:visible").slideUp();
                $(".main-nav > ul > li").removeClass("active");
                if($_this.parent().find("> ul:visible").length){
                    $_this.parent().find("> ul").slideUp()
                    $_this.parent().removeClass("active");
                } 
                else{
                    $_this.parent().addClass("active")
                    $_this.parent().find("> ul").slideDown()
                }
            });

            $(".main-nav > ul > li.mega > .dropdown-icon").bind('click', 'touchend', function(){
                var $_this = $(this);
                   $(".main-nav > ul > li").find("> div.mega-menu-item-wrap:visible").slideUp()
                   $(".main-nav > ul > li").find("> ul:visible").slideUp();
                   $(".main-nav > ul > li").removeClass("active")
                if($_this.parent().find("> div.mega-menu-item-wrap:visible").length){
                    $_this.parent().removeClass("active")
                    $_this.parent().find("> div.mega-menu-item-wrap").slideUp()
                } 
                else{
                    $_this.parent().addClass("active")
                    $_this.parent().find("> div.mega-menu-item-wrap").slideDown()
                }
            });
        }
        
        if($(".main-header-section").length){
            var $header = $(".main-header-section"),
            $clone = $header.before($header.clone().addClass("fixedTop")),
            $fixedHeader = $('.fixedTop'),
            $mainHeaderHeight = $header.outerHeight(),
            $headerHeight = $fixedHeader.outerHeight(),
            lastPos = 0;
            if ($(window).width() > 768) {
                $fixedHeader.css({
                    top: - $headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {

                        //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;


                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else{
                $(window).on("scroll", function(){
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    }else{
                        $("body").removeClass("over-header");
                    }
                })
            }
        }
        
        
        if($("select.stylled-select").length){
            $("select.stylled-select").selectric();
        } 
        
        if($(".get-started-content").length){
            $("body").addClass("get-started-pgae")
        }
        
        
         $(".accordion > h4").bind('click', 'touchend', function(){
                   $(".accordion").find("> p:visible").slideUp()
                   $(".accordion").removeClass("active")
                if($(this).parent().find("> p:visible").length){
                    $(this).removeClass("active")
                    $(this).parent().find("> p").slideUp()
                } 
                else{
                    $(this).addClass("active")
                    $(this).parent().find(">p").slideDown()
                }
            });

        
        
        
	})// End ready function.
        
    $(window).on('load resize orientationchange', function() {
        if($('#post-slider').length){
            $('#post-slider').each(function(){
                var $carousel = $(this);
                /* Initializes a slick carousel only on mobile screens */
                // slick on mobile
                if ($(window).width() > 767) {
                    if ($carousel.hasClass('slick-initialized')) {
                        $carousel.slick('unslick');
                    }
                }
                else{
                    if (!$carousel.hasClass('slick-initialized')) {
                        $carousel.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            mobileFirst: true,
                            dots: false,
                            arrows: false,
                            autoplay: true,
                            //prevArrow: $('.billing-solutions-section .prev-btn'),
                            //nextArrow: $('.billing-solutions-section .next-btn'),
                        });
                    }
                }
            });  
        }
    });
	

})(jQuery)

