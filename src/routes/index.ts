import {Router} from 'express';
const router = Router();

import { getUserByCedula } from '../controllers/index.controller';

router.get('/users/:cedula', getUserByCedula);



    
export default router;