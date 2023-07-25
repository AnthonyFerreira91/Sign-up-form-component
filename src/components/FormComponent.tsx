import { useState, useEffect, useRef, FormEvent } from 'react';
import validator from '../functions/validator';

type fieldType = {
	value: string,
	errorMsg: string
}

function FormComponent() {
	const [fields, setFields] = useState({
		firstName: {
			value: '',
			errorMsg: ''
		},
		lastName: {
			value: '',
			errorMsg: ''
		},
		email: {
			value: '',
			errorMsg: ''
		},
		password: {
			value: '',
			errorMsg: ''
		}
	});

	const numberErr = useRef(0);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const {firstName, lastName, email, password} = validator(formData);

		setFields({
			firstName: firstName as fieldType,
			lastName: lastName as fieldType,
			email: email as fieldType,
			password: password as fieldType
		});
	}

	useEffect(() => {
		numberErr.current = 0;
		for(const value of Object.values(fields)) {
			if(value.errorMsg !== '') {
				numberErr.current++;
			}
		}

		if (fields.firstName.value !== '' && numberErr.current === 0) {
			// Action
			for(const [key, value] of Object.entries(fields)) {
				console.log(`${key} : ${value.value}`);
			}
		}
	}, [fields]);

	return (
		<form onSubmit={handleSubmit}>
         <div>
				<input className={fields.firstName.errorMsg ? 'errorBorder' : ''} name="firstName" type="text" placeholder={fields.firstName.errorMsg ? '' : 'First Name'} autoComplete='off'/>
				{fields.firstName.errorMsg !== '' && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{fields.firstName.errorMsg !== '' && <span className="error">{fields.firstName.errorMsg}</span>}
			</div>
         <div>
				<input className={fields.lastName.errorMsg ? 'errorBorder' : ''} name="lastName" type="text" placeholder={fields.lastName.errorMsg ? '' : 'Last Name'} autoComplete='off'/>
				{fields.lastName.errorMsg !== '' && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{fields.lastName.errorMsg !== '' && <span className="error">{fields.lastName.errorMsg}</span>}
			</div>
         <div>
				<input className={fields.email.errorMsg ? 'errorBorder errorPlaceholder' : ''} name="email" type="text" placeholder={fields.email.errorMsg ? 'email@example/com' : 'Email Address'}/>
				{fields.email.errorMsg !== '' && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{fields.email.errorMsg !== '' && <span className="error">{fields.email.errorMsg}</span>}
			</div>
         <div>
				<input className={fields.password.errorMsg ? 'errorBorder' : ''} name="password" type="password" placeholder={fields.password.errorMsg ? '' : 'Password'}/>
				{fields.password.errorMsg !== '' && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{fields.password.errorMsg !== '' && <span className="error">{fields.password.errorMsg}</span>}
			</div>
				<button type='submit'>Claim your free trial</button>
      </form>
	);
}

export default FormComponent;