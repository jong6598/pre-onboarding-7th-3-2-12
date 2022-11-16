export const ROUTE_PATH = {
	DASHBOARD: '/',
	USERS: '/users',
	DETAILUSER: '/users/:uuid',
	ACCOUNTS: '/accounts',
	ACCOUNTDETAIl: '/accounts/:id',
	NOT_FOUND: '*',
} as const;

export const PRIVATE_PATH = {
	LOGIN: '/login',
};
