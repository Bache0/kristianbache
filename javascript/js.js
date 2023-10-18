function scaleDown() {
	
}

function show(category) {
    $('.work > figure').stop().not('.' + category).animate({opacity:'0'}, {queue: true, duration: 200});
    //$('.work > figure').not('.' + category).animate({margin: '0'}, 0);
    $('#filters > ul > li').removeClass('current-li');

    $('.' + category).delay(200).animate({opacity:'1'}, {queue: true, duration: 200});
    $('#' + category).addClass('current-li');
 
	if (category == "all") {
    	$('#filters > ul > li').removeClass('current-li');
    	$('#all').addClass('current-li');
    	$('.work > figure').animate({opacity:'1'}, {queue: true, duration: 200});
	}
}


$(document).ready(function() {
	$('#all').addClass('current-li');
 
    $("#filters > ul > li").click(function() {
        show(this.id);
    });

    $('#description #back_button h1, #description #back_button img').hover(function() {
        $('#description #back_button h1').stop().css('color', '#000');
        $('#description #back_button img').stop().animate({'opacity': '1'}, 0);
    }, function() {
        $('#description #back_button h1').stop().css('color', '#969696');
        $('#description #back_button img').stop().animate({'opacity': '0.5'}, 0);
    });

    $('#navigator #back_button h1, #navigator #back_button img').hover(function() {
        $('#navigator #back_button h1').stop().css('color', '#6b6b6b');
        $('#navigator #back_button img').stop().animate({'opacity': '0.7'}, 0);
    }, function() {
        $('#navigator #back_button h1').stop().css('color', '#000');
        $('#navigator #back_button img').stop().animate({'opacity': '1'}, 0);
    });


    var pictureActive;
    $('.picture_active').click(function() {
        pictureActive = $(this).attr('src');
        window.location.href = pictureActive;
    });

    //sidebar scrolling fixed
    var $sidebar   = $("#navigator"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 150;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top - 150) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 0);
            $("#navigator #back_button").stop().animate({'opacity': '1'}, 200);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 0);
            $("#navigator #back_button").stop().animate({'opacity': '0'}, 200);
        }
    });


    //sidebar hover effect and navigation

    $(".nav_subtitle a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });

    var aChildren = $("#nav_title li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values


    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top - 150; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav_subtitle_active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav_subtitle_active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("ul .nav_subtitle:last-child").hasClass("nav_subtitle_active")) {
                var navActiveCurrent = $("nav_subtitle_active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav_subtitle_active");
                $("ul .nav_subtitle:last-child").addClass("nav_subtitle_active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("ul .nav_subtitle:first-child").hasClass("nav_subtitle_active")) {
                var navActiveCurrent = $("nav_subtitle_active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav_subtitle_active");
                $("ul .nav_subtitle:first-child").addClass("nav_subtitle_active");
            }
        }

    });
});

function goBack() {
    window.history.back();
}

$(window).load(function() {
    var $four_picture = $('.four_picture');
    $four_picture.masonry({
        collumnWidth: 480,
        itemSelector: '.masonry'
    });
});

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
/*$(document).ready(function() {
    var thumbnailPicture;
    $('.thumbnail img').click(function() {
        thumbnailPicture = $(this).attr("src");
        $('.active_picture').attr('src', thumbnailPicture);
    });
});*/