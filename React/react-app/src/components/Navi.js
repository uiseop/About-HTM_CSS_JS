import React from 'react'

class Navi extends React.Component{
    render(){
      let data = this.props.data
      let list = []
      for(let i of data)
        list.push(<li key={i.id}><a href={"/content/"+i.id}>{i.title}</a></li>)
      
      return(
        <nav>
          <ul>
              {list}
          </ul>
        </nav>
      )
    }
  }

export default Navi