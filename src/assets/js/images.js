import $ from 'jquery';
import Components from './components'

class Images {

    constructor() {

    }

    load() {

        $('[data-image-preload]').each((key, item) => {

            //$(item).addClass('loading').append('Cargando ...');
            Components.loadingShow();

            let imageSrc = $(item).attr('data-image-preload');
            let image = new Image();
                image.src = imageSrc;

            image.onload = () => {
                //$(item).removeClass('loading');
                $(item).replaceWith(image);
                Components.loadingHide();
            }

        });
    }
}

export default new Images();
