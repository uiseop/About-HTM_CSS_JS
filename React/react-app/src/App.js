import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Navi from './components/Navi.js'
import ReadContent from './components/ReadContent'
import Controller from './components/Controller';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


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
    this.max_content_id = 3
    this.state = {
      mode:'create',
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
    var _title,_desc,_article,_id = null
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} text={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      for(let data of this.state.contents){
        if (data.id === this.state.selected_content_id){
          _title = data.title
          _desc = data.desc
          _article = <ReadContent title={_title} text={_desc}></ReadContent>
          break
        }
      }

    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id += 1
        let result = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc})
        this.setState({
          contents:result
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      for(let data of this.state.contents){
        if(data.id === this.state.selected_content_id)
        {
          _id = data.id
          _title = data.title
          _desc = data.desc
          _article = <UpdateContent id={_id} title={_title} text={_desc} onSubmit={function(_id,_title,_desc){
            // let result = 
            let result = Array.from(this.state.contents)
            console.log(result)
            for(let i in result){
              if (result[i].id === _id){
                result[i] = {id:_id, title:_title, desc:_desc}
                console.log(result[i])
                break
              }
            }
            this.setState({
              contents : result
            })

      }.bind(this)}></UpdateContent>
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
        <Controller onChangeMode={function(_mode){
          if(_mode === 'delete'){

          }else{
            this.setState({
              mode:_mode
            })
          }
        }.bind(this)}></Controller>
        {_article}
        
      </div>
    );
}
}



export default App;
