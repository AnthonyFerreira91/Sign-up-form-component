
export default function validator(formData: FormData) {
	const firstName = {
		value: formData.get('firstName')?.toString(),
		errorMsg: ''
	};
	const lastName = {
		value: formData.get('lastName')?.toString(),
		errorMsg: ''
	};
	const email = {
		value: formData.get('email')?.toString(),
		errorMsg: ''
	};
	const password = {
		value: formData.get('password')?.toString(),
		errorMsg: ''
	};

	const regexEmail = /[a-zA-Z0-9]+@[a-z]+[.][a-z]{2,6}/;

	firstName.value !== undefined && firstName.value !== ''
		? firstName.value.length < 3
			? firstName.errorMsg = '3 letters min'
			: firstName.errorMsg = ''
		: firstName.errorMsg = 'First Name cannot be empty'; 

	lastName.value !== undefined && lastName.value !== ""
		? lastName.value.length < 3
			? lastName.errorMsg = '3 letters min'
			: lastName.errorMsg = ''
		: lastName.errorMsg = 'Last Name cannot be empty';

	email.value !== undefined && email.value !== ''
		? !regexEmail.test(email.value)
			? email.errorMsg = 'Looks like this is not an email'
			: email.errorMsg = ''
		: email.errorMsg = 'Email cannot be empty';

	password.value !== undefined && password.value !== ""
		? password.value.length < 8
			? password.errorMsg = '8 letters min'
			: password.errorMsg = ''
		: password.errorMsg = 'Password cannot be empty';

	return {
		firstName,
		lastName,
		email,
		password
	}
}