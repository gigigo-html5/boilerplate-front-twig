import Page from './page';
import Components from './components';
import Constants from './constants';

class Api {
    constructor() {
        this.url = Constants.API_URL;
    }
    _request(options) {

        options.headers = {'X-app-version': 'WEB_1'};
        options.url = this.url + options.url;

        return new Promise((resolve, reject) => {

            Components.loadingShow();

            $.ajax({
                url: options.url,
                type: options.method,
                headers: options.headers,
                data: JSON.stringify(options.data),
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json'
            }).done(function (response) {
                if (response.status == 'KO') {
                    reject(response);
                }

                resolve(response);
            }).fail(function () {
                Page.load('error');
            });

        })

    }

    validateLogin(data) {

        return new Promise((resolve, reject) => {
            this._request({
                url: '/user/login',
                method: 'POST',
                data: {
                    uuid: data.uuid,
                    name: data.name,
                    status: data.status
                }
            })
            .then((response) => {
                resolve(response);
            })
        });

    }

    answersSend(data) {

        return new Promise((resolve, reject) => {
            this._request({
                url: '/promoWeb/' + promoCode,
                method: 'POST',
                data: data
            })
            .then((response) => {
                resolve(response);
            })
            .catch((response) => {
                reject(response);
            })
        });
    }
}

export default new Api();
