import { consumer } from '../services/cable'

export const consumerConnect = (channelName, eventId, callback) => {
	consumer.subscriptions.create(
		{ channel: channelName, event_id: eventId },
		{
			received: (data) => callback(data),
			initialized: () => {
				console.log('useChannel - INFO: Init ' + channelName)
			},
			connected: () => {
				console.log('useChannel - INFO: Connected to ' + channelName)
			},
			disconnected: () => {
				console.log('useChannel - INFO: Disconnected')
			},
		}
	)
}
