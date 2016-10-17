import $ from 'jquery';
import Handlebars from 'handlebars';

class Page {

    constructor() {
        this.pageObject = $('[data-page]');
    }

    load(templateName, data = {}) {
        let source = $('#'+templateName+'-template').html();
        let template = Handlebars.compile(source);

        let tmpHTML = template(data);
        this.pageObject.html(tmpHTML);

        $('#'+templateName+'-template').remove();

        exampleActions.refreshPage();
    }

}

export default new Page();
