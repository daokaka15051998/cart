// var a = { b: 1, c: { e: 2, d: 3 } };


// var a2 = { ...a, b: 5 };


// a2.c.e = 'asdsad';
// console.log(a)
// console.log(a2)


// var a = { b: 1, c: { e: 2, d: 3 } };


// var a2 = { ...a, b: 5, c: { ...a.c, e: 'sdfghj' } };


// console.log(a)
// console.log(a2)


var state = {
    count: 0,
    user: {
        name: 'dao',
        age: 12,
        address: {
            province: 1,
            district: 2,
            housea: {
                number: '1234',
                name: 'asdfg'
            }
        }
    }
};

// var state2 = { ...state, count: 1 };
// console.log(state2)

// var state3 = { ...state, user: { name: 'abc', } };
// console.log(state3)

var satate4 = { ...state, user: { ...state.user, name: "a" } };
console.log(satate4)
var state5 = { ...state, user: { ...state.user, address: { ...state.user.address, housea: { ...state.user.address.housea, name: 'abc' } } } };
console.log(state5.user.address)



var object = { a: 1, b: 2 };
var { a } = object;
console.log({ a })
// lay gia tri a
