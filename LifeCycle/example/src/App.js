import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "Start"};
  }
  componentWillMount(){
    console.log('First this called');
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello Pune'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
       
      <h1>{this.state.data}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);


export default Header;
