import './App.css';
import React,{useRef,useState} from 'react'
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';


function App() {
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const [inputs,setInputs] = useState({
    username:'',
    email:''
  })

  const {username, email} = inputs
  const focusInput = useRef(null)
  const nextId = useRef(4)

  const onChange = (e) => {
    const {name,value} = e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const onCreate = () => {
    const user = {
      id:nextId,
      username,
      email
    }
    setUsers([
      ...users,
      user
    ])
    setInputs({
      username:'',
      email:''
    })
    focusInput.current.focus()
    nextId.current += 1
  }
  

  return (
    <React.Fragment>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        focusRef={focusInput}/>
      <UserList users={users}/>
    </React.Fragment>
  );
}

export default App;
