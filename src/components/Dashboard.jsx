import React from 'react';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cloudTrigger: "https://us-central1-hackher413-2020-bra.cloudfunctions.net/getJsonData",
      isLoaded: false,
      items: {},
      response: ""
    };
  }

  componentDidMount() {
    fetch(this.cloudTrigger)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("here" + result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <div>
            {/* <ul>
              {
                items.mapfor (let [key, value] of Object.items) {
                  `<li>${key}</li>`
                }
                // items.map(item => (
                //   <li key={item.name}>
                //     {item.name} {item.price}
                //   </li>
                // ))
              }
            </ul> */}
          </div>
        </div>
      );
    }
    
  }

}

export default Dashboard;
