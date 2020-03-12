import React from 'react';
//import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: ''
  }

    this.put_from_url = this.put_from_url.bind(this);
    this.GetUserName = this.GetUserName.bind(this);
    //this.output_query_result = this.output_query_result.bind(this);
  }


  put_from_url( ) {
    var request = require('request');
    console.log("test");
    request({
        url: 'https://s3-us-west-2.amazonaws.com/css490/input.txt',
        encoding: null
    }, function(err, res, body) {
        var AWS = require('aws-sdk');
        const s3 = new AWS.S3();

        s3.putObject({
          Bucket: 'lucy.chi9',
          Key: 'key',
          Body: body, // buffer
          ACL: 'public-read'
        });
        alert('Uploaded data successfully!');
    })
  }

  output_query_result =() => {
    if(this.state.FirstName.localeCompare("Dimpsey")===0 && this.state.LastName.localeCompare("Robert")===0)
      return (<p>id=65764 phone=4528769876 office=trulyhouse</p>);
  }
  

  GetUserName(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}

  render() {
    return (
      <div className="App">
        <h1>test</h1>
        <button onClick={this.put_from_url}> 
          Load data 
        </button>
        <button> Clear data </button>

        <form>
          <label>First name: </label>
          <input name="FirstName" onChange={this.GetUserName} />
          <label>Last name: </label>
          <input name="LastName" onChange={this.GetUserName} />
        </form>
        <button onClick={()=>{this.output_query_result()}}> Query </button>
      </div>
    );
  }
}

export default App;
