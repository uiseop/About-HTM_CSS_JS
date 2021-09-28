# 리액트 심화학습

<h2>초기 세팅</h2>
router를 사용하기 위해 npm install react-router-dom 설치! -> 설치 후엔 항상 서버를 껐다가 다시 시작 : 라이브러리 변경사항 적용
React.Fragment란? -> 시작시 div를 설정해서 시작하는것 : 불필요한 div랜더링이 들어가지만 시작을 <React.Fragment>로 하면 불필요한 div랜더링을 피함 BrowserRouter란?? -> 웹개발을 할땐 react-router-dom만 사용하면 돼, 네이티브랑 합친게 react-router패키지 : 여기서 BrowserRouter,Route, Switch, Link가 포함 : BrowserRouter은 history API를 사용해서 UI를 업데이트해

<h2>컴포넌트의 기본적인 세팅</h2>
컴포넌트는 props가 필요해. 까먹지 않도록 defaultProps로 설정해주는거지. HOW?

```
컴포넌트이름.defaultProps = {
    ...props들// 
}
```

<h2>styled-components</h2>
npm install styled-components ?? 얘는 뭐임?? 컴포넌트의 스타일을 잡아주는앤가?? CSS-in-JS 라이브러리, CSS파일이 아닌 JS로 작성된 컴포넌트에 바로 삽입하는 스타일 기법 : styled-componets 패키지에서 styled 함수를 import   __styled__ 는 가장 중요한 녀석. HTML엘리먼트나 React컴포넌트에 원하는 스타일을 적용하기 위해서 사용됨. 기본 문법은 HMTL 엘리먼트나 React컴포넌트 중 어떤것을 스타일링 하느냐에 따라 살짝 다름. 
styled.---으로  ---의 HTML엘리먼트에 대한 스타일의 정의 하거나 styled(---) 으로 ---의 React 컴포넌트에 스타일 정의

<h3>props.children이란??</h3>

```
// props이름 : name
// name이란 props의 값 : 이름
// this.props.children의 값 : 이 사이에 있는거는 children
<Children name="이름">이 사이에 있는거는 children</Children>
```

# 상단의 컴포넌트의 import가 너무 많아질때

```index.js```파일을 하나 만들어서 그 파일 안에 모두 불러온 후 export {Grid, Image, Text } 를 한다음 불러올 파일에서 ```import {Grid, Image, Text} from './index.js'``` 라고 하면 깔끔한 코드 작성이 가능하다

# React vs React+Redux

React는 컴포넌트 자신이 개별적으로 State를 관리해서 Props로 각 State를 넘겨주는 Tree구성
Redux는 State를 관리하는 하나의 중앙 Store를 갖고있고 React는 그저 Store의 값을 보여줘

# 로그인페이지, 회원가입 페이지

1. 최소단위 컴포넌트를 나눌것 : 공통된 속성을 찾아라! 👉 Input, Button이 공통된 속성이겠군?! 텍스트는 미리 만들어둔 최소단위 컴포넌트를 사용해!
 - 최소단위 컴포넌트는 한 페이지에서 가장 작게 나눈 컴포넌트!
 - 컴포넌트는 최소단위를 몇개 엮어서 만든 작은 문단 - 헤더, 바디, 푸터,, 등등
2. 최소단위 컴포넌트의 파일을 만들고
    1. 공통된 틀
    ```
    import React from 'react'
    const component이름 = (props) => {
        return (
            <Reat.Fragment>
            </Reat.Fragment>
        )
    }
    ```
    2. 틀을 만들었으면 기본적으로 받아와야할 어떤것들을 미리 넣어줘(어떤값이 넣어야할지 아니까) 그리고 값이 변하는 컴포넌트라면 부모 컴포넌트가 ```그 변환값을 알아야해!``` 그래서 변환값이 있는 컴포넌트는 변환값을 넘겨줄 함수도 기본적으로 세팅을 해야하지. 부모에서 props로 ``````콜백함수```를 넘겨줄거야! 함수라는걸 알려줘야하니 _onChange = () => {} 라고 선언하면 (아하! 저 props는 함수를 넣어야하는구나!) 라고 초기값을 통해 알 수 있지!
    3. styled-component로 각 태그들에 css를 입혀줘. 그리고 최소단위 컴포넌트에 공통된 속성을 넣기보다는 공통영역인 중간 컴포넌트에서 한번에 주는게 유지보수처리하기가 편하다!
3. React에서 Window.location.href를 사용해서 url를 이동시키면 페이지가 새로고침 되어버려 👉 Redux에서 물고있던 데이터가 싹다 날아가버려 💜 때문에 ```React-router-dom에서 History```를 통해서 Reducer모듈을 만들지 않고(action 타입-POST,GET,UPDATE등등../user인지, post인지 등등.. 귀찮고 김) ```Redux-actions```를 통해 편하게 사용할 수 있어. ```Imer```를 사용해서 불변성 유지를 편하게 해줘.
```
yarn add redux react-redux redux-thunk redux-logger history@4.10.1 connected-react-router@6.8.0
yarn add immer redux-actions
```
4. Redux에서 module을 만들때는 모든것.user actions에 관한 모든것을 한 파일로(모듈로) 묶었음 👉 dux구조 👉 액션과 액션생성자, Reducer가 한 파일에 들어가
state는 action을 타고 👉 store로 들어간 다음 👉 reducer로 보내진 후 reducer는 👉 새로운 state를 반환해줘! 👉 반환값을 store에 저장!
    - 자 `action`은 어플리케이션으로부터 정보를 `store`에 보내기 위한 객체로 어떤 행위를 위한건지를 위한 `type`과 어떤 아이템을 참조할것인지를 위한 `index`를 키값으로 갖는 객체이다! `index`는 유니크한 ID를 넣어 사용하는것이 좋아
    - `action creators`은 말그대로 action을 생성하는 메소드야. `Flux`에서는 action creator내에 action을 작성해서 그대로 dispatch까지 보내는것이 일반적
    ```
    function addWithDispatch(text){
        const action = {
            type:ADD_TODO,
            text
        }
        dispatch(action)
    }
    ```
    `Redux`는 단순히 action만을 만들어서 dispatch를 따로따로해줘 👉 테스트에 더 용이하데
    ```
    function addAction(text){
        return{
            type:ADD_TODO,
            text
        }
    }
    ```
    - `reducer`는 action을 받아 state를 변경하기 위한 메소드야. Redux에선 state는 전부 개별 객체로서 존재해. 마치 객체형식의 데이터베이스처럼. 상태의 변화를 감지하기 위해 새로운 객체를 반환시켜줘야하는데 이를 하는게 `Handling Actions`야! `현재 state와 action`을 받으면 새로운 `state`를 반환해주는거지 👉 원본객체를 변환시키지 않아서 불변성을 관리해. 
    - `store`는 combineReducers()를 사용해서 reducer들을 한곳에 모아 root Reducer를 만들고 thunk같은 미들웨어로 둘을 합한다음 createStore()를 사용해 만들어!


# 리덕스와 컴포넌트 연결하기
- 스토어를 컴포넌트에 주입하기라는 뜻. 스토어를 주입할 때 Provider라는 걸 사용한데. Provider는 `react-redux` 패키지 안에 있는 컴포넌트(함수)!
    - index.js 파일에 `React커포넌트` 대신 `Provider 컴포넌트`를 사용하고, `store를 props 전달할때랑 동일하게 삽입`! 하면 끝
- 삽입한 store에선 history를 새로 만들었으니 App.js에도 history를 사용할 수 있도록 만들어줘야해. App.js안에 연결한 Router가 있는데 이를 `ConnectedRouter로` 교체 후 history를 props로 전달햐!