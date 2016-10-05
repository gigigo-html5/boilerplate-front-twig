class Components {
    constructor() {

    }
    loadingShow() {
        $('body').append(`
            <div class="loading-box">
                <span class="loading"></span>
            </div>
        `)
    }
    loadingHide() {
        $('.loading-box').remove();
    }

}

export default new Components();
