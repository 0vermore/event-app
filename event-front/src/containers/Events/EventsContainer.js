import React, { useEffect, useState } from 'react'
import { Events } from '../../components/Events'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { eventsGetRequest } from '../../store/events/actions'

const EventsContainer = () => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const { items, fetching } = useSelector((state) => state.events)

	const [filterDate, setFilterDate] = useState()

	const getAllEvents = (date) => {
		const formatedDate = date?.add(1, 'day')
		dispatch(eventsGetRequest({ params: { start_date: formatedDate } }))
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

export default EventsContainer
