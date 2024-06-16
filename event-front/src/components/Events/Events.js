import React from 'react'
import { List, Skeleton, DatePicker } from 'antd'

import './Events.css'

const Events = ({ eventsList, fetching, history, filterDate, setFilterDate }) => {
	const containerStyles = {
		display: 'flex',
		flexDirection: 'column',
	}

	const filterStyles = {
		display: 'flex',
		justifyContent: 'flex-end',
	}

	return (
		<div style={containerStyles}>
			<div style={filterStyles}>
				<DatePicker placeholder='Find by date' value={filterDate} onChange={(value) => setFilterDate(value)} />
			</div>
			<List
				loading={fetching}
				itemLayout='horizontal'
				dataSource={eventsList}
				renderItem={(item) => (
					<List.Item className='list__item' key={item.id} onClick={() => history(`/event/${item.id}`)}>
						<Skeleton title={false} loading={item.loading} active>
							<List.Item.Meta title={item.name} description={item.description} />
							<div style={{ marginRight: '20px' }}>{item.location}</div>
							<div>{item.start_at}</div>
						</Skeleton>
					</List.Item>
				)}
			/>
		</div>
	)
}
export default Events
