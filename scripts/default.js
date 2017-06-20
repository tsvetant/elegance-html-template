/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);


/* Clock module */
function updateClock() {
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    $("#time").html(currentTimeString);  
}


/*
 * simpleWeather
 * http://simpleweatherjs.com
 *
 * A simple jQuery plugin to display the current weather
 * information for any location using Yahoo! Weather.
 *
 * Developed by James Fleeting <@twofivethreetwo> <http://iwasasuperhero.com>
 * Another project from monkeeCreate <http://monkeecreate.com>
 *
 * Version 2.2.0 - Last updated: April 30 2013
 */
(function(e){"use strict";e.extend({simpleWeather:function(t){t=e.extend({zipcode:"",woeid:"2357536",location:"",unit:"f",success:function(e){},error:function(e){}},t);var n=new Date;var r="http://query.yahooapis.com/v1/public/yql?format=json&rnd="+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+"&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";if(t.location!==""){r+='select * from weather.forecast where location in (select id from weather.search where query="'+t.location+'") and u="'+t.unit+'"'}else if(t.zipcode!==""){r+='select * from weather.forecast where location in ("'+t.zipcode+'") and u="'+t.unit+'"'}else if(t.woeid!==""){r+="select * from weather.forecast where woeid="+t.woeid+' and u="'+t.unit+'"'}else{t.error("Could not retrieve weather due to an invalid WOEID or location.");return false}e.getJSON(r,function(n){if(n!==null&&n.query.results!==null){e.each(n.query.results,function(e,n){if(n.constructor.toString().indexOf("Array")!==-1){n=n[0]}var r=new Date;var i=new Date(r.toDateString()+" "+n.astronomy.sunrise);var s=new Date(r.toDateString()+" "+n.astronomy.sunset);if(r>i&&r<s){var o="d"}else{var o="n"}var u=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];var a=u[Math.round(n.wind.direction/22.5)];if(n.item.condition.temp<80&&n.atmosphere.humidity<40){var f=-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2)}else{var f=n.item.condition.temp}if(t.unit==="f"){var l="c";var c=Math.round(5/9*(n.item.condition.temp-32));var h=Math.round(5/9*(n.item.forecast[0].high-32));var p=Math.round(5/9*(n.item.forecast[0].low-32));var d=Math.round(5/9*(n.item.forecast[1].high-32));var v=Math.round(5/9*(n.item.forecast[1].low-32))}else{var l="f";var c=Math.round(9/5*n.item.condition.temp+32);var h=Math.round(9/5*n.item.forecast[0].high+32);var p=Math.round(9/5*n.item.forecast[0].low+32);var d=Math.round(5/9*(n.item.forecast[1].high+32));var v=Math.round(5/9*(n.item.forecast[1].low+32))}var m={title:n.item.title,temp:n.item.condition.temp,tempAlt:c,code:n.item.condition.code,todayCode:n.item.forecast[0].code,units:{temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed,tempAlt:l},currently:n.item.condition.text,high:n.item.forecast[0].high,highAlt:h,low:n.item.forecast[0].low,lowAlt:p,forecast:n.item.forecast[0].text,wind:{chill:n.wind.chill,direction:a,speed:n.wind.speed},humidity:n.atmosphere.humidity,heatindex:f,pressure:n.atmosphere.pressure,rising:n.atmosphere.rising,visibility:n.atmosphere.visibility,sunrise:n.astronomy.sunrise,sunset:n.astronomy.sunset,description:n.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+".png",tomorrow:{high:n.item.forecast[1].high,highAlt:d,low:n.item.forecast[1].low,lowAlt:v,forecast:n.item.forecast[1].text,code:n.item.forecast[1].code,date:n.item.forecast[1].date,day:n.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.forecast[1].code+"d.png"},city:n.location.city,country:n.location.country,region:n.location.region,updated:n.item.pubDate,link:n.item.link};t.success(m)})}else{if(n.query.results===null){t.error("An invalid WOEID or location was provided.")}else{t.error("There was an error retrieving the latest weather information. Please try again.")}}});return this}})})(jQuery)


/* Function for vertical align */ 
$.fn.vAlign = function() {
    return this.each(function(i) {
        var h = $(this).height();
        var oh = $(this).outerHeight();
        var mt = (h + (oh - h)) / 2;
        $(this).css("margin-top", "-" + mt + "px");
        $(this).css("top", "50%");
        $(this).css("position", "fixed");
    });
};


/* Fitvid fast plug */
(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);


/*
* You have to buy this slider - 15$ value
* http://codecanyon.net/item/slider-revolution-responsive-jquery-plugin/2580848
* Remove bottom 3 lines and uncomment next passage if you have Revolution Slider
*/
jQuery(document).ready(function () {
    jQuery('#rev_slider_1_2_wrapper').html('<a href="http://codecanyon.net/item/slider-revolution-responsive-jquery-plugin/2580848?ref=elementpz" target="_blank"><img src="styles/images/slides/rev-buy.png" style="width:100%;" /></a>');
});

/*
var tpj=jQuery;
tpj.noConflict();
var revapi1;
tpj(document).ready(function(){
if (tpj.fn.cssOriginal != undefined)
    tpj.fn.css = tpj.fn.cssOriginal;
if(tpj('#rev_slider_1_2').revolution == undefined)
    revslider_showDoubleJqueryError('#rev_slider_1_2');
else
   revapi1 = tpj('#rev_slider_1_2').show().revolution(
    {
        delay:6000,
        startwidth:1024,
        startheight:400,
        hideThumbs:200,
        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:4,
        navigationType:"none",
        navigationArrows:"verticalcentered",
        navigationStyle:"round",
        touchenabled:"on",
        onHoverStop:"on",
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        shadow:0,
        fullWidth:"on",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
    
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0                   
    });
});
*/

/**
    Define before startin
    @ clean
*/







/*                   */
/* DEMO PREVIEW ONLY */
/*                   */
// JS STYLESHEET SWITCHER
    $.fn.styleSwitcher = function(options){     
        var defaults = {    
            slidein: true, preview: true, container: this.selector, directory: "styles/", useCookie: true, cookieExpires: 30, manageCookieLoad:true    
        };
        var opts = $.extend(defaults, options);
        // if using cookies and using JavaScript to load css
        if (opts.useCookie && opts.manageCookieLoad) {
            // check if css is set in cookie
            var isCookie = readCookie("style_selected")
            if(isCookie){
                var newStyle = opts.directory + isCookie + ".css";
                $("link[id=theme]").attr("href",newStyle);
                baseStyle = newStyle;
            }
            else{ }
        }       
        // if using slidein
        if(opts.slidein) {
            $(opts.container).slideDown("slow");
        }
        else {
            $(opts.container).show();
        }
        var baseStyle = $("link[id=theme]").attr("href");
        $(opts.container + " a").click(
            function () {
                var newStyle = opts.directory + this.id + ".css";
                $("link[id=theme]").attr("href",newStyle);
                baseStyle = newStyle;
                if(opts.useCookie){
                    createCookie("style_selected",this.id,opts.cookieExpires)
                }
            }
        );
    };
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }   
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }   
    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
jQuery(document).ready(function () {
    jQuery('body').after(
        '<div id="styleswitch">'+
            '<h2>Select style</h2>'+
            '<a href="javascript: void(0)" title="switch styling custom" id="custom">Default</a>'+
            '<a href="javascript: void(0)" title="switch styling custom_red" id="custom_red">Red</a>'+
            '<a href="javascript: void(0)" title="switch styling custom_purple" id="custom_purple">Purple</a>'+
            '<div></div>'+
        '</div>'
    );
    jQuery('#styleswitch').styleSwitcher();
});
/*                   */
/* DEMO PREVIEW ONLY */
/*                   */









var map;
jQuery(document).ready(function () {
    'use strict';

    /* Fittext responsive texts*/ 
    jQuery(".futubox h1").fitText(1.5, { maxFontSize: '20px;' });
    jQuery(".futubox h1.hhalf i").fitText(0.7, { maxFontSize: '25px;' });

    $('.affix-re').vAlign();

    /* CarouFredSel Slider */ 
    jQuery('#foo4').carouFredSel({
        responsive: true,
        width: '100%',
        scroll: 2,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        items: {
            width: 204,
            height: 150,
            visible: {
                min: 2,
                max: 6
            }
        }
    });

    /* Enable tooltips for header */
    $('.tphright-top>div:not(.curnav)').tooltip({placement: 'bottom',title: 'Sample tooltip',container: 'body'});
     $('#weather').tooltip({html: true, placement: 'bottom'});

    /* Footer contact form placeholder alternative */
    jQuery(".contactform input, .contactform textarea").focus(function() {
        if(this.value==this.defaultValue)this.value='';
    }).blur(function(){
        if(this.value=='')this.value=this.defaultValue;
    });

    /* Fix portfolio boxes size */
    var cw = jQuery('.pf-item.pbox').width();
    var cw2 = jQuery('.pf-item').width();
    jQuery('.pf-item.pbox').css({'height':cw+'px'});
    jQuery('.pf-item.pbox img').css({'height':cw+'px'});
    jQuery('.pf-item').css({'height':cw2+'px'});
    jQuery('.pf-item img').css({'height':cw2+'px'});

    /* Google maps */
    if(jQuery("#map" + name).length == 0) { } else {
      map = new GMaps({
        div: '#map',
          lat: -12.043333,
          lng: -77.028333
      });
    }

    /* Weather module */
    $.simpleWeather({
        zipcode: '',
        woeid: '838661', // You can select your WOEID @ http://woeid.rosselliot.co.nz/
        location: '',
        unit: 'c',
        success: function(weather) {
          var html;
          html   = '<span>'+weather.temp+'&deg;'+weather.units.temp+'</span>';
          $("#weather").attr('data-original-title', ''+weather.city+',&nbsp;'+weather.region+'<br />'+weather.currently+',&nbsp;'+weather.tempAlt+'&deg;F');
          $("#weather").html(html);
        },
        error: function(error) {
          $("#weather").html('<p>'+error+'</p>');
        }
    });


    setInterval('updateClock()', 1000);


    /* iView Slider */
    jQuery('#iview,#iview2').iView({
        pauseTime: 7000,
        pauseOnHover: true,
        directionNavHoverOpacity: 0,
        timer: "Bar",
        timerDiameter: "100%",
        timerPadding: 0,
        timerStroke: 5,
        timerBarStroke: 0,
        timerColor: "#00a5d4",
        timerPosition: "bottom-right",
        timerX: 1,
        timerY: 0
    });


    /* Tweets loader v1
    jQuery(".tweet").tweet({
        username: "gamebirdstudios",
        join_text: "auto",
        avatar_size: 32,
        count: 2,
        auto_join_text_default: "", 
        auto_join_text_ed: "",
        auto_join_text_ing: "",
        auto_join_text_reply: "",
        auto_join_text_url: "",
        loading_text: "<div class='loadicon'></div>"
    });
		Since authetication is required it needs to get auth from Twitter Dev center
		to display such information (also a PHP availability should be checked)
	 */
	jQuery('.tweet').tweetMachine('#ZeroFollowers');


    /* Responsive Slides Slider */
    jQuery(".rslides").responsiveSlides({
        nav: true,
        prevText: "",
        nextText: "",
    });


    /* Responsive Slides Small Slider */
    jQuery(".rslides-small").responsiveSlides({
        nav: true,
        pager: false,
        prevText: "",
        nextText: "",
    });


    /*Fix youtube z-index*/
    jQuery('iframe').each(function () {
        var url = jQuery(this).attr("src");
        if (url.indexOf("youtube.com") >= 0) {
            if (url.indexOf("?") >= 0) {
                jQuery(this).attr("src", url + "&wmode=transparent");
            } else {
                jQuery(this).attr("src", url + "?wmode=transparent");
            }
        }
    });

    /* Top menu fades */
    var slideDuration;
    slideDuration = 100;
    jQuery('.ddmenu li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn({ duration: slideDuration, queue: false }).css('display', 'none').slideDown(slideDuration);
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut({ duration: slideDuration, queue: false }).slideUp(slideDuration);
    });

    /* Bootstrap Accordion */
    jQuery('.accordion-body').on('show', function(e){jQuery(e.currentTarget).parent().find('.accordion-heading').addClass('active')})
    jQuery('.accordion-body').on('hide', function(e){jQuery(e.currentTarget).parent().find('.accordion-heading').removeClass('active')})
    jQuery('.in.collapse').parent().find('.accordion-heading').addClass('active');


    /* Go to top script */
    jQuery('.gotop').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 250);
        return false;
    });













    jQuery('.errorbox, .errorbox2').click(function(){
        event.preventDefault();
        jQuery(this).fadeIn('slow'); // show the error message
    });

    jQuery('#send').click(function(){ // when the button is clicked the code executes
        jQuery('.error').fadeOut('slow'); // reset the error messages (hides them)
        var error = false; // we will set this true if the form isn't valid
        var name = jQuery('input#name').val(); // get the value of the input field
        if(name == "" || name == " ") {
            jQuery('#err-name').fadeIn('slow'); // show the error message
            error = true; // change the error state to true
        }
        var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        var email = jQuery('input#email').val(); // get the value of the input field
        if (email == "" || email == " ") { // check if the field is empty
            jQuery('#err-email').fadeIn('slow'); // error - empty
            error = true;
        }else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
            jQuery('#err-emailvld').fadeIn('slow'); // error - not right format
            error = true;
        }
        if(error == true) {
            jQuery('.errorbox').fadeIn('slow'); // show the error message
            jQuery('#err-form').slideDown('slow');
            return false;
        }
        var data_string =jQuery('#ajax-form').serialize(); // Collect data from form
        //alert(data_string);
        jQuery.ajax({
            type: "POST",
            url: jQuery('#ajax-form').attr('action'),
            data: data_string,
            timeout: 6000,
            error: function(request,error) {
                if (error == "timeout") {
                    jQuery('#err-timedout').slideDown('slow');
                }
                else {
                    jQuery('#err-state').slideDown('slow');
                    jQuery("#err-state").html('An error occurred: ' + error + '');
                }
            },
            success: function() {
               // jQuery('#ajax-form').slideUp('slow');
                jQuery('.errorbox').slideUp('slow'); // hide the error message
                jQuery('#ajaxsuccess').slideDown('slow');
            }
        });
        return false; // stops user browser being directed to the php file
    }); // end click function





    jQuery('#send2').click(function(){ // when the button is clicked the code executes
        jQuery('.error2').fadeOut('slow'); // reset the error messages (hides them)
        var error = false; // we will set this true if the form isn't valid
        var name = jQuery('input#name2').val(); // get the value of the input field
        var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        var email = jQuery('input#email2').val(); // get the value of the input field
        var message = jQuery('textarea#message2').val(); // get the value of the input field

        if(name == "" || name == " " || name == "Name") {
            jQuery('#name2').addClass('wrong', 500); //jQuery('#err-name2').fadeIn('slow'); // show the error message
            error = true; // change the error state to true
        } else { 
            jQuery('#name2').removeClass('wrong', 500);
        }

        if (email == "" || email == " " || email == "Email") { // check if the field is empty
            jQuery('#email2').addClass('wrong', 500); //jQuery('#err-email2').fadeIn('slow'); // error - empty
            error = true;
        } else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
            jQuery('#email2').addClass('wrong', 500); //jQuery('#err-emailvld2').fadeIn('slow'); // error - not right format
            error = true;
        } else {
            jQuery('#email2').removeClass('wrong', 500);
        }

        if(message == "" || message == " " || message == "Message") {
            jQuery('#message2').addClass('wrong', 500); //jQuery('#err-name2').fadeIn('slow'); // show the error message
            error = true; // change the error state to true
        } else {
            jQuery('#message2').removeClass('wrong', 500);
        }

        if(error == true) {
            jQuery('.errorbox2').fadeIn('slow'); // show the error message
            jQuery('#err-form2').slideDown('slow');
            return false;
        }


        var data_string =jQuery('#ajax-form2').serialize(); // Collect data from form //alert(data_string);
        jQuery.ajax({
            type: "POST",
            url: jQuery('#ajax-form2').attr('action'),
            data: data_string,
            timeout: 6000,
            error: function(request,error) {
                if (error == "timeout") {
                    jQuery('#err-timedout2').slideDown('slow');
                }
                else {
                    jQuery('#err-state2').slideDown('slow');
                    jQuery("#err-state2").html('An error occurred: ' + error + '');
                }
            },
            success: function() {
               // jQuery('#ajax-form').slideUp('slow');
                jQuery('.errorbox2').slideUp('slow'); // hide the error message
                jQuery('#ajaxsuccess2').slideDown('slow');
            }
        });
        return false; // stops user browser being directed to the php file
    }); // end click function
});










/*
	Sidecar reworked version to display frames and AJAX pages.
	Licensed under MIT License.
	More information here: https://github.com/digital-telepathy/sidecar
*/
(function (b, a, c) {
    a.dtAccountDrawer = function () {
        this.elems = {};
        this.options = {};
        this.isOpen = false;
        this.forceReload = false;
        this.ns = "dt-drawer";
        this.fragment = "";
        this.fragmentClass = "";
    //Point the url to your _frame.html or renamed option
        this.iframe_src = "_frame.html"; //this.iframe_src = document.location.protocol + "//www.";
        this.iframe_url = "";
        this.page_url = a.location.href;
        this.__construct()
    };
    a.dtAccountDrawer.prototype.__construct = function () {
        var f = this;
        this.options.openDelay = 250;
        this.elems.html = b("html");
        this.elems.body = b("body");
        this.elems.head = b("head");
        this.elems.iframe = false;
        var d = document.getElementsByTagName("script");
        var j = new RegExp("sidecar(.dev)?.js.*side=(left|right)");
        for (var i in d) {
            var e = d[i];
            if (e.src && e.src.match(j)) {
                var h = e.src.match(j)[e.src.match(j).length - 1];
                this.elems.body.addClass("sidecar-" + h)
            }
        }
        this.options.android = false;
        var g = navigator.userAgent.toLowerCase();
        if (g.indexOf("android") > -1) {
            this.options.android = true;
            this.elems.body.addClass("noDrawerTransition");
            this.elems.body.addClass("noFixedPosition")
        }
        if (g.match(/android|ipad|iphone/)) {
            this.elems.body.removeClass("sidecar-left")
        }
        this._addDrawer();
        this._bindEvents()
    };
    a.dtAccountDrawer.prototype._addDrawer = function () {
        this.elems.drawer = b('<div id="' + this.ns + '"></div>').appendTo(this.elems.body);
        this.elems.drawerInner = b('<div class="' + this.ns + '-inner"></div>').appendTo(this.elems.drawer);
        this.elems.drawerInner.css({
                height: b(document).height()
            });
        this._addOpenButton();
        this._addCloseButton()
    };
    a.dtAccountDrawer.prototype._addOpenButton = function () {
        this.elems.open = b('<a id="' + this.ns + '-open" class="icon-bars" href="#open"><div class="horiz bar"></div><div class="vert bar"></div><div id="bowlG"><div id="bowl_ringG"><div class="ball_holderG"><div class="ballG"></div></div></div></div></a>').appendTo(this.elems.body)
    };
    a.dtAccountDrawer.prototype._addCloseButton = function () {
        this.elems.close = b('<a id="' + this.ns + '-close" href="#close"><div class="horiz bar"></div></a>').appendTo(this.elems.body)
    };
    a.dtAccountDrawer.prototype._addIFrame = function () {
        var d = this;
        d.elems.iframe = b('<iframe id="' + this.ns + '-iframe" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" scrolling="no" frameborder="0" src="' + d.iframe_url + '"></iframe>').appendTo(this.elems.drawerInner);
        d.elems.open.addClass("spinner");
        if (this.options.android) {
            d.elems.iframe.addClass("loaded");
            d.elems.open.removeClass("spinner");
            d.elems.open.removeClass(d.fragmentClass);
            d.elems.body.addClass("openDrawer")
        } else {
            d.elems.iframe.ready(function (e) {
                setTimeout(function () {
                    d.elems.iframe.addClass("loaded");
                    d.elems.open.removeClass("spinner");
                    d.elems.open.removeClass(d.fragmentClass);
                    d.elems.body.addClass("openDrawer")
                }, d.options.openDelay)
            })
        }
    };
    a.dtAccountDrawer.prototype._removeIFrame = function () {
        if (typeof (this.elems.iframe) == "object") {
            this.elems.iframe.remove()
        }
        this.elems.iframe = false
    };
    a.dtAccountDrawer.prototype._bindEvents = function () {
        var d = this;
        this.elems.open.on("click", function (e) {
            e.preventDefault();
            d.open()
        });
        this.elems.close.on("click", function (e) {
            e.preventDefault();
            d.close()
        })
    };
    a.dtAccountDrawer.prototype.close = function () {
        this.elems.body.removeClass("openDrawer")
    };
    a.dtAccountDrawer.prototype.open = function () {
        var e = this;
        var f = "_dtsrc=" + e.page_url;
        if (e.elems.open.hasClass("action-signup")) {
            e.fragment = "#!signup|" + f;
            e.fragmentClass = "action-signup";
            e.forceReload = true
        } else {
            if (e.elems.open.hasClass("action-login")) {
                e.fragment = "#!login|" + f;
                e.fragmentClass = "action-login";
                e.forceReload = true
            } else {
                e.fragment = "#!" + f
            }
        }
        e.iframe_url = e.iframe_src + e.fragment;
        if (e.forceReload) {
            e._removeIFrame();
            e.forceReload = false
        }
        if (e.elems.iframe === false) {
            e._addIFrame()
        } else {
            e.elems.body.addClass("openDrawer")
        }
        var g = e.elems.open[0].className.match(/icon-([\w\d\-_+])/);
        if (g) {
            var d = g[1];
            if (typeof (_gaq) != "undefined") {
                _gaq.push(["_trackEvent", "SideCar", "Open", d])
            } else {
                if (typeof (pageTracker) != "undefined") {
                    pageTracker._trackEvent("SideCar", "Open", d)
                }
            }
        }
    };
    b(function () {
        b.data(document.body, "dtAccountDrawer", new dtAccountDrawer())
    })
})(jQuery, window, null);