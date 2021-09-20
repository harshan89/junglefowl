import React from 'react';
import Button from './components/Button/Button'
import LoginForm from './components/Login/LoginForm'
import { Props } from './components/Login/types';

function App() {

  const onUsernameChange = (username: string) => {

  }

  const onPasswordChange = (password: string) => {

  }

  const onRememberChange = (value: boolean) => {

  }

  const onSubmit = (username: string, password: string) => {
    console.log('username ', username);
    console.log('password ', password);
  }

  const props: Props = {
    shouldRemember: true,
    onUsernameChange,
    onPasswordChange,
    onRememberChange,
    onSubmit
  }

  return (
    <div className="App">
      <LoginForm {...props} />
    </div>
  );
}

export default App;
