import Images from './images';
import Page from './page';
import Components from './components';

$(function() {
    Images.load();
});

window.exampleActions = {
    refreshPage: function() {
        Images.load();
        Components.load();
    },
    pageOpen: function(template, data) {
        Page.load(template, data);
    },
    locationHandler: function(url) {
        Components.loadingShow();
        window.location = url;
    }
}
