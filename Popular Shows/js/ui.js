const uiModule = (function () {

    const searchInput = document.querySelector('.searchInput')


    $('.searchBtn').onload('load', getDataOnClick)

    function getDataOnClick(event) {
        const dataSearch = ui.searchText()
        data.fetchShow(dataSearch, onSuccess)






        function searchText() {
            return searchInput.value
        }

        return {
            searchText
        }

    }) ()