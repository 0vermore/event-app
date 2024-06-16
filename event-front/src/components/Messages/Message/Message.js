import React from 'react'

const Message = ({ message, currentUserId }) => {
	const { user_id, content, sender } = message

	const isSentByMe = user_id === currentUserId

	return (
		<div className={`messageContainer ${isSentByMe ? 'justifyEnd' : 'justifyStart'}`}>
			<div className={`messageBox ${isSentByMe ? 'backgroundLight' : 'backgroundBlue'}`}>
				{!isSentByMe && <p className='sentText pr-10'>{sender}</p>}
				<p className={`messageText ${isSentByMe ? 'colorDark' : 'colorWhite'}`}>{content}</p>
			</div>
		</div>
	)
}

export default Message
