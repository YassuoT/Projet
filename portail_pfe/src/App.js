
import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import SignUp from './SignUp';

function App() {
  const [currentForm, setcurrentForm]= useState('AuthPage');
  const toggleForm = (forName) =>{
    setcurrentForm(forName);
    
  }
  return (
    <div className="App">
      {
        currentForm === 'AuthPage' ? <AuthPage onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}

export default App;
