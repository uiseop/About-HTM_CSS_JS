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