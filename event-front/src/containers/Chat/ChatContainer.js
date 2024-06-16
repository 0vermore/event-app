import React, { useEffect, useState } from 'react'
import { Chat } from '../../components/Chat'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { messagesGetRequest, messageCreateRequest } from '../../store/messages/actions'

const ChatContainer = () => {
	const dispatch = useDispatch()
	const { id: event_id } = useParams()
	const { items, fetching } = useSelector((state) => state.messages)
	const {
		currentSession: { id: currentUserId },
	} = useSelector((state) => state.authentication)

	const [message, setMessage] = useState('')

	const getEventMessages = (event_id) => {
		dispatch(messagesGetRequest({ event_id }))
	}

	const sendEventMessage = () => {
		const params = {
			message: {
				content: message,
			},
		}

		dispatch(messageCreateRequest({ event_id, params }))
		setMessage('')
	}

	useEffect(() => {
		getEventMessages(event_id)
	}, [event_id])

	return (
		<Chat
			messages={items}
			fetching={fetching}
			message={message}
			setMessage={setMessage}
			sendMessage={sendEventMessage}
			currentUserId={currentUserId}
		/>
	)
}

export default ChatContainer
