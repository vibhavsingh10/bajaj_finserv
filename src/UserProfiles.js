import React from 'react';

class UserProfiles extends React.Component {
  constructor(){
    super();
    this.state = {
      name: {login: '', avatar_url: '', html_url: '' , type
:''    },
      
    };
    // fix the this value
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    fetch('https://hiring.bajajfinservhealth.in/api/renderMe/')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({name: data.results[0].name,
        });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
	<div>
          <h1>{`${this.state.name.login} ${this.state.name.avatar_url} ${this.state.name.html_url} ${this.state.nametype}`}</h1>
          <img alt='Profile' src={this.state.image}></img><br/>
          <button onClick={this.getUser}>Get new user.</button>
	</div>
    );
  }
}

export default UserProfiles;

 
