import { Router } from 'express';
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from './controllers/players-controller';
import { getClubs } from './controllers/clubs-controller';

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerById);

router.get("/clubs", getClubs);

export default router;