export default class PageCustomer {
    BtnUsers = () => { return '[data-bs-target="#users-collapse"]'}
    BtnCustomers = () => { return '[href="./users.php?user_type=Customer"]'}
    BtnAdd = () => { return '[data-task="create"]'}
    SelectStatus = () => { return '[name="dXNlcnMuc3RhdHVz"]'}
    InputName = () => { return '[name="dXNlcnMuZmlyc3RfbmFtZQ--"]'}
    InputLastName = () => { return '[name="dXNlcnMubGFzdF9uYW1l"]'}
    InputC_Email = () => { return '[name="dXNlcnMuZW1haWw-"]'}
    InputC_Password = () => { return '[name="dXNlcnMucGFzc3dvcmQ-"]'}
    InputC_Phone = () => { return '[name="dXNlcnMucGhvbmU-"]'}
    SelectUserType = () => { return '[name="dXNlcnMudXNlcl90eXBl"]'}
    SelectCurrency = () => { return '[name="dXNlcnMuY3VycmVuY3lfaWQ"]'}
    BtnSave = () => { return '[data-task="save"]'}
}