import { Router } from 'express';
import MatchController from '../controllers/MatchController';


const router = Router();

router.post('/getSuggestion', MatchController.getSuggestion);
router.post('/like', MatchController.setLike);
router.get('/match', MatchController.getMatches);
// router.put('/user', AuthController.updateUser);


export default router;
