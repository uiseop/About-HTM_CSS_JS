import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user: User,
    router : connectRouter(history),
});

// 배열 안에 내가 사용할 미들웨어를 하나씩 넣어주는거야. 여기다 추가하면서 진행하는거야
// action을 반환하기 전에 단계를 넣을 수 있어. reducer로 가기 전에 잠깐동안 API요청을 가져간다던가 이런 비동기 작업들을 수행해
const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

// 미들웨어를 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어 만들기 👉 복붙해도 상관없음 리듀서랑, 미들웨어를 합쳐진거야
let store = (initialStore) => createStore(rootReducer, enhancer);


export default store();