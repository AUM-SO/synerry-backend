/**
 * @swagger
 * /api/userdata:
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
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bad request error message here
 */

/**
 * @swagger
 * /api/filteruserdata:
 *   post:
 *     tags:
 *       - filteruserdata
 *     description: filter User Data
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
 *                 success:
 *                   type: string
 *                   example: This is a sample response
 *                 data:
 *                   type: object
 *                   items:
 *                     type: object
 *                     properties:
 *                       key:
 *                         type: string
 *                         example: value
 *                       anotherProperty:
 *                         type: string
 *                         example: anotherValue
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: error, something with wrong
 */


import express from 'express';
const router = express.Router();
import { CounterVisitUsers, FilterUserData } from '../controllers/userDataController.js'

router.post('/userdata', CounterVisitUsers);

router.post('/filteruserdata', FilterUserData);

export default router;
