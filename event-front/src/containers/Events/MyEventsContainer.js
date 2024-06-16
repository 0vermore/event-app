import React, { useEffect, useState } from 'react'
import { Events } from '../../components/Events'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { eventsGetRequest } from '../../store/events/actions'

const MyEventsContainer = () => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const { items, fetching } = useSelector((state) => state.events)
	const {
		currentSession: { id: currentUserId },
	} = useSelector((state) => state.authentication)

	const [filterDate, setFilterDate] = useState()

	const getAllEvents = (date) => {
		const formatedDate = date?.add(1, 'day')
		dispatch(eventsGetRequest({ params: { user_id: currentUserId, start_date: formatedDate } }))
	}

	useEffect(() => {
		getAllEvents(filterDate)
	}, [filterDate])

	return (
		<Events
			eventsList={items}
			fetching={fetching}
			history={history}
			filterDate={filterDate}
			setFilterDate={setFilterDate}
		/>
	)
}

export default MyEventsContainer
