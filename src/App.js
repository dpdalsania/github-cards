import React from "react";
import "./App.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

class App extends React.Component {
  state = {
    user: {},
    active: false
  };

  handleToggle = event => {
    console.log("handleToggle");
    if (this.state.active === true) {
      this.setState({ active: false });
    } else {
      fetch("https://api.github.com/users/kramoliya")
        .then(res => res.json())
        .then(user => {
          this.setState({ user, active: true });
        });
    }
  };

  render() {
    const { avatar_url, name, created_at, followers } = this.state.user;

    return (
      <React.Fragment>
        <div id="buttonWrapper">
          <Button onClick={this.handleToggle}>Click Here</Button>
        </div>

        {this.state.active === true && (
          <Card>
            <Image src={avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                <span className="date">{created_at}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name="user" />
                {followers} Friends
            </Card.Content>
          </Card>
          // <div>
          //   <img src= {avatar_url} />
          //   <h1>{name}</h1>
          //   <p>created_at: {created_at}</p>
          //   <p>id: {id}</p>
          //   </div>
        )}
      </React.Fragment>
    );
  }
}
export default App;
