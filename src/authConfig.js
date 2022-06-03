export const msalConfig = {
	auth: {
		clientId: '93c7981f-e11c-419e-9613-0ce4e44ab856',
		authority: 'https://login.microsoftonline.com/68024645-3135-4648-98e6-17015f9abf48',
		redirectUri: 'https://vetrodilusso.cresalex.com',
	},
	cache: {
		cacheLocation: 'sessionStorage',
		storeAuthStateInCookie: false
	},
};

export const loginRequest = {
	scopes: [
		"User.Read",
		"user_impersonate",
		"openid",
		"email",
		"profile"
	],
};

export const graphConfig = {
	graphMeEndpoint: 'https://graph.microsoft.com'
}