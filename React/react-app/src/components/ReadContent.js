import React from 'react'

class ReadContent extends React.Component{
    render(){
      return(
        <article>
            <h2>{this.props.title}</h2>
            {this.props.text}
        </article>
      )
    }
  }

export default ReadContent