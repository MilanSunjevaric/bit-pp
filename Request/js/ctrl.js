const ctrlModule = (function (ui, data) {


    function onSuccess(users) {

        ui.displayUsers(users)

    }

    document.querySelector('.searchBtn').addEventListener('click', getDataOnClick)

    function getDataOnClick(event) {
        const dataSearch = ui.searchText()
        data.fetchUsers(dataSearch, onSuccess)
    }

})(uiModule, dataModule)