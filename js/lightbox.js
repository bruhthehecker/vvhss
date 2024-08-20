// lightbox.js

document.addEventListener('DOMContentLoaded', function() {
    var pswpElement = document.querySelector('.pswp');
    
    var lightboxElements = document.querySelectorAll('.news-item .lightbox');

    lightboxElements.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var items = Array.from(lightboxElements).map(function(el) {
                return {
                    src: el.href,
                    w: parseInt(el.getAttribute('data-pswp-width'), 10),
                    h: parseInt(el.getAttribute('data-pswp-height'), 10)
                };
            });

            var options = {
                index: Array.from(lightboxElements).indexOf(link),
                bgOpacity: 0.8,
                showHideOpacity: true
            };

            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    });
});
