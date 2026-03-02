import { Router } from 'express';
import pokemonRoutes from './pokemonRoutes.js';

const router = Router();

// Mount all Pokemon routes at root
router.use('/', pokemonRoutes);

<<<<<<< arapoc/pokedex-pull-request
export default router;
=======
export default router;
>>>>>>> main
