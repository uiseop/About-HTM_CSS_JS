import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class Subject extends Component{ //<Subject></Subject>태그로 생성된것
  render(){ // class안에서 함수는 function을 생략한데
    return (
      <header>
          <h1>Web</h1>
          world wide web
      </header>
    )
  }
}

class App extends Component {
  render(){
  return (
    <div className="App">
      <Subject></Subject>
      <Navi></Navi>
      <Content></Content>
    </div>
  );
}
}

class Navi extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">Javascript</a></li>
            <li><a href="3.html">CSS</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <article>
          <h2>HTML</h2>
          HTML is Hyper Text Markup Language
      </article>
    )
  }
}

export default App;
