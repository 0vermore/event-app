/* eslint-disable max-len */

import requestManager from './requestManager'

export default {
	Session: {
		create: (params) => requestManager.post('/api/v1/auth', params),
		delete: () => requestManager.delete('/api/v1/auth'),
		restore: () => requestManager.get('/api/v1/auth'),
	},
	Users: {
		create: (params) => requestManager.post('/api/v1/users', params),
	},
	Events: {
		get: (id, params) => requestManager.get(`/api/v1/events/${id}`, params),
		create: (params) => requestManager.post('/api/v1/events', params),
		update: (id, params) => requestManager.put(`/api/v1/events/${id}`, params),
		delete: (id) => requestManager.delete(`/api/v1/events/${id}`),
	},
	Messages: {
		get: (event_id) => requestManager.get(`/api/v1/events/${event_id}/messages`),
		create: (event_id, params) => requestManager.post(`/api/v1/events/${event_id}/messages`, params),
	},
}
