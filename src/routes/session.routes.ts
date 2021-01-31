import { Router } from 'express';

import AuthenticateUserService from '../services/authenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user } = await authenticateUserService.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user });
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default sessionsRouter;
