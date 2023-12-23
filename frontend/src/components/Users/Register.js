import React from 'react';
import './Register.css';
import User from './User/User';
import NewUser from './NewUser/NewUser';
import EditUser from './EditUser/EditUser';
import Modal from 'react-modal';
import axios from '../../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    ///
    this.state = {
      users: [],

      // edit note
      showEditModal: false,
      editUser: {}
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    const res = await axios.get('/users');
    const users = res.data;

    this.setState({ users });
  }

  async deleteUser(id) {
    const users = [...this.state.users]
                    .filter(user => user._id !== id);

    await axios.delete('/users/' + id);
    
    this.setState({ users });
  }

  async addUser(user) {
    const users = [...this.state.users];
    // add to backend
    try {
      const res = await axios.post('/users', user);
      const newUser = res.data;
      // add to frontend
      users.push(newUser);
      this.setState({ users });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async editUser(user) {
    // edit backend
    await axios.put('/users/' + user._id, user);

    // edit frontend
    const users = [...this.state.users];
    const index = users.findIndex(x => x._id === user._id);
    if (index >= 0) {
        users[index] = user;
      this.setState({ users });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  }

  editUserHandler(user) {
    this.toggleModal();
    this.setState({ edit: user });
  }

  render() {
    return (
    <div>
      <NotificationContainer />

      {/* <Modal
        isOpen={this.state.showEditModal}
        contentLabel="Rejestruj" >
          <RegisterC
            title={this.state.editNote.title}
            description={this.state.editNote.description}
            id={this.state.editNote._id}
            onEdit={note => this.editNote(note)} />
          <button 
            onClick={() => this.toggleModal()}>Anuluj</button>
      </Modal> */}

      {/* <p>Moje notatki:</p>

      <import NewUser from './NewUser/NewUser';

        onAdd={(note) => this.addNote(note)} />

        

      <Modal
        isOpen={this.state.showEditModal}
        contentLabel="Edytuj notatkę" >
          <EditNote
            title={this.state.editNote.title}
            description={this.state.editNote.description}
            id={this.state.editNote._id}
            onEdit={note => this.editNote(note)} />
          <button 
            onClick={() => this.toggleModal()}>Anuluj</button>
      </Modal> */}



    </div>
    );
  }
}

export default Notes;