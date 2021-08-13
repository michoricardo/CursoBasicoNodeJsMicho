const USERS_DATA = [
    { uid: 'uid_1', name: 'Ricardo Garcia', email: 'micho@mail.com' },
    { uid: 'uid_2', name: 'Oscar Gutierrez', email: 'gtz@mail.com' },
    { uid: 'uid_3', name: 'Ricardo Lara', email: 'lara@mail.com' },
]

function getUser(uid, callback = (error, user) => {}) {
    let error = null;
    const user = USERS_DATA.find( user => user.uid === uid )

    if(!user) error = 'user not found'
    callback(error, user)
}

function hanldeGetUserCallback(error, user) { 
    if( error ) { 
        console.log('error', error); 
        return;
    } 

    console.log('user found:', user.name);
}

console.log('getUser', getUser('uid_2', hanldeGetUserCallback) )

/* flasy */
// console.log('false', false ? true : false )
// console.log("''", '' ? true : false )
// console.log('0', 0 ? true : false )
// console.log('NaN', NaN ? true : false )
// console.log('null', null ? true : false )
// console.log('undefined', undefined ? true : false )

/* object params extraction */
// let obj = { uid: 'uid_121212', name: 'Ricardo Garcia', likes: { code: true }, role: 'tester' }
// let { uid, name: nombre, role = 'developer', likes: { code } } = obj
// console.log('uid', uid)
// console.log('name', nombre)
// console.log('role', role)
// console.log('code', code)


console.clear()

function getUserPromise(uid) {
    // USERS_DATA.find( user => user.uid === uid )
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const user = USERS_DATA.find( user => user.uid === uid )
            if(!user) reject('user not found')
            resolve(user)
        }, 500);
    })
}

getUserPromise('uid_1')
    .then( ({name: fullName, uid}) => {
        console.log('respuesta:', uid)
        console.log(fullName)
    })
    .catch( error => {
        console.log('error:', error)
    })


// const main = async () => {
//     console.log( await getUserPromise('uid_1').then( respuesta => respuesta ) )
// }

// main()