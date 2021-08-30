import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header className='header'>
      <h1 className='title'>Customization Shop</h1>
      <div className='beginning-page'>
        <img></img>
      </div>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/cars'>cars</Link>
          <Link to='/upgradess'>upgrades</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}