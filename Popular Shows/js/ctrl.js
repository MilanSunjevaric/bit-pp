const ctrlModule = (function(ui, data) {





    function success(showList) {
        ui.displayShows(showList)
        console.log('peras');

    }
    data.fetchShow(success)



})(uiModule, dataModule)