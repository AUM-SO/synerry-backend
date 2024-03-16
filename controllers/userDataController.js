import User from '../models/userdataModel.js'
import moment from 'moment-timezone';

const CounterVisitUsers = async (req, res) => {
    try {
        const { ipAddress, browserName, browserVersion, OSName, onWeb, deviceType } = req.body;

        const nowInThailand = moment.tz('Asia/Bangkok');
        const timestamps = nowInThailand.format('HH:mm   DD/MM/YYYY');

        const newUserData = new User({
            ipAddress,
            browserName,
            browserVersion,
            OSName,
            timestamps,
            onWeb,
            deviceType,
        });

        const savedUserData = await newUserData.save();

        res.status(200).json({ success: "CounterVisitUsers is success", savedUserData })
    } catch (error) {
        res.status(400).json({ error: "error, something with wrong" })
    }
}


/* const getUserData = async (req, res) => {
    try {

        // const userData = await User.find({});
        // const userDataToDay = await User.aggregate([
        //     {
        //         $project: {
        //             day: { $dateToString: { format: "%d/%m/%Y", date: "$createdAt" } },
        //             // คุณสามารถเลือกเพิ่มเติม fields ที่คุณต้องการในการแสดงผลได้ตามต้องการ
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: "$day",
        //             count: { $sum: 1 }
        //             // คุณสามารถเพิ่ม fields ที่คุณต้องการในการแสดงผลได้ตามต้องการ
        //         }
        //     },
        //     {
        //         $project: {
        //             _id: 0,
        //             day: "$_id",
        //             count: 1
        //         }
        //     }
        // ]);

        const userDataToDay = await User.aggregate([
            {
                $project: {
                    day: { $dateToString: { format: "%d/%m/%Y", date: "$createdAt" } },
                    onWeb: 1,
                    deviceType: 1
                }
            },
            {
                $group: {
                    _id: { day: "$day", onWeb: "$onWeb" },
                    count: { $sum: 1 },
                    deviceTypes: { $addToSet: "$deviceType" }
                }
            },
            {
                $group: {
                    _id: "$_id.day",
                    pages: {
                        $addToSet: {
                            page: "$_id.onWeb",
                            count: "$count",
                            deviceTypes: "$deviceTypes"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    day: "$_id",
                    pages: 1
                }
            }
        ]);

        const userDataToDay = await User.aggregate([
            {
              $project: {
                day: { $dateToString: { format: "%d/%m/%Y", date: "$createdAt" } },
                deviceType: 1
              }
            },
            {
              $group: {
                _id: { day: "$day", deviceType: "$deviceType" },
                count: { $sum: 1 }
              }
            },
            {
              $group: {
                _id: "$_id.day",
                pages: {
                  $addToSet: {
                    deviceType: "$_id.deviceType",
                    count: "$count"
                  }
                }
              }
            },
            {
              $project: {
                _id: 0,
                day: "$_id",
                devices: "$pages"
              }
            }
          ]);

        console.log(userDataToDay);
        // console.log(userData);

        res.status(200).json({ success: "CounterVisitUsers is success", userData, userDataToDay })
    } catch (error) {
        res.status(400).json({ error: "error, something with wrong" })
    }
} */

export { CounterVisitUsers, getUserData }