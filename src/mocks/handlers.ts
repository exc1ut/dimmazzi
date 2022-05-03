// src/mocks/handlers.js
import { rest } from 'msw'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const handlers = [
  rest.post('*/sms/send_code/', (req, res, ctx) => {
    const response = {
      detail: 'successfully sent',
    }
    return res(ctx.json(response))
  }),

  rest.post('*/account/login/', (req, res, ctx) => {
    const response = {
      is_new_user: false,
      token: '9fc92ae95388e3332625aa557ce5d0a92fdef50b',
    }
    return res(ctx.json(response))
  }),

  rest.get('*/account/me/', (req, res, ctx) => {
    const user = {
      first_name: 'John',
      last_name: 'Doe',
    }

    return res(ctx.json(user))
  }),
]
