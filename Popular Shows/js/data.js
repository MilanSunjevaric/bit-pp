const dataModule = (function() {

    class Show {
        constructor(image, name) {
            this.image = image
            this.name = name

        }
    }

    function fetchShow(success) {
        const requestURL = `http://api.tvmaze.com/shows`

        $.get(requestURL, function(responseData) {
            const showList = []

            for (let i = 0; i < showList.length; i++) {
                const showObj = showList[i];
                const showItem = new Show(showObj.image.medium, showObj.name)
                showList.push(showItem)
            }
            success(showList)
        })

    }

    return {
        fetchShow
    }

})()