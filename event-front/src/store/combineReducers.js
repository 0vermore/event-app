import { combineReducers } from 'redux'

import authentication from './authentication/reducer'
import users from './users/reducer'
import events from './events/reducer'
import messages from './messages/reducer'

export default combineReducers({
	authentication,
	users,
	events,
	messages,
})
