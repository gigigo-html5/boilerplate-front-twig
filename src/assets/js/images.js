import $ from 'jquery';

class Images {
    constructor() {

    }
    load() {

        $('[data-image-preload]').each((key, item) => {

            $(item).addClass('loading');

            let imageSrc = $(item).attr('data-image-preload');
            let image = new Image();
                image.src = imageSrc;

            image.onload = () => {
                $(item).removeClass('loading');
                $(item).replaceWith(image);
            }
            
        });
    }
}

export default new Images();
