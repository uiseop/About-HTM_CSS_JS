import React from 'react'

const CreateUser = (props) => {
    return(
        <React.Fragment>
            <input name="username" placeholder="아이디" onChange={props.onChange} value={props.username} ref={props.focusRef}/>
            <input name="email" placeholder="이메일" onChange={props.onChange} value={props.email}/>
            <button onClick={props.onCreate}>등록</button>
        </React.Fragment>
    )
}

export default CreateUser