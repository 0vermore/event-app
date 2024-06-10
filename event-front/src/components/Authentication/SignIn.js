import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Grid, Input, theme, Typography } from 'antd'

import { LockOutlined, MailOutlined } from '@ant-design/icons'

const { useToken } = theme
const { useBreakpoint } = Grid
const { Text, Title } = Typography

const SignIn = ({ signInUser }) => {
	const { token } = useToken()
	const screens = useBreakpoint()

	const [form, setForm] = useState({
		email: '',
		password: '',
	})

	const handleUpdateField = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		console.log(form)
		const data = {
			email: form.email,
			password: form.password,
		}

		signInUser(data)
	}

	const styles = {
		container: {
			margin: '0 auto',
			padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
			width: '380px',
		},
		footer: {
			marginTop: token.marginLG,
			textAlign: 'center',
			width: '100%',
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
					<Title style={styles.title}>Sign in</Title>
					<Text style={styles.text}>Welcome back to Event App! Please enter your details below to sign in.</Text>
				</div>
				<Form
					name='normal_login'
					initialValues={{
						remember: true,
					}}
					onFinish={handleSubmit}
					layout='vertical'
					requiredMark='optional'
				>
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
					>
						<Input.Password
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password'
							name='password'
							value={form.password}
							onChange={(e) => handleUpdateField(e)}
						/>
					</Form.Item>
					<Form.Item style={{ marginBottom: '0px' }}>
						<Button block='true' type='primary' htmlType='submit'>
							Log in
						</Button>
						<div style={styles.footer}>
							<Text style={styles.text}>Don't have an account?</Text> <Link to='/signup'>Sign up now</Link>
						</div>
					</Form.Item>
				</Form>
			</div>
		</section>
	)
}

export default SignIn
