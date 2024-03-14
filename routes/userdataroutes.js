/**
 * @swagger
 * /userdata:
 *   post:
 *     tags:
 *       - userdata
 *     description: Returns userdata
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: This is a sample response
 *                 data:
 *                   type: object
 *                   properties:
 *                     key:
 *                       type: string
 *                       example: value
 */
import express from 'express';
const router = express.Router();
import { CounterVisitUsers } from '../controllers/userDataController.js'

router.post('/userdata', CounterVisitUsers);



export default router;
