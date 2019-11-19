const dataModule = (function () {

    class Show {
        constructor(image, name) {
            this.image = image
            this.name = name
        }
    }

    function fetchShow() {
        const requestURL = `http://api.tvmaze.com/shows`

        $.get(requestURL, function (responseData) {
            const showList = []

            console.log(showList);

        })
    }
    return {
        fetchShow
    }

})()