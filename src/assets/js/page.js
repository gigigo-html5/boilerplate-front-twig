import $ from 'jquery';
import Handlebars from 'handlebars';

class Page {
    constructor() {
        this.pageObject = $('[data-page]');
    }
    load(templateName, data = {}) {
        let source = $('#'+templateName+'-template').html();
        let template = Handlebars.compile(source);

        data.exampleContent = window.exampleContent;


        let tmpHTML = template(data);
        this.pageObject.html(tmpHTML);
        exampleActions.refreshPage();
    }
    getUrlParameter(param) {
        let sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === param) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
}

export default new Page();
