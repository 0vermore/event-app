import React, { useState } from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
const { TextArea } = Input

const NewEvent = ({ createEvent }) => {
	const [form, setForm] = useState({
		name: '',
		description: '',
		location: '',
		start_at: '',
	})

	const handleUpdateField = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		const data = {
			event: {
				name: form.name,
				description: form.description,
				location: form.location,
				start_at: form.start_at,
			},
		}

		createEvent(data)
	}

	return (
		<Form
			labelCol={{
				span: 4,
			}}
			wrapperCol={{
				span: 14,
			}}
			layout='horizontal'
			style={{
				maxWidth: 600,
			}}
			onFinish={handleSubmit}
		>
			<Form.Item
				label='Title'
				name='name'
				rules={[
					{
						required: true,
						message: 'Please input event title',
					},
				]}
			>
				<Input placeholder='Event title' name='name' value={form.name} onChange={(e) => handleUpdateField(e)} />
			</Form.Item>
			<Form.Item
				label='Location'
				name='location'
				rules={[
					{
						required: true,
						message: 'Please input event location',
					},
				]}
			>
				<Input
					placeholder='Event location'
					name='location'
					value={form.location}
					onChange={(e) => handleUpdateField(e)}
				/>
			</Form.Item>
			<Form.Item label='Description'>
				<TextArea
					autoSize={{
						minRows: 3,
						maxRows: 5,
					}}
					placeholder='Event description'
					name='description'
					value={form.description}
					onChange={(e) => handleUpdateField(e)}
				/>
			</Form.Item>
			<Form.Item
				label='Starts on'
				name='start_date'
				rules={[
					{
						required: true,
						message: 'Please select event start date',
					},
				]}
			>
				<DatePicker
					placeholder='Start date'
					showTime={{
						format: 'HH:mm',
					}}
					value={form.start_at}
					onChange={(value) => handleUpdateField({ target: { name: 'start_at', value: value } })}
				/>
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 4,
					span: 14,
				}}
			>
				<Button block type='primary' htmlType='submit'>
					Create Event
				</Button>
			</Form.Item>
		</Form>
	)
}
export default NewEvent
