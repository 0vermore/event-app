import { createConsumer } from '@rails/actioncable'

const wsUrl = 'ws://localhost:3000/cable'

export const consumer = createConsumer(wsUrl)
