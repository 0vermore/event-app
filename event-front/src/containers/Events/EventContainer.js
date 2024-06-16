import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { eventGetRequest } from '../../store/events/actions'
import { messagesUpdateList } from '../../store/messages/actions'
import { Event } from '../../components/Events'
import { ChatContainer } from '../Chat'
import { consumerConnect } from '../../lib/consumerConnect'
import { consumer } from '../../services/cable'

const EventContainer = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { item, itemFetching } = useSelector((state) => state.events)

	const getEventById = (eventId) => {
		dispatch(eventGetRequest({ id: eventId, params: {} }))
	}

	const handleUpdateMessages = (message) => {
		dispatch(messagesUpdateList(message))
	}

	useEffect(() => {
		getEventById(id)
	}, [])

	useEffect(() => {
		consumerConnect('EventMessagesChannel', id, handleUpdateMessages)

		return () => consumer.disconnect()
	}, [])

	return itemFetching ? (
		<></>
	) : (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				height: '100%',
			}}
		>
			<Event event={item} />
			<ChatContainer />
		</div>
	)
}

export default EventContainer
