// Exercício 1: 🚀 Crie a rota GET /frames na sua aplicação, para recuperar todas as armações.
// Exercício 4: 🚀 Crie a rota DELETE /frames/:id na sua aplicação, para deletar uma armação com id específico, se a armação não for encontrada responda a requisição com status 404.

import { Router } from 'express';
import FrameController from '../controllers/Frame';
import FrameModel from '../models/Frame';
import FrameService from '../services/Frame';

const route = Router();

const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

route.post('/frame', (req, res) => frameController.create(req, res));
route.get('/frame/:id', (req, res) => frameController.readOne(req, res));
route.get('/frame', (req, res) => frameController.read(req, res));
route.delete('/frame/:id', (req, res) => frameController.destroy(req, res));

export default route;