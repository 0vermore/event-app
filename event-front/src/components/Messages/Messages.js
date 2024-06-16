import React from 'react'
import Message from './Message/Message'

import './Messages.css'

const Messages = ({ messages, fetching, currentUserId }) => {
	return (
		<div className='messagesList'>
			{fetching && <div className='statusMessage'>Loading...</div>}
			{messages?.length == 0 && <div className='statusMessage'>No messages yet</div>}
			{messages?.map((message) => (
				<div key={message.id}>
					<Message message={message} currentUserId={currentUserId} />
				</div>
			))}
		</div>
	)
}

export default Messages
