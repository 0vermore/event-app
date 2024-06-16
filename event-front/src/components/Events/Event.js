import React, { useMemo } from 'react'
import { Card } from 'antd'

const Event = ({ event }) => {
	const membersList = useMemo(() => event?.members?.map((member) => member.full_name).join(', '), [event])

	return (
		<Card
			title={event.name}
			bordered={false}
			style={{
				width: '100%',
			}}
		>
			<p>Location: {event.location}</p>
			<p>Starts at: {event.start_at}</p>
			<p>Description: {event.description}</p>
			<p>Participants: {membersList}</p>
		</Card>
	)
}

export default Event
