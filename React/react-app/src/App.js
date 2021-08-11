import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Navi from './components/Navi.js'
import Content from './components/Content'


class Subject extends Component{ //<Subject></Subject>태그로 생성된것
  render(){ // class안에서 함수는 function을 생략한데
    return (
      <header>
          <h1><a href="">{this.props.title}</a></h1>
          {this.props.sub}
      </header>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World wide web'},
      welcome:{title:'Welcome',desc:"Hello REact"},
      contents:[
        {id:1,title:'HTML',desc:"HTML is description"},
        {id:2,title:'CSS',desc:"CSS is for design"},
        {id:3,title:'Javascript',desc:"Javascript is for interaction"}
      ]
    }
  }
  render(){
    var _title,_desc = null
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc

    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subjcet.title}
        sub={this.state.subjcet.sub}
        ></Subject> */}
        <header>
          <h1><a href="" onClick={function(e){
            console.log(e);
            e.preventDefault() // 태그안의 기본적인 동작 a태그의 href는 클릭시 이동하는데 그 기능을 막아주는 역할을 함
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Navi data={this.state.contents}></Navi>
        <Content title={_title} text={_desc}></Content>
      </div>
    );
}
}



export default App;
