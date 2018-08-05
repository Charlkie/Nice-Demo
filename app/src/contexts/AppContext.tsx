import React from 'react'

const AppContext = React.createContext({} as IAppContext)

interface IAppContext {
	token: string | null
	avatarUrl: string | null
	signedIn: boolean
	signinUser: (userInfo: any) => void;
}

export default AppContext
