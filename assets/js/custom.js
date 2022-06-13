let config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        767: {
            perView:1
        },
        992: {
            perView:2
        }
    }
};
new Glide('._blog_slider', config).mount();