import React from 'react'
import ReactDOM from 'react-dom/client'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducer from './store/combineReducers.js'
import { rootWatcherSaga } from './store/combineSagas.js'
import App from './App.js'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({ diff: true, collapsed: true, duration: true })

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootWatcherSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
