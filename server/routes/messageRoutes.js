import express from 'express'
import { protectROute } from '../middleware/auth.js';
import { getMessages, getUerForSidebar, markMessageAsSeen, sendMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users', protectROute, getUerForSidebar);
messageRouter.get('/:id', protectROute, getMessages);
messageRouter.put('/mark/:id', protectROute, markMessageAsSeen);
messageRouter.post('/send/:id', protectROute, sendMessage);

export default messageRouter;