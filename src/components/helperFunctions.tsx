import { loginErrors } from "./login/LoginConfig"

export function errors(code: string, message: string, enqueueSnackbar: any) {
	console.log(code + ' ' + message)
	enqueueSnackbar(loginErrors[code] || message, {
		autoHideDuration: 8000,
		variant: 'error',
	})
}
