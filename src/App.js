import logo from './logo.svg';
import './App.css';
import Login from './screens/Login';
import { writeStorage, useLocalStorage } from '@rehooks/local-storage';
import { SV_REGISTER } from './helpers/uri';
import { useEffect } from 'react';
import api from './helpers/api';

function App() {
  
  useEffect(() => {
    let unsubsribed = false;
      let payload = {
        name: 'cobajatest',
        email: 'mursyidanluthfan@gmail.com',
        password: 'cobajatest',
      };
      api
        .post(SV_REGISTER, payload)
        .then((response) => {
          if (!unsubsribed) {
            writeStorage('token', response.data.token);
          }
        })
        .catch((err) => {
          return console.log('error', err);
        });    
    return () => {
      unsubsribed = true;
    };
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
