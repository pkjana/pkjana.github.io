/*
 * Document   : pkjana.js
 * Created on : ‎Tuesday, October 17, 2017, ‏‎07:12:23 PM‎
 * Author     : Pabitra K Jana, IIT Kharagpur
 * 
 */

$(document).ready(function () {

                // hide .navbar first
                $(".navbar").hide();

                // fade in .navbar
                $(function () {
                    $(window).scroll(function () {
                        // set distance user needs to scroll before we fadeIn navbar
                        if ($(this).scrollTop() > 100) {
                            $('.navbar').fadeIn();
                        } else {
                            $('.navbar').fadeOut();
                        }
                    });
				//Get the repo last commit date				
					$.ajax({url: "https://api.github.com/repos/pkjana/pkjana.github.io/commits/master", success: function(result){						
							$("#update-on").html(result.commit.author.date);
					}});				

                });
				
				//section padding top setting while navbar item click
				$(".about").click(function(){
					$("#about").css("padding-top", $(".navbar").height());
				});
				$(".portfolio").click(function(){
					$("#portfolio").css("padding-top", $(".navbar").height());
				});
				$(".contact").click(function(){
					$("#contact").css("padding-top", $(".navbar").height());
				});
				
});
