import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TeamOutlined, UsergroupAddOutlined, ContactsOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { sessionDeleteRequest } from '../../store/authentication/actions'

const { Header, Sider, Content } = Layout

const AppContainer = ({ children }) => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const pathname = window.location.pathname

	const [pageName, setPageName] = useState('')
	const [current, setCurrent] = useState(pathname)

	const titles = {
		'/': 'All Events',
		'/new-event': 'New Event',
		'/my-events': 'My Events',
	}

	const {
		currentSession: { full_name },
	} = useSelector((state) => state.authentication)

	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()

	const signOut = () => {
		dispatch(sessionDeleteRequest({ history }))
	}

	const handleClickLink = (link) => {
		history(link)
		setPageName(titles[link])
	}

	useEffect(() => {
		setCurrent(pathname)
		setPageName(titles[pathname])
	}, [pathname])

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider trigger={null} collapsible>
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
					{full_name}
				</div>
				<Menu
					theme='dark'
					mode='inline'
					selectedKeys={[current]}
					onClick={(e) => setCurrent(e.key)}
					items={[
						{
							key: '/',
							icon: <TeamOutlined />,
							label: <div onClick={() => handleClickLink('/')}>All Events</div>,
						},
						{
							key: '/new-event',
							icon: <UsergroupAddOutlined />,
							label: <div onClick={() => handleClickLink('/new-event')}>New Event</div>,
						},
						{
							key: '/my-events',
							icon: <ContactsOutlined />,
							label: <div onClick={() => handleClickLink('/my-events')}>My Events</div>,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '0 20px',
						background: colorBgContainer,
					}}
				>
					<div style={{ fontWeight: '600', fontSize: '24px' }}>{pageName}</div>
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
						overflowY: 'auto',
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}
export default AppContainer
