// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'


class DestinationSearch extends Component {
    
     const {destinationsList}=this.props
   

    state= {
        input:"",
        stinationsList:destinationsList
    }

    changing =(event)=>{
        this.setState({input:event.target.value})
    }

  render() {
       const {destinationsList}=this.props
    const {input, stinationsList} = this.state
    const searchResults = stinationsList.filter(eachUser =>
      eachUser.name.includes(input)
    )
    return (
      <div className="outerr">
        <div className="center">
          <h1>Destination Search</h1>
          <input type="text" onChange={this.changing} />
        </div>
        <ul className="lists">
          {searchResults.map(eachUser => (
            <DestinationItem
              destinationsList={eachUser}
              key={eachUser.uniqueNo}
              className="itemss"
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
