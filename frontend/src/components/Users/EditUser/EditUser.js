import React, { useState } from 'react';

export default function EditUser(props) {

  const [name, setName] = useState(props.name);
  const [surname, setSurName] = useState(props.surname);
  const [password, setPassword] = useState(props.password);

  const changeNameHandler = event => {
    const value = event.target.value;
    setName(value);
  }  
  const changeSurnameHandler = event => {
    const value = event.target.value;
    setSurname(value);
  }
  const changePasswordHandler = event => {
    const value = event.target.value;
    setPassword(value);
  }
  const editUser = () => {
    const User = {
      name: name,
      surname: surname,
      password: password,
      _id: props.id
    };
    props.onEdit(User);
  }
  
  return (
    <div className="User">
      {/* <label>Tytuł:</label>
      <input type="text" 
        value={Name} 
        onChange={changeNameHandler} />

      <label>Opis:</label>
      <input type="text" 
        value={Surname}
        onChange={changeSurnameHandler} />

      <button onClick={() => editUser()}>Zapisz</button> */}
    </div>
  );
}