import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default appointmentsRouter;
