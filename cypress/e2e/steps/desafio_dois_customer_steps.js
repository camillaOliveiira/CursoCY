import DashLogin from "../pages/desafio_dois_login_page";
import EditCustomer from "../pages/desafio_dois_customer_page";
const dashLogin = new DashLogin
const editCustomer = new EditCustomer


When(/^clico em users, Customers e add$/, () => {
	editCustomer.selectMenu()
});

When(/^selecicono status "([^"]*)"$/, (status) => {
	console.log(status);
	editCustomer.registerCustomerStatus(status)
});

When(/^preencho as informacoes pessoais "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/, (name,surname,email,password,phone) => {
	console.log(name,surname,email,password,phone);
    editCustomer.registerCustomerPersonal(name,surname,email,password,phone)
	
});

When(/^seleciono o tipo de usuario "([^"]*)" e currency "([^"]*)"$/, (type,currency) => {
	console.log(type,currency);
	editCustomer.registerCustomerFinish(type,currency)
});

When(/^clico no botao Save$/, () => {
	editCustomer.SaveBtn()
});

Then(/^usuario "([^"]*)" deve aparecer na lista de users$/, (email) => {
	console.log(email);
	editCustomer.VerifyNewUser(email)
});