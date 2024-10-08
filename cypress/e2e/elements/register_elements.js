export default class RegisterElements {

    inputFirstName = () => { return '[@placeholder="First Name"]' }
    inputLastName = () => { return '[@placeholder="Last Name"]' }
    inputAddress = () => { return '//*[@id="basicBootstrapForm"]/div[2]/div/textarea' }
    inputAddressEmail = () => { return '#eid' }
    inputPhoneNumber = () => { return '//*[@id="basicBootstrapForm"]/div[4]/div/input' }
    selectFile = () => { return '#imagescr' }
    checkRadioGender = () => { return '[@type="radio"]' }
    checkHobbies = () => { return '[@type="checkbox"]' }
    inputLanguages = () => { return '[#msdd]' }
    selectCountry = () => { return '//*[@id="basicBootstrapForm"]/div[10]/div/span/span[1]/span' }
    selectYear = () => { return '#yearbox' }
    selectMonth = () => { return '[@placeholder="Month"]' }
    selectDay = () => { return 'daybox' }
    inputPass = () => { return '#firstpassword' }
    inputConfirmPass = () => { return '#secondpassword' }
    submitRegister = () => { return '#submitbtn' }
    refreshRegister = () => {return '#Button1'}
}