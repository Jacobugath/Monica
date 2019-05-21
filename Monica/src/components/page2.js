import React, {Component} from 'react'
import pic6 from '../images/pic6'
import pic7 from '../images/pic7.jpg'
import pic8 from '../images/pic8.jpg'
import pic9 from '../images/pic9.jpg'
import pic10 from '../images/pic10.jpg'
import pic11 from '../images/pic11.jpg'
import InfiniteScroll from 'react-infinite-scroller';



class Page2 extends Component{
    render(){
        return(
            <div class="grid">
  <div class="grid-item"><img src={pic6}></img></div>
  <div class="grid-item grid-item--width2"><img src={pic7}></img></div>
  <div class="grid-item"><img src={pic8}></img></div>
  ...
</div>
        )
    }

}
export default Page2;