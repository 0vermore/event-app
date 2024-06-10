/* eslint-disable max-len */

import requestManager from './requestManager'

export default {
	Session: {
		create: (params) => requestManager.post('/api/v1/auth', params),
		delete: () => requestManager.delete('/api/v1/auth'),
		restore: () => requestManager.get('/api/v1/auth'),
	},
	User: {
		create: (params) => requestManager.post('/api/v1/users', params),
	},
}
