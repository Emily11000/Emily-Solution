'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        let names =[];
        for(let user in db.itemsOfUserByUsername){
            if(db.itemsOfUserByUsername[user].includes(item)){
                names.push(user);
            }
        }

        let ageArr=[];
        for(let id in db.usersById){
            if(names.includes(db.usersById[id].username)){
                ageArr.push(db.usersById[id].age);
            }
        }

        let ageCount = {};
        for(let i=0; i<ageArr.length; i++){
            let curAge = ageArr[i];
            if(ageCount[curAge]){
                ageCount[curAge].count += 1;
            }else{
                ageCount[curAge] = {age:curAge,count:1};
            }
        }
        return Object.values(ageCount);
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
