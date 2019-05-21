import React from "react"
import { Link } from "gatsby"
import { findDOMNode } from "react-dom";
import $ from "jquery"
import { Suspense} from 'react'
import './index.css'
import logo from "../images/logo.png"
import SEO from "../components/seo"
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'
import pic8 from '../images/pic8.jpg'
import pic9 from '../images/pic9.jpg'
import pic10 from '../images/pic10.jpg'
import pic11 from '../images/pic11.jpg'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven  from '../images/7.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.jpg'
import ten from '../images/10.jpg'
import oone from '../images/11.jpg'
import otwo from '../images/12.jpg'
import othree from '../images/13.jpg'
import ofour from '../images/14.jpg'
import ofive from '../images/15.jpg'
import osix from '../images/16.jpg'
import oseven from '../images/17.jpg'
import oeight from '../images/18.jpg'
import onine from '../images/19.jpg'
import twenty from '../images/20.jpg'
import tone from '../images/21.jpg'
import ttwo from '../images/22.jpg'
import tthree from '../images/23.jpg'
import tfour from '../images/24.jpg'
import tfive from '../images/25.jpg'
import tsix from '../images/26.jpg'
import tseven from '../images/27.jpg'
import teight from '../images/28.jpg'
import tnine from '../images/29.jpg'
import thirty from '../images/30.jpg'
import thone from '../images/31.jpg'
import thtwo from '../images/32.jpg'
import ththree from '../images/33.jpg'
import thfour from '../images/34.jpg'
import thfive from '../images/35.jpg'
import thsix from '../images/36.jpg'
import thseven from '../images/37.jpg'
import theight from '../images/38.jpg'
import thnine from '../images/39.jpg'
import fourty from '../images/40.jpg'
import fone from '../images/41.jpg'
import ftwo from '../images/42.jpg'
import fthree from '../images/43.jpg'
import ffour from '../images/44.jpg'
import ffive from '../images/45.jpg'
import fsix from '../images/46.jpg'
import fseven from '../images/47.jpg'
import feight from '../images/48.jpg'
import fnine from '../images/49.jpg'
import fifty from '../images/50.jpg'
import fiftyone from '../images/51.jpg'
import fiftytwo from '../images/52.jpg'
import InfiniteScroll from 'react-infinite-scroller'
import Block1 from '../components/block1'



const IndexPage = () => (
  <div className="containers">
  <div className="header">
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <img src={logo} id="logo" style={{width: '20vw'}}></img>
  <div className="links"><Link to = '/'><u>HOME</u></Link> <Link to = '/about'>ABOU</Link><span className="reg"><Link to = '/about'>T M</Link></span><Link to = '/about'>E</Link>{'    '} <Link to='/contact'>CONTAC</Link><span className="reg"><Link to='/contact'>T M</Link></span><Link to='/contact'>E</Link> {'   '}</div>
  </div>
      <div className="heading"><h1 id='gal'>GALLERY</h1></div>
      <div className="con">

      <div className="box"><img src={one}></img></div>
      <div className="box"><img src={two}></img></div>
      <div className="box"><img src={three}></img></div>
      <div className="box"><img src={four}></img></div>
      <div className="box"><img src={five}></img></div>
      <div className="box"><img src={six}></img></div>
      <div className="box"><img src={seven}></img></div>
      <div className="box"><img src={eight}></img></div>
      <div className="box"><img src={nine}></img></div>

      <div className="box"><img src={ten}></img></div>
      <div className="box"><img src={oone}></img></div>
      <div className="box"><img src={otwo}></img></div>
      <div className="box"><img src={othree}></img></div>
      <div className="box"><img src={ofour}></img></div>
      <div className="box"><img src={ofive}></img></div>
      <div className="box"><img src={osix}></img></div>
      <div className="box"><img src={oseven}></img></div>
      <div className="box"><img src={oeight}></img></div>
      <div className="box"><img src={onine}></img></div>

      <div className="box"><img src={twenty}></img></div>
      <div className="box"><img src={tone}></img></div>
      <div className="box"><img src={ttwo}></img></div>
      <div className="box"><img src={tthree}></img></div>
      <div className="box"><img src={tfour}></img></div>
      <div className="box"><img src={tfive}></img></div>
      <div className="box"><img src={tsix}></img></div>
      <div className="box"><img src={tseven}></img></div>
      <div className="box"><img src={teight}></img></div>
      <div className="box"><img src={tnine}></img></div>

      <div className="box"><img src={thirty}></img></div>
      <div className="box"><img src={thone}></img></div>
      <div className="box"><img src={thtwo}></img></div>
      <div className="box"><img src={ththree}></img></div>
      <div className="box"><img src={thfour}></img></div>
      <div className="box"><img src={thfive}></img></div>
      <div className="box"><img src={thsix}></img></div>
      <div className="box"><img src={thseven}></img></div>
      <div className="box"><img src={theight}></img></div>
      <div className="box"><img src={thnine}></img></div>

      <div className="box"><img src={fourty}></img></div>
      <div className="box"><img src={fone}></img></div>
      <div className="box"><img src={ftwo}></img></div>
      <div className="box"><img src={fthree}></img></div>
      <div className="box"><img src={ffour}></img></div>
      <div className="box"><img src={ffive}></img></div>
      <div className="box"><img src={fsix}></img></div>
      <div className="box"><img src={fseven}></img></div>
      <div className="box"><img src={feight}></img></div>
      <div className="box"><img src={fnine}></img></div>

      <div className="box"><img src={fifty}></img></div>
      <div className="box"><img src={fiftyone}></img></div>
      <div className="box"><img src={fiftytwo}></img></div>
      <div className="box"><img src={pic1}></img></div>
      <div className="box"><img src={pic2}></img></div>
      <div className="box"><img src={pic3}></img></div>
      <div className="box"><img src={pic4}></img></div>
      <div className="box"><img src={pic5}></img></div>
      <div className="box"><img src={pic6}></img></div>
      <div className="box"><img src={pic7}></img></div>
      <div className="box"><img src={pic8}></img></div>
      <div className="box"><img src={pic9}></img></div>
      <div className="box"><img src={pic10}></img></div>
      <div className="box"><img src={pic11}></img></div>

    </div>
</div>
)

export default IndexPage
