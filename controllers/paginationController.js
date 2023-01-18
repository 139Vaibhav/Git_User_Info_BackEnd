const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const https = require("https");

exports.getRepoPage = catchAsyncError(async (req, res, next) => {
    let data = '';
    console.log("the query is ", req.query.page);
    const url = `https://api.github.com/users/${req.params.username}/repos?page=${req.query.page}&per_page=9`;
    console.log("url is ", url);
    var options = {
        // host: 'api.github.com',
        // path: '/users/' + req.params.username + '/repos',
        // query: '?page=' + req.query.page,
        // method: 'GET',
        headers: { 'user-agent': 'node.js' }
    };

    new Promise((resolve, reject) => {
        https.get(url, options, (resp) => {
            resp.on('data', (chunk) => {
                data += chunk;
                // console.log("data is ", data);
            })

            resp.on('end', () => {
                resolve(data)
            })

        });
    }).then(() => {
        if (data === '') {
            return next(new ErrorHandler(`User does not exist with Userame: ${req.params.username}`));
        }
        res.status(200).json({
            success: true,
            data
        });
    })
    // res.status(200).json({
    //     success: true,
    //     data
    // })
})