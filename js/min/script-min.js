$(document).ready(function(){$.ajax("portfolio-content.html",{success:function(o){$(".portfolio-container").html(o)}}),$(window).scroll(function(){if($(window).scrollTop()>30?$(".site-header").slideDown("fast"):$(window).scrollTop()<30&&$(".site-header").slideUp("fast"),$(window).scrollTop()>$(window).height()){var o=0,n=300;$(".portfolio-item").each(function(){$(this).delay(o).fadeTo(800,1),o+=n})}}),$(".nav-toggle").on("click",function(){$(this).toggleClass("toggle-open"),$(".nav-menu").fadeToggle()})});