/**
 * @swagger
 * /api/userdata:
 *   post:
 *     tags:
 *       - userdata
 *     description: Returns userdata
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: ipAddress
 *         description: IP Address
 *         required: true
 *         type: string
 *       - in: formData
 *         name: OSName
 *         description: Operating System Name
 *         required: true
 *         type: string
 *       - in: formData
 *         name: browserName
 *         description: Browser Name
 *         required: true
 *         type: string
 *       - in: formData
 *         name: browserVersion
 *         description: Browser Version
 *         required: true
 *         type: string
 *       - in: formData
 *         name: deviceType
 *         description: Device Type
 *         required: true
 *         type: string
 *       - in: formData
 *         name: onWeb
 *         description: On Web
 *         required: true
 *         type: string
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
 *     description: Filter User Data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: date
 *         description: Date for filtering user data
 *         required: false
 *         type: string
 *       - in: formData
 *         name: endTime
 *         description: End time for filtering user data
 *         required: false
 *         type: string
 *       - in: formData
 *         name: onWeb
 *         description: On Web
 *         required: false
 *         type: string
 *       - in: formData
 *         name: startTime
 *         description: Start time for filtering user data
 *         required: false
 *         type: string
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
 *                   example: error, something went wrong
 */


import express from 'express';
const router = express.Router();
import { CounterVisitUsers, FilterUserData } from '../controllers/userDataController.js'

router.post('/userdata', CounterVisitUsers);

router.post('/filteruserdata', FilterUserData);

export default router;