import React, {Component} from 'react'
import '../pages/index.css'

class I extends Component{
    render(){

    return (
    <div>
    <img className='pic11' src={this.props.src}></img>
    </div>
    )
    }
}

export default I;