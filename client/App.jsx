//create react component that demonstrates react carousel


//create react component that demonstrates vertical mode
import React from 'react';
import Carousel, {consts} from 'react-elastic-carousel';
import styled from 'styled-components';

const Numbers = styled.p`
   width: 90%;
   height: 40px;
   text-align: center;
   background-color: purple;
   color: white;
   padding-top: 15px;
   font-size: 20px;
   `;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  horizontalArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  verticalArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '^' : 'v'
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  render() {
    return (
      <div>
        <div>
          <h1>HORIZONTAL</h1>
          <Carousel itemsToScroll={1} itemsToShow={1} renderArrow={this.horizontalArrow}>
            <Numbers>1</Numbers>
            <Numbers>2</Numbers>
            <Numbers>3</Numbers>
            <Numbers>4</Numbers>
            <Numbers>5</Numbers>
            <Numbers>6</Numbers>
            <Numbers>7</Numbers>
          </Carousel>

        </div>
      <div>
        <h1>VERTICAL</h1>
          <Carousel verticalMode itemsToScroll={2} itemsToShow={2} renderArrow={this.verticalArrow}>
            <Numbers>1</Numbers>
            <Numbers>2</Numbers>
            <Numbers>3</Numbers>
            <Numbers>4</Numbers>
            <Numbers>5</Numbers>
            <Numbers>6</Numbers>
            <Numbers>7</Numbers>
          </Carousel>

      </div>
      </div>
    );
  }
}
export default App;
