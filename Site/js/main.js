function initMap(){
    var card1Div = document.getElementById('card01');
    var card2Div = document.getElementById('card02');
    var card3Div = document.getElementById('card03');
    var card4Div = document.getElementById('card04');
    var card5Div = document.getElementById('card05');
    var card6Div = document.getElementById('card06');
    var card7Div = document.getElementById('card07');
    var card8Div = document.getElementById('card08');
    var card9Div = document.getElementById('card09');
    var card10Div = document.getElementById('card10');
    var card11Div = document.getElementById('card11');
    var card12Div = document.getElementById('card12');
	var map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 25.242189, lng: -51.868182},
		zoom: 3,
    gestureHandling: 'none',
    streetViewControl: false,
    mapTypeControl: false,
    styles:[
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "18"
            },
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "1.36"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "1.25"
            },
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#262525"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#262525"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ac9167"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e1e6e9"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e1e6e9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#9aaeb2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e1e6e9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
	});
    var image1 = {
        url: 'http://pages.wcs.org/caughtoncamera/img/ICON_OPEN_inactive.png',
        size: new google.maps.Size(58, 58),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 40)
        };
    var image2 = {
        url: 'http://pages.wcs.org/caughtoncamera/img/ICON_OPEN_active.png',
        size: new google.maps.Size(58, 58),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 40)
        };
    var image3 = {
        url: 'http://pages.wcs.org/caughtoncamera/img/ICON_LOCK_inactive.png',
        size: new google.maps.Size(58, 58),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 40)
        };
    var image4 = {
        url: 'http://pages.wcs.org/caughtoncamera/img/ICON_LOCK_active.png',
        size: new google.maps.Size(58, 58),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 40)
        };
        var cameraTrapMarker1 = new google.maps.Marker({
          position: {lat: -20.220100, lng: 50.201149},
          map: map,
          icon: image1
        });
        var cameraTrapMarker2 = new google.maps.Marker({
          position: {lat: 35.878503, lng: 67.656180},
          map: map,
          icon: image1
        });
        var cameraTrapMarker3 = new google.maps.Marker({
          position: {lat: 13.550485, lng: 30.145785},
          map: map,
          icon: image1
        });
        var cameraTrapMarker4 = new google.maps.Marker({
          position: {lat: 53.838983, lng: -107.196719},
          map: map,
          icon: image1
        });
        var cameraTrapMarker5 = new google.maps.Marker({
          position: {lat: -1.527998, lng: -78.149998},
          map: map,
          icon: image1
        });
        var cameraTrapMarker6 = new google.maps.Marker({
          position: {lat: 0.495343, lng: 37.884267},
          map: map,
          icon: image1
        });
        var cameraTrapMarker7 = new google.maps.Marker({
          position: {lat: 22.971800, lng: 79.261098},
          map: map,
          icon: image1
        });
        var cameraTrapMarker8 = new google.maps.Marker({
          position: {lat: 22.233604, lng: 102.217219},
          map: map,
          icon: image1
        });
        var cameraTrapMarker9 = new google.maps.Marker({
          position: {lat: 22.291126, lng: 95.958744},
          map: map,
          icon: image1
        });
        var cameraTrapMarker10 = new google.maps.Marker({
          position: {lat: 9.549046, lng: 8.667044},
          map: map,
          icon: image1
        });
        var cameraTrapMarker11 = new google.maps.Marker({
          position: {lat: 9.549046, lng: 8.667044},
          map: map,
          icon: image1
        });
        var cameraTrapMarker12 = new google.maps.Marker({
          position: {lat: -3.018744, lng: 21.931882},
          map: map,
          icon: image1
        });
// marker 1
google.maps.event.addDomListener(card1Div, 'mouseover', function(){
cameraTrapMarker1.setIcon(image2);
map.panTo({lat: -20.220100, lng: 20.201149});
});
google.maps.event.addDomListener(card1Div, 'mouseout', function(){
cameraTrapMarker1.setIcon(image1);
map.panTo({lat: -20.220100, lng: 20.201149});
});
// marker 2
google.maps.event.addDomListener(card2Div, 'mouseover', function(){
cameraTrapMarker2.setIcon(image2);
map.panTo({lat: 35.878503, lng: 37.656180});
});
google.maps.event.addDomListener(card2Div, 'mouseout', function(){
cameraTrapMarker2.setIcon(image1);
map.panTo({lat: 35.878503, lng: 37.656180});
});
// marker 3
google.maps.event.addDomListener(card3Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker3.setIcon(image4);
        map.panTo({lat: 13.550485, lng: 0.145785});
    }else{
        cameraTrapMarker3.setIcon(image2);
        map.panTo({lat: 13.550485, lng: 0.145785});
    }
});
google.maps.event.addDomListener(card3Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker3.setIcon(image3);
        map.panTo({lat: 13.550485, lng: 0.145785});
    }else{
        cameraTrapMarker3.setIcon(image1);
        map.panTo({lat: 13.550485, lng: 0.145785});
    }
});
// marker 4
google.maps.event.addDomListener(card4Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker4.setIcon(image4);
        map.panTo({lat: 53.838983, lng: -137.196719});
    }else{
        cameraTrapMarker4.setIcon(image2);
        map.panTo({lat: 53.838983, lng: -137.196719});
    }
});
google.maps.event.addDomListener(card4Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker4.setIcon(image3);
        map.panTo({lat: 53.838983, lng: -137.196719});
    }else{
        cameraTrapMarker4.setIcon(image1);
        map.panTo({lat: 53.838983, lng: -137.196719});
    }
});
// marker 5
google.maps.event.addDomListener(card5Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker5.setIcon(image4);
        map.panTo({lat: -1.527998, lng: -108.149998});
     }else{
        cameraTrapMarker5.setIcon(image2);
        map.panTo({lat: -1.527998, lng: -108.149998});
     }   
});
google.maps.event.addDomListener(card5Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker5.setIcon(image3);
        map.panTo({lat: -1.527998, lng: -108.149998});
    }else{
        cameraTrapMarker5.setIcon(image1);
        map.panTo({lat: -1.527998, lng: -108.149998});
    }
});
// marker 6
google.maps.event.addDomListener(card6Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker6.setIcon(image4);
        map.panTo({lat: 0.495343, lng: 7.884267});
    }else{
        cameraTrapMarker6.setIcon(image2);
        map.panTo({lat: 0.495343, lng: 7.884267});
    }
});
google.maps.event.addDomListener(card6Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker6.setIcon(image3);
        map.panTo({lat: 0.495343, lng: 7.884267});
    }else{
        cameraTrapMarker6.setIcon(image1);
        map.panTo({lat: 0.495343, lng: 7.884267});
    }
})
// marker 7
google.maps.event.addDomListener(card7Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker7.setIcon(image4);
        map.panTo({lat: 22.971800, lng: 49.261098});
    }else{
        cameraTrapMarker7.setIcon(image2);
        map.panTo({lat: 22.971800, lng: 49.261098});
    }
});
google.maps.event.addDomListener(card7Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker7.setIcon(image3);
        map.panTo({lat: 22.971800, lng: 49.261098});
    }else{
        cameraTrapMarker7.setIcon(image1);
        map.panTo({lat: 22.971800, lng: 49.261098});
    }
});
// marker 8
google.maps.event.addDomListener(card8Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker8.setIcon(image4);
        map.panTo({lat: 22.233604, lng: 72.217219});
    }else{
        cameraTrapMarker8.setIcon(image2);
        map.panTo({lat: 22.233604, lng: 72.217219});
    }
});
google.maps.event.addDomListener(card8Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker8.setIcon(image3);
        map.panTo({lat: 22.233604, lng: 72.217219});
    }else{
        cameraTrapMarker8.setIcon(image1);
        map.panTo({lat: 22.233604, lng: 72.217219});
    }
});
// marker 9
google.maps.event.addDomListener(card9Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker9.setIcon(image4);
        map.panTo({lat: 22.291126, lng: 65.958744});
    }else{
        cameraTrapMarker9.setIcon(image2);
        map.panTo({lat: 22.291126, lng: 65.958744});
    }
});
google.maps.event.addDomListener(card9Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker9.setIcon(image3);
        map.panTo({lat: 22.291126, lng: 65.958744});
    }else{
        cameraTrapMarker9.setIcon(image1);
        map.panTo({lat: 22.291126, lng: 65.958744});
    }
});
// marker 10
google.maps.event.addDomListener(card10Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker10.setIcon(image4);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }else{
        cameraTrapMarker10.setIcon(image2);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }
});
google.maps.event.addDomListener(card10Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker10.setIcon(image3);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }else{
        cameraTrapMarker10.setIcon(image1);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }
});
// marker 11
google.maps.event.addDomListener(card11Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker11.setIcon(image4);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }else{
        cameraTrapMarker11.setIcon(image2);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }
});
google.maps.event.addDomListener(card11Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker11.setIcon(image3);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }else{
        cameraTrapMarker11.setIcon(image1);
        map.panTo({lat: 9.549046, lng: -28.667044});
    }
});
// marker 12
google.maps.event.addDomListener(card12Div, 'mouseover', function(){
    if (getCookie(name)==null){
        cameraTrapMarker12.setIcon(image4);
        map.panTo({lat: -3.018744, lng: -11.931882});
    }else{
        cameraTrapMarker12.setIcon(image2);
        map.panTo({lat: -3.018744, lng: -11.931882});
    }
});
google.maps.event.addDomListener(card12Div, 'mouseout', function(){
    if (getCookie(name)==null){
        cameraTrapMarker12.setIcon(image3);
        map.panTo({lat: -3.018744, lng: -11.931882});
    }else{
        cameraTrapMarker12.setIcon(image1);
        map.panTo({lat: -3.018744, lng: -11.931882});
    }

});
}
// end map
// email form 
$(function(){       
    $("#email-submit").on("click",function(e){
        e.preventDefault();
        var errorBlock = $("#error");
        var email = $("#cons_email").val();
        getCookie(name);
        var surveyID = $("#surveyID").val();
       
            if (!isValidEmail(email)) {
                errorBlock.html("Please enter a Valid email address to continue");
                }
            else {
                  
               var url = "http://e.wcs.org/site/Survey?cons_info_component=t&cons_email="+email+"&SURVEY_ID="+surveyID+"&ACTION_SUBMIT_SURVEY_RESPONSE=Submit";
                 $.ajax({
                      type: "POST",
                      url: url
                    })
                    .always(function(){
               });
            }  
        });
    });    
    function isValidEmail(str) {
        var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (filter.test(str)) {
            close_box_locked();
             $('.overlay-locked, #unlock-photos-banner').css('display', 'none');  
             
            setCookie();
            getCookie(name);
            window.location.reload()
            return true;
            }
        else{
            return false;
            }
        }
// if email is valid set cookie
function setCookie(){
document.cookie = "email=visitoremail; expires=Wed, 18 Dec 2023 12:00:00 GMT; path=/";
}
function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1);
if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length,c.length);
}
return null;
}

// // lightbox 
$(document).ready(function(){
  $('.lightbox').click(function(){

    if (getCookie(name)==null){
    $('.backdrop-locked, .box-locked').css('display', 'block');
}else{
     $('.backdrop, .box').css('display', 'block');   
}
  });
});
 if (getCookie(name)==null){
    $('.close-locked').click(function(){    
    close_box_locked();
document.getElementById('error').innerHTML = "";
    });
} else{
    $('#close').click(function(){
    close_box();
    });
}
 if (getCookie(name)==null){
$('.backdrop-locked').click(function(){
close_box_locked();
document.getElementById('error').innerHTML = "";
});
} else{
    $('.overlay-locked, #unlock-photos-banner').css('display', 'none'); 
    $('.backdrop').click(function(){
close_box();
});
}
 if (getCookie(name)==null){
function close_box_locked()
{
  $('.backdrop-locked, .box-locked').css('display', 'none');
}
} else{
    function close_box()
{
  $('.backdrop, .box').css('display', 'none');
}
}
// slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesUnlocked");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
