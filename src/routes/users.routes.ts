import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', async (request, response) => {
  return response.send();
});

export default appointmentsRouter;
