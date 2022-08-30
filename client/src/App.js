import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { UserContext } from './components/UserProvider';
// import BackTopX from './components/BackTopX';
// import Page from './components/Chart';
// import MenuX from './components/Menu';
import SignIn from './components/SignIn';
import Nav from './components/Nav';
import Notification from './components/Notification';
import Profile from './components/Profile';


function App() {
  const { user, changeUser } = useContext(UserContext)
  const newUser = { name: 'hi', age: 18 }
  return (<div>
    <div className='App'>
      {/* <SignIn /> */}

      <Nav />
      <Profile />
      {/* <Link to='/cart'>Cart</Link>
    <Link to='/news'>News</Link>
    Hello ${user.name}
    <button onClick={() => changeUser(newUser)}>UpdateUser</button> */}
    </div>
    <Outlet />
  </div>
  );
}

export default App;
