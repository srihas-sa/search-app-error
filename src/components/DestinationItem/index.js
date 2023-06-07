// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationsList} = this.props
    const {name, imgUrl} = destinationsList
    return (
      <div className="item">
        <img src={imgUrl} alt="" className="image" />
        <h1>{name}</h1>
      </div>
    )
  }
}

export default DestinationItem
