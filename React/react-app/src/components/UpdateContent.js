import React from 'react'

class UpdateContent extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        id : this.props.id,
        title:this.props.title,
        text:this.props.text
      }
      this.inputFormHandler = this.inputFormHandler.bind(this) // this.inputFormHandler를 바인딩해서 처리하는걸로 바꿔줌
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value}) // 새로운 대관호 문법. target의 name속성을 가져옴
    }
    render(){
      // debugger
      return(
        <article>
          <h2>Update</h2>
            <form action="/update" method="POST" onSubmit={function(e){
              e.preventDefault()
              // debugger
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.text
                // e.target.title.value,
                // e.target.text.value
              )
            }.bind(this)}>
              <input type="hidden" name="id" value={this.state.id}></input>
              <p><input name="title" type="text" placeholder="title" value={this.state.title} 
              onChange={this.inputFormHandler}></input></p>

              <p><textarea name="text" placeholder="text-area" value={this.state.text} onChange={this.inputFormHandler}></textarea></p>
              <button type="submit">Update</button>
            </form>
        </article>
      )
    }
  }

export default UpdateContent