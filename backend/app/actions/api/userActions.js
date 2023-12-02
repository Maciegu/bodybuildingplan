const User = require('../../db/models/Register');

class UserActions {

  async saveUser(req, res) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;
    let user;

    try{
      user = new User({ first_name, last_name, login, email, password});
      await user.save();
    } 
    catch(err){
      return res.status(422).json({ message: err.message });
    }
    res.status(201).json(user);
  }


  async getAllUsers(req, res) {
    const doc = await User.find({});
    res.status(200).json(doc);
  }


  async getUser(req, res) {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  }
  
  // aktualizowanie notatki
  async updateUser(req, res) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = req.body.password;

    const user = await User.findOne({ _id: id });
    user.first_name = first_name;
    user.last_name = last_name;
    user.password = password;

    await user.save();

    res.status(201).json(user);
  }

  // usuwanie notatki
  async deleteUser(req, res) {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.sendStatus(204);
  }

}


module.exports = new UserActions();