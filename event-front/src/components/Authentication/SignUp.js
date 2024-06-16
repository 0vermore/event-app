import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Grid, Input, theme, Typography } from 'antd'

import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const { useToken } = theme
const { useBreakpoint } = Grid
const { Text, Title } = Typography

const SignUp = ({ signUpUser }) => {
	const { token } = useToken()
	const screens = useBreakpoint()

	const [form, setForm] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		password_confirmation: '',
	})

	const handleUpdateField = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		const data = {
			user: {
				first_name: form.first_name,
				last_name: form.last_name,
				email: form.email,
				password: form.password,
			},
		}

		signUpUser(data)
	}

	const styles = {
		container: {
			margin: '0 auto',
			padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
			width: '380px',
		},
		forgotPassword: {
			float: 'right',
		},
		header: {
			marginBottom: token.marginXL,
			textAlign: 'center',
		},
		section: {
			alignItems: 'center',
			backgroundColor: token.colorBgContainer,
			display: 'flex',
			height: screens.sm ? '100vh' : 'auto',
			padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
		},
		signup: {
			marginTop: token.marginLG,
			textAlign: 'center',
			width: '100%',
		},
		text: {
			color: token.colorTextSecondary,
		},
		title: {
			fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
		},
	}

	return (
		<section style={styles.section}>
			<div style={styles.container}>
				<div style={styles.header}>
					<Title style={styles.title}>Sign up</Title>
					<Text style={styles.text}>Join us! Create an account to get started.</Text>
				</div>
				<Form
					name='normal_signup'
					initialValues={{
						remember: true,
					}}
					onFinish={handleSubmit}
					layout='vertical'
					requiredMark='optional'
				>
					<Form.Item
						name='first_name'
						rules={[
							{
								required: true,
								message: 'Please input your first name',
							},
						]}
					>
						<Input
							size='large'
							prefix={<UserOutlined />}
							placeholder='First name'
							name='first_name'
							value={form.first_name}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item
						name='last_name'
						rules={[
							{
								required: true,
								message: 'Please input your last name',
							},
						]}
					>
						<Input
							size='large'
							prefix={<UserOutlined />}
							placeholder='Last name'
							name='last_name'
							value={form.last_name}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item
						name='email'
						rules={[
							{
								type: 'email',
								required: true,
								message: 'Please input your email',
							},
						]}
					>
						<Input
							size='large'
							prefix={<MailOutlined />}
							placeholder='Email'
							name='email'
							value={form.email}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your password',
							},
						]}
						hasFeedback
					>
						<Input.Password
							size='large'
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password'
							name='password'
							value={form.password}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item
						name='password_confirmation'
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please confirm your password',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('New password do not match'))
								},
							}),
						]}
					>
						<Input.Password
							size='large'
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password confirmation'
							name='password_confirmation'
							value={form.password_confirmation}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item style={{ marginBottom: '0px' }}>
						<Button block type='primary' htmlType='submit'>
							Sign up
						</Button>
						<div style={styles.signup}>
							<Text style={styles.text}>Already have an account?</Text> <Link to='/login'>Sign in</Link>
						</div>
					</Form.Item>
				</Form>
			</div>
		</section>
	)
}

export default SignUp
