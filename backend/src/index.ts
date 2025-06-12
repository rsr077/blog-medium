import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign , verify } from 'hono/jwt'
import { initMiddleware } from './middleware';

/// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();




app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')

	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})



app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app;
