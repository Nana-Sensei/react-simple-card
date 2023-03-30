import React, {Component} from 'react';
import Title from './Title';
import Description from './Description';
import Logo from './Logo.jpg';
import Image from './Image';
import './card.css'

class Simplecard extends Component{
  render () {
    return (
      <div className="Container">
        
        <Image  className="cardImg" img={Logo}/>

        <div className="card">
          <Title className="card-title" title="ACCRA PHOTO WEEK"/>
          <Description className="Des" des="For one week, photographers 
          and filmmakers get the opportunity to engage each other 
          to inspire, learn and challenge themselves.Through 
          well-curated talks, workshops, and exhibitions, 
          the initiative empowers lens-based artists and provides 
          them with the creative apparatus required to keep up with 
          the ever-dynamic photography/filmmaking landscape."/>
        </div>
        
      </div>
    );
  }
}

export default Simplecard;