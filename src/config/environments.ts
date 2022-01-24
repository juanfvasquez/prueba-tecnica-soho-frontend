const _env = 'dev';

const environments = {
	dev: {
		apiUrl: 'http://192.168.100.229:8000',
	},
	prod: {
		apiUrl: 'https://api.example.com',
	},
}

export const environment = environments[_env];
