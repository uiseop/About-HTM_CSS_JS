import React from 'react'

const User = (props) => {
    return(
        <React.Fragment>
            <div>
                <b>{props.user.username}</b> <span>({props.user.email})</span>
            </div>
        </React.Fragment>
    )
}

const UserList = (props) => {
    const users = props.users
    return(
        <React.Fragment>
            {users.map(user=>(
                <User user={user} key={user.id}/>
            ))}
        </React.Fragment>
    )
}

export default UserList