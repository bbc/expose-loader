module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	return this.query.substr(1) + ' = require(' + JSON.stringify('-!' + remainingRequest) + ');';
};
