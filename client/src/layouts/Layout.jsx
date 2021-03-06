import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header className='header'>
      <h1 className='title'>Customization Shop</h1>
      {currentUser ? (
        <div className='user-div'>
          <p className='username'>{currentUser.username}</p>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <div className='login-div'>
            <Link className='login' to='/login'>Login/Register</Link>
          </div>
      )}
      {currentUser && (
        <div className='cars-section'>
          <Link className='car-link' to='/cars'>Cars Lobby</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}