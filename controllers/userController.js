const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const https = require("https");

exports.getUserInfo = catchAsyncError(async (req, res, next) => {
    let finaldata = [];
    let data = '';
    var options = {
        host: 'api.github.com',
        path: '/users/' + req.params.username,
        method: 'GET',
        headers: { 'user-agent': 'node.js' }
    };

    new Promise((resolve, reject) => {
        https.get(options, (resp) => {
            resp.on('data', (chunk) => {
                data += chunk;
                // console.log("data is ", data);
            })

            resp.on('end', () => {
                resolve(data)
                finaldata.push(JSON.parse(data));
                // console.log("finaldata is ", finaldata);
            })

        });
    }).then(() => {
        if (data === '') {
            return next(new ErrorHandler(`User does not exist with Userame: ${req.params.username}`));
        }
        res.status(200).json({
            success: true,
            finaldata
        });
    })


})