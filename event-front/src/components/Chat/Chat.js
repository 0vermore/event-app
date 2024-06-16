import React, { useLayoutEffect } from 'react'
import { Button, Input, Space } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { Messages } from '../Messages'

const Chat = ({ messages, fetching, message, setMessage, sendMessage, currentUserId }) => {
	const containerStyles = {
		width: '100%',
		paddingTop: '10px',
		border: '1px solid #f0f0f0',
		borderRadius: '8px',
		backgroundColor: '#f6f6f6e0',
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') sendMessage()
	}

	return (
		<div style={containerStyles}>
			<Messages messages={messages} fetching={fetching} currentUserId={currentUserId} />
			<Space.Compact style={{ width: '100%' }}>
				<Input
					size='large'
					placeholder='Message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={(e) => handleKeyPress(e)}
				/>
				<Button id='send-button' size='large' type='primary' onClick={sendMessage}>
					<SendOutlined />
				</Button>
			</Space.Compact>
		</div>
	)
}

export default Chat
