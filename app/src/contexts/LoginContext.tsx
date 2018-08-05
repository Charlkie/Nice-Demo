import React from 'react'

export interface IarrayObj {
	label: string,
	placeholder: string
	required: boolean
	error: boolean
}

export interface ILoginState {
	/** Containes all parameters for input element */
	inputElements: IarrayObj[]
	redirect: boolean
	username: string
	password: string
	loginError: boolean
	flash: string
}

interface IAppContext extends ILoginState {
	handleFocus: (index: number, fieldType: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
	handleUpdate: (fieldChange: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginContext = React.createContext({} as IAppContext)

export default LoginContext