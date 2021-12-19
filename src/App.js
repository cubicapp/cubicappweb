import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <header className="App-header">
        <p>
          !Welcome to Cubicappweb!
        </p>
        <>
        <LoginButton />
        <LogoutButton />
        <Profile />
        </>
      </header>
    </div>
  );
}

export default App;
