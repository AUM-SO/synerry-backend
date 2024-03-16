import { query } from 'express';
import User from '../models/userdataModel.js'
import moment from 'moment-timezone';

const CounterVisitUsers = async (req, res) => {
    try {
        const { ipAddress, browserName, browserVersion, OSName, onWeb, deviceType } = req.body;

        const nowInThailand = moment.tz('Asia/Bangkok');

        const datestamps = nowInThailand.format('DD/MM/YYYY');
        const timestamps = nowInThailand.format('HH:mm');

        console.log('datestamps ==>', datestamps);
        console.log('timestamps ==>', timestamps);

        const newUserData = new User({
            ipAddress,
            browserName,
            browserVersion,
            OSName,
            datestamps,
            timestamps,
            onWeb,
            deviceType,
        });

        const savedUserData = await newUserData.save();

        res.status(200).json({ success: "Add CounterVisitUsers is success", savedUserData })
    } catch (error) {
        res.status(400).json({ error: "error, something with wrong" })
    }
}

const FilterUserData = async (req, res) => {
    try {
        const { startTime, endTime, date, onWeb } = req.body;


        if (!startTime && !endTime && !date && !onWeb) {

            const userData = await User.find({});
            res.status(200).json({ success: "CounterVisitUsers is success", userData })

        } else if (date && onWeb !== "All") {
            console.log('date only');

            const dateTime = moment(date);
            const formattedDateTime = dateTime.format('DD/MM/YYYY');

            let query = {};

            if (onWeb !== "All") {
                query.datestamps = formattedDateTime;
                query.onWeb = onWeb;
            }

            const userData = await User.find(query);
            res.status(200).json({ success: "CounterVisitUsers is success", userData })
        } else if (date && onWeb == "All") {
            // console.log('date only');

            const dateTime = moment(date);
            const formattedDateTime = dateTime.format('DD/MM/YYYY');

            let query = {};

            if (onWeb == "All") {
                query.datestamps = formattedDateTime;
            }

            const userData = await User.find(query);
            res.status(200).json({ success: "CounterVisitUsers is success", userData })

        } else if (!date && onWeb !== "All") {
            // console.log('page only');

            let query = {};

            if (onWeb !== "All") {
                query.onWeb = onWeb;
            }

            const userData = await User.find(query);
            res.status(200).json({ success: "CounterVisitUsers is success", userData })
        } else if (!startTime && !endTime && !date && onWeb == "All") {
            // console.log('All only');
            
            const userData = await User.find({});
            res.status(200).json({ success: "CounterVisitUsers is success", userData })
        }
        
    } catch (error) {
        res.status(400).json({ error: "error, something with wrong" });
    }
};



export { CounterVisitUsers, FilterUserData } 