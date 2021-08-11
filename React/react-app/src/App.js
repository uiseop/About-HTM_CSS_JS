import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Navi from './components/Navi.js'
import Content from './components/Content'


class Subject extends Component{ //<Subject></Subject>태그로 생성된것
  render(){ // class안에서 함수는 function을 생략한데
    return (
      <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault()
            this.props.onChangePage()
          }.bind(this)}>{this.props.title}</a></h1>
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
      selected_content_id:2,
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
      for(let data of this.state.contents){
        if (data.id === this.state.selected_content_id){
          _title = data.title
          _desc = data.desc
          break
        }
      }

    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage = {function(){
          if(this.state.mode === 'read') this.setState({
              mode:"welcome"
            })
          else this.setState({
            mode : 'read'
          })
        }.bind(this)} // props로 전달 돼
        ></Subject>
        {/* <header>
          <h1><a href="" onClick={function(e){
            console.log(e);
            e.preventDefault() // 태그안의 기본적인 동작 a태그의 href는 클릭시 이동하는데 그 기능을 막아주는 역할을 함
            // this.state.mode = "welcome" function 안의 this는 이제 객체를 가리키지 않아.  ==> 함수가 끝난 직후에 bind(this) 를 추가해주면 돼
            
            this.setState({ // render안에서 컴포넌트의 state를 바꿨다는걸 알려주는건 setState함수를 사용하고 인자로는 객체를 넣어줘, state자체가 객체니까
              mode:"welcome"
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Navi data={this.state.contents}
        onChangePage = {function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}
        ></Navi>
        <Content title={_title} text={_desc}></Content>
      </div>
    );
}
}



export default App;
