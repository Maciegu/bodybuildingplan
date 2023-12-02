const PersonalData = require('../../db/models/PersonalData');

class PersonalDataActions {

  async savePersonalData(req, res) {
    const gender = req.body.gender;
    const weight = req.body.weight;
    const height = req.body.height;
    const age = req.body.age;
    const goal = req.body.goal;
    const level = req.body.level;
    const days = req.body.days;
    const time = req.body.time;
    const activity = req.body.activity;
    const priority = req.body.priority;
    let personalData;

    try{
        personalData = new PersonalData({ gender, weight, height, age, goal, level, days, time, activity, priority });
      await personalData.save();
    } 
    catch(err){
      return res.status(422).json({ message: err.message });
    }
    res.status(201).json(personalData);
  }


  async getAllPersonalDatas(req, res) {
    const doc = await PersonalData.find({});
    res.status(200).json(doc);
  }


  async getPersonalData(req, res) {
    const id = req.params.id;
    const personalData = await PersonalData.findOne({ _id: id });
    res.status(200).json(personalData);
  }
  
  // aktualizowanie notatki
  async updatePersonalData(req, res) {
    const gender = req.body.gender;
    const weight = req.body.weight;
    const height = req.body.height;
    const age = req.body.age;
    const goal = req.body.goal;
    const level = req.body.level;
    const days = req.body.days;
    const time = req.body.time;
    const activity = req.body.activity;
    const priority = req.body.priority;

    const personalData = await PersonalData.findOne({ _id: id });
    personalData.gender = gender;
    personalData.weight = weight;
    personalData.height = height;
    personalData.age = age;
    personalData.goal = goal;
    personalData.level = level;
    personalData.days = days;
    personalData.time = time;
    personalData.activity = activity;
    personalData.priority = priority;

    await personalData.save();

    res.status(201).json(personalData);
  }

  // usuwanie notatki
  async deletePersonalData(req, res) {
    const id = req.params.id;
    await PersonalData.deleteOne({ _id: id });
    res.sendStatus(204);
  }

}


module.exports = new PersonalDataActions();