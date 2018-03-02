$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '5941440362',
        limit: 16,
        resolution: 'standard_resolution',
        accessToken: '5941440362.1677ed0.b1f67c7dc18946c8985c508fd0dd5b67',
        sortBy: 'most-recent',
        template: '<div class="col-lg-2 col-md-2 col-sm-6 col-6  instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-thumbnail"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

    $('#wrapper').fullpage();
    
    $('#carouselFade').carousel();

     baguetteBox.run('.tz-gallery');
});



