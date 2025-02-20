import React from 'react'

const Register = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  console.log(name)

  const submitHandler = () => {

  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Register</h5>

        <label>Name: </label>
        <input type="text" value={name} onChange={event => setName(event.target.value)}/>
        <label>Email: </label>
        <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
        <label>Username: </label>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>
        <label>Password: </label>
        <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
      </form>
    </div>
  )
}

export default Register