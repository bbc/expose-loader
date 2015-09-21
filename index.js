module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
    return this.query.substr(1) + ' = require(' + JSON.stringify('-!' + remainingRequest) + '); ' + this.query.substr(1) + '.dependencies = ' + JSON.stringify(global.moduleDependencies);
};

