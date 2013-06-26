var AWS = require('aws-sdk');
var s3 = new AWS.S3();

AWS.config.update({"accessKeyId": process.env.AWS_ACCESS_KEY_ID , "secretAccessKey": process.env.AWS_SECRET_KEY })

s3.listBuckets(params = {}, function(err, data) {
	if (err) throw err;
	console.log(data)
})