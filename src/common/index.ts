export type AuthInfo = {
	id: string
	token: { accessToken: string; refreshToken: string }
}

export enum LocalStorageNames {
	AUTH_INFO = 'auth_info',
}

export enum PathNames {
	ROOT = '/',
	HOME = '/home',
	DASHBOARD = '/dashboard',
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',
	VERIFY_EMAIL = '/auth/verifyemail',
}

export const initialAuthInfoState: AuthInfo = {
	id: '',
	token: { accessToken: '', refreshToken: '' },
}

export default function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

/* deprecated additional configs
export enum AppTitles {
	HOME = 'Home',
	DASHBOARD = 'Dashboard',
	LOGIN = 'Login',
	REGISTER = 'Register',
}

export enum UIConstants {
	FOOTER_HEIGHT = 30,
	HEADER_HEIGHT = 60,
	DRAWER_WIDTH = 250,
}

export enum FetchParam {
	FOOTER_HEIGHT = 30,
	HEADER_HEIGHT = 60,
	DRAWER_WIDTH = 250,
} */
