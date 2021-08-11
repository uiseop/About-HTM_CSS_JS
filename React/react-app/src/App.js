import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Navi from './components/Navi.js'
import Content from './components/Content'


class Subject extends Component{ //<Subject></Subject>태그로 생성된것
  render(){ // class안에서 함수는 function을 생략한데
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      subjcet:{title:'WEB', sub:'World wide web'},
      content:[
        {id:1,title:'HTML',desc:"HTML is description"},
        {id:2,title:'CSS',desc:"CSS is for design"},
        {id:3,title:'Javascript',desc:"Javascript is for interaction"}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <Subject 
      title={this.state.subjcet.title}
      sub={this.state.subjcet.sub}
      ></Subject>
      <Navi></Navi>
      <Content title="Hello" text="This is 혁명"></Content>
    </div>
  );
}
}



export default App;
