$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1200,function(){}))}}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>700?$("#scroll").fadeIn():$("#scroll").fadeOut()}),$("#scroll").click(function(){return $("html, body").animate({scrollTop:0},600),!1})}),$(document).ready(function(){$(".button-collapse").sideNav()});var currentYear=new Date;$(".year").append(currentYear.getFullYear());