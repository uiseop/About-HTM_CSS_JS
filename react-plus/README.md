# 리액트 심화학습

<h2>초기 세팅</h2>
router를 사용하기 위해 npm install react-router-dom 설치! -> 설치 후엔 항상 서버를 껐다가 다시 시작 : 라이브러리 변경사항 적용
React.Fragment란? BrowserRouter란?? 

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