import { useForm, SubmitHandler } from 'react-hook-form';

type DataUserType = {
	firstName: string
	lastName: string
	email: string
	password: string
}

export function FormWithLibrary() {
	const {register, handleSubmit, formState: {errors}} = useForm<DataUserType>({
		mode: 'onBlur'
	});
	const regexEmail = /[a-zA-Z0-9]+@[a-z]+[.][a-z]{2,6}/;

	const onSubmit: SubmitHandler<DataUserType> = data => {
		console.log(data)
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
         <div>
				<input
					{...register("firstName", {
						required: {value: true, message: "First Name cannot be empty"},
						minLength: {value: 3, message: "3 letters min"}
					})}
					type="text"
					autoComplete='off'
					placeholder={errors.firstName ? '' : 'First Name'}
					className={errors.firstName ? 'errorBorder' : ''}
				/>
				{errors.firstName && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{errors.firstName && <span className="error">{errors.firstName.message}</span>}
			</div>
         <div>
				<input
					{...register("lastName", {
						required: {value: true, message: "Last Name cannot be empty"},
						minLength: {value: 3, message: "3 letters min"}
					})}
					type="text"
					autoComplete='off'
					placeholder={errors.lastName ? '' : 'Last Name'}
					className={errors.lastName ? 'errorBorder' : ''}
				/>
				{errors.lastName && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{errors.lastName && <span className="error">{errors.lastName.message}</span>}
			</div>
         <div>
				<input
					{...register("email", { 
						required: {value: true, message: "Email cannot be empty"},
						pattern: {value: regexEmail, message: "Looks like this is not an email"}
					})}
					type="text"
					placeholder={errors.email ? 'email@example/com' : 'Email Address'}
					className={errors.email ? 'errorBorder errorPlaceholder' : ''}
				/>
				{errors.email && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{errors.email && <span className="error">{errors.email.message}</span>}
			</div>
         <div>
				<input
					{...register("password", {
						required: {value: true, message: "Password cannot be empty"},
						minLength: {value: 8, message: "8 letters min"},
					})}
					type="password"
					placeholder={errors.password ? '' : 'Password'}
					className={errors.password ? 'errorBorder' : ''}
				/>
				{errors.password && <img className="errorIcon" src="/assets/icon-error.svg" alt="errorIcon" />}
				{errors.password && <span className="error">{errors.password.message}</span>}
			</div>
				<button type='submit'>Claim your free trial</button>
      </form>
	);
}