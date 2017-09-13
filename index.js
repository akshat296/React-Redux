const {Map} = require('immutable');

const user = Map({
    name: 'Akshat',
        age: 22
});

function incAge(user) {
    return user.set('age', user.get('age') + 1)
}

console.log(incAge(user).toObject());
console.log(user.toObject());
