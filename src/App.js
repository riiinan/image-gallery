import React, { Component } from "react";
import ContentContext from "./context/ContentContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Images from "./components/Images"
import Posts from './components/Posts';
import SelectedImage from './components/SelectedImage';
import SelectedPost from './components/SelectedPost';
import {
  Navbar,
  Nav
} from 'react-bootstrap'

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  render() {
    return (
      <ContentContext>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Photos</Nav.Link>
            <Nav.Link href="#posts">Posts</Nav.Link>
          </Nav>
        </Navbar>

        <HashRouter>
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
              />

              <Route
                path="/home"
                render={() => <Images />}
              />
              <Route path="/image/:id" render={(props) => <SelectedImage {...props} />} />
              <Route path="/post/:id" render={(props) => <SelectedPost {...props} />} />
              <Route path="/posts" render={() => <Posts />} />
            </Switch>
          </div>
        </HashRouter>
      </ContentContext>
    );
  }
}

export default App;