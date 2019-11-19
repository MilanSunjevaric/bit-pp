const uiModule = (function() {

    function displayShows(showList) {
        showList.forEach(function(showList) {
            console.log('pera');

            const divCard = $('<div>').addClass('col-xl-4')
            const spanCard = $(`<span>${showList.name}</span>`)
            console.log(divCard);

            const card = $('.card')
            const img = $(`<img>`).attr('src', showList.image).addClass('show-image')


            divCard.apppend(img)
            divCard.apppend(spanCard)

            card.apppend(divCard)
        });
    };


    return {
        displayShows
    }

})()