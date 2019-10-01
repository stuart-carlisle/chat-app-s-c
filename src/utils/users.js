let users = []

//addUser
const addUser = ({ id, username, room }) => {
    //clean data
    username = username.trim().toLowerCase() 
    room = room.trim().toLowerCase() 
    //validate data
    if(!username||!room){
        return {
            error:'Username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room===room && user.username===username
    })   
    
    //validate username
    if(existingUser){
        return {
            error:'Username is in use!'
        }
    }

    //store
    const user = {
        id,
        username,
        room
    }

    users.push(user)
    return { user }
}

//removeUser
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

//getUser
const getUser = (id) => {
    return users.find((user)=>user.id === id) 
}

//getUsersInRoom
const getUsersInRoom = (userRoom) => {
    userRoom = userRoom.trim().toLowerCase()
    return users.filter(({room}) => room === userRoom)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

