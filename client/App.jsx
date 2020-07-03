//create react component that demonstrates react carousel


//create react component that demonstrates vertical mode
import React from 'react';
import Carousel from 'react-elastic-carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Carousel itemsToScroll={2} itemsToShow={2}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
      </Carousel>
      </div>
    );
  }
}
export default App;
