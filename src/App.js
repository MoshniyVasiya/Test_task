import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import News from './News';
import Profile from './Profile';
import { authentication, AuthButton } from './Login';

export default class App extends React.Component {  
  render(){ 
    return( 
      <Router>
        <div className="test">
          <Nav/>
          <div className="wrapper">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/news" component={News} />
          <PrivateRoute path="/profile" component={Profile} />
          </Switch>
          </div>  
          <AuthButton />
        </div>
      </Router>
    )
  }
};


const PrivateRoute = ({ component: Component, ...rest}) => (  
  <Route {...rest} render = {(props) => ( 
    authentication.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{ 
          pathname: "/login",
          state: { from: props.location }
        }} />
  )} />
)

const Home = () => (  
  <div>
    <h1 style={{textAlign:"center"}}>Главная</h1>
    <p>Getting the footer to stick to the bottom of pages with sparse content is something just about every Web developer has tried to tackle at some point in his or her career. And, for the most part, it’s a solved problem. Yet all the existing solutions have one significant shortcoming — they don’t work if the height of your footer is unknown.</p>

<p>Flexbox is a perfect fit for this type of problem. While mostly known for laying out content in the horizontal direction, Flexbox actually works just as well for vertical layout problems. All you have to do is wrap the vertical sections in a flex container and choose which ones you want to expand. They’ll automatically take up all the available space in their container.</p>

<p>In the example below, the container is set to the height of the window, and the content area is told to expand as needed. (Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)

</p>
<p>Getting the footer to stick to the bottom of pages with sparse content is something just about every Web developer has tried to tackle at some point in his or her career. And, for the most part, it’s a solved problem. Yet all the existing solutions have one significant shortcoming — they don’t work if the height of your footer is unknown.</p>

<p>Flexbox is a perfect fit for this type of problem. While mostly known for laying out content in the horizontal direction, Flexbox actually works just as well for vertical layout problems. All you have to do is wrap the vertical sections in a flex container and choose which ones you want to expand. They’ll automatically take up all the available space in their container.</p>

<p>In the example below, the container is set to the height of the window, and the content area is told to expand as needed. (Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)

</p>
<p>Getting the footer to stick to the bottom of pages with sparse content is something just about every Web developer has tried to tackle at some point in his or her career. And, for the most part, it’s a solved problem. Yet all the existing solutions have one significant shortcoming — they don’t work if the height of your footer is unknown.</p>

<p>Flexbox is a perfect fit for this type of problem. While mostly known for laying out content in the horizontal direction, Flexbox actually works just as well for vertical layout problems. All you have to do is wrap the vertical sections in a flex container and choose which ones you want to expand. They’ll automatically take up all the available space in their container.</p>

<p>In the example below, the container is set to the height of the window, and the content area is told to expand as needed. (Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)

</p>
  </div>
);