import { useState, createContext } from 'react';
import Main from './components/main';
import Header from './components/Header';
import './App.css';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState('Adi');// we created state vars, wanna share it with all
  return (
    <>
    <UserContext.Provider value={{ user, setUser}}> 
      <Header />
      <Main />
    </UserContext.Provider>
    </>
  );
}

export default App;
