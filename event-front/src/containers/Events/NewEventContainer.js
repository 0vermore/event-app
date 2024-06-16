import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { eventCreateRequest } from '../../store/events/actions'
import { NewEvent } from '../../components/Events'

const NewEventContainer = () => {
	const dispatch = useDispatch()
	const history = useNavigate()

	const handleCreateEvent = (data) => {
		dispatch(eventCreateRequest({ data, history }))
	}

	return <NewEvent createEvent={handleCreateEvent} />
}

export default NewEventContainer
