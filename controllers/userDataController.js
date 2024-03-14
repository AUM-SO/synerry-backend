import Users from '../models/userdataModel.js'
import moment from 'moment-timezone';


const CounterVisitUsers = async (req, res) => {
    try {
        const { ipAddress, browserName, browserVersion, OSName } = req.body;

        const nowInThailand = moment.tz('Asia/Bangkok');
        const timestamps = nowInThailand.format();

        const newUserData = new Users({
            ipAddress,
            browserName,
            browserVersion,
            OSName,
            timestamps,
            // counterVisit
        });
        const savedUserData = await newUserData.save();

        res.status(200).json({ success: "CounterVisitUsers is success " })
    } catch (error) {
        res.status(400).json({ error: "error, something with wrong" })
    }
}

export { CounterVisitUsers }