import React from 'react'

class Controller extends React.Component{
    render(){
      return(
        <ul>
          <li><a href='/create' onClick={function(e){
            e.preventDefault()
            this.props.onChangeMode('create')
          }.bind(this)}>
            CREATE</a></li>
            
          <li><a href='/upate' onClick={function(e){
            e.preventDefault()
            this.props.onChangeMode('update')
          }.bind(this)}>
            UPDATE</a></li>

          <li><button onClick={function(e){
            e.preventDefault()
            this.props.onChangeMode('delete')
          }.bind(this)}>
            DELETE</button></li> 
        </ul>
      )
    }
  }

export default Controller