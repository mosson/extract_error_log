module.exports = function (path_to_dir) {
	var fs = require ('fs');
	var _ = require ('underscore');
	


	_.each(path_to_dir, function(path_to_date_dir) {
		fs.readdir(path_to_date_dir, function(err, files) {

			if (err) { console.log (err) }
				_.each(files, function(file) {
					if (file.match(/(log-[0-9]{8})/)) {

						data = fs.readFileSync(path_to_date_dir + "/" + file, "ascii")
						
						fs.writeFileSync(path_to_date_dir + "/" + file, data.replace(/\+0000/gim, "+0900"), "ascii")
					}
				})
			})
		})
	
}

