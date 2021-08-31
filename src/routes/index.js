'use strict';

module.exports = (app) => {
    require('./healthCheck.js')(app);
    require('./getUsers.js')(app);
    require('./getListOfAgesOfUsersWith.js')(app);
};;
