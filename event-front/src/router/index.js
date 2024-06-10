import React from 'react'

import { EventsContainer, MyEventsContainer, NewEventContainer, EventContainer } from '../containers/Events'
import SignInContainer from '../containers/Auth/SignInContainer'
import SignUpContainer from '../containers/Auth/SignUpContainer'
import NotFound from '../components/NotFound/NotFound'

export const RouteNames = {
	ROOT: '/',
	SIGNIN: '/login',
	SIGNUP: '/signup',
	NEW: '/new-event',
	MY: '/my-events',
	EVENT: '/event/:id',
	NOT_FOUND: '*',
}

export const publicRoutes = [
	{ path: RouteNames.SIGNIN, element: <SignInContainer /> },
	{ path: RouteNames.SIGNUP, element: <SignUpContainer /> },
	{ path: RouteNames.NOT_FOUND, element: <NotFound /> },
]

export const privateRoutes = [
	{ path: RouteNames.ROOT, element: <EventsContainer /> },
	{ path: RouteNames.NEW, element: <NewEventContainer /> },
	{ path: RouteNames.MY, element: <MyEventsContainer /> },
	{ path: RouteNames.EVENT, element: <EventContainer /> },
]
