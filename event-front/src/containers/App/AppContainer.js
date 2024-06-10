import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { TeamOutlined, UsergroupAddOutlined, ContactsOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { sessionDeleteRequest } from '../../store/authentication/actions'

const { Header, Sider, Content } = Layout

const AppContainer = ({ children }) => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const {
		currentSession: { first_name, last_name },
	} = useSelector((state) => state.authentication)

	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()

	const signOut = () => {
		dispatch(sessionDeleteRequest({ history }))
	}

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider breakpoint='lg' collapsedWidth='0'>
				<div
					className='demo-logo-vertical'
					style={{
						height: '32px',
						margin: '16px',
						background: '#fff3',
						borderRadius: '6px',
						textAlign: 'center',
						padding: '8px',
						color: '#fff',
					}}
				>
					{`${first_name} ${last_name}`}
				</div>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <TeamOutlined />,
							label: <Link to='/'>All Events</Link>,
						},
						{
							key: '2',
							icon: <UsergroupAddOutlined />,
							label: <Link to='/new-event'>New Event</Link>,
						},
						{
							key: '3',
							icon: <ContactsOutlined />,
							label: <Link to='/my-events'>My Events</Link>,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<Button
						type='text'
						icon={<LogoutOutlined />}
						onClick={() => signOut()}
						style={{
							float: 'right',
							fontSize: '16px',
							height: 64,
						}}
					>
						Log out
					</Button>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}
export default AppContainer
