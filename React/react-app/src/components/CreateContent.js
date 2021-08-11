import React from 'react'

class CreateContent extends React.Component{
    render(){
      return(
        <article>
            <h2>Create</h2>
            <form action="/create_post" method="POST" onSubmit={function(e){
              e.preventDefault()
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value)
              // debugger
            }.bind(this)}>
              <p><input type="text" name="title" placeholder="title"></input></p>
              <p><textarea name="desc" placeholder="description"></textarea></p>
              <p><button type="submit">저장하기</button></p>
            </form>
        </article>
      )
    }
  }

export default CreateContent