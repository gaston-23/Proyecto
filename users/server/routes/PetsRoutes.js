import { Router } from 'express';
import PetsController from '../controllers/PetsController';


const router = Router();


router.post('/add', PetsController.createPet);
router.put('/update/:id', PetsController.updatePet);
router.delete('/:id', PetsController.removePets);
router.get('/single/:id', PetsController.getPet);
router.get('/all/:id', PetsController.getAllPets);


export default router;
