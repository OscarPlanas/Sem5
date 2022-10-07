import questionController from '../controller/questionController';
import { Router } from 'express';

const router = Router();

router.post('/question', questionController.createQuestion);
router.get('/', questionController.getQuestions);
router.get('/question/:questionId', questionController.getQuestionById);
router.put('/question/:questionId', questionController.updateQuestionById);
router.delete('/question/:questionId', questionController.deleteQuestionById);

export default router;