// 액션을 편하게 만들어주고, reducer를 편하게 만들어줘
import {createAction, handleActions} from "redux-actions"
// 불변성 관리
import {produce} from "immer"
// eslint-disable-next-line
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";

// actions : 이름만 작성해, 어떤 행위를 하는건지 type값을 정하는거지
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT"
const GET_USER = "GET_USER"

// action creators : 모듈들
const logIn = createAction(LOG_IN, (user) => ({user})) // type을 넘겨주고 매개변수로 받아온애로 callback
const logOut = createAction(LOG_OUT, (user) => ({user}))
const getUser = createAction(GET_USER, (user) => ({user}))
// ☝
// 객체를 반환해주는 친구 : action creator
// const logIn = (user) => {
//     return {
//         type: LOG_IN, // type은 어떤 action을 행하는지. 정보를 store로 보내기 위한 객체
//         user // store.dispatch()를 통해 store로 보내져, user는 어떤 아이템을 참조할것인지를 기입하는곳
//     } // 실제로 유니크한 ID를 넣어 사용하는 것이 좋다
// }

// initialState
const initialState = {
    user : null,
    is_login : false
}

// reducer, export default해주는데 이름은 달라도 돼
export default handleActions({
    // 여기서 일어나는 작업들의 불변성을 관리해줄거 👉 여기서 immer를 사용
    [LOG_IN] : (state,action) => produce(state,(draft)=>{
        // key , value
        setCookie("is_login","success")
        // payload안에 우리가 보낸 데이터가 담겨있음
        draft.user = action.payload.user
        draft.is_login = true
    }),
    [LOG_OUT] : (state,action) => produce(state,(draft)=>{}),
    [GET_USER] : (state,action) => produce(state,(draft)=>{}),
},initialState)

// const reducer = handleActions({ 👈export default 해주는 애들은 reducer. reducer들을 모아가지고 미들웨어와 엮어서 store를 만듦
//     [LOG_IN]: (state,action) => {

//     }
// },initialState = {})
// ☝
// const reducer = (state={}, action={}) => {
//     switch(action.type){
//         case "LOG_IN" : {
//             // 어떤 동작을 할지 썼어
//             state.user = action.user
//         }
//     }
// }

// action creator export 
const actionCreators = {
    logIn,
    logOut,
    getUser,
}

export {actionCreators}