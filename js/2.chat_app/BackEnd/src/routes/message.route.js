import  express  from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import router from './auth.route';
import { getMessages, getUserForSidebar, sendMessage } from '../controllers/message.controller';

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage)



export default router;