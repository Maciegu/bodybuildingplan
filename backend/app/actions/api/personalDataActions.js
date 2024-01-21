const PersonalData = require('../../db/models/personaldata');

class PersonalDataActions {

  async savePersonalData(req, res) {
    const weight = req.body.weight;
    const weightGoal = req.body.weightGoal;
    const height = req.body.height;
    const age = req.body.age;
    const gender = req.body.gender;
    const objective = req.body.objective;
    const level = req.body.level;
    const days = req.body.days;
    const time = req.body.time;
    const activity = req.body.activity;
    const priority = req.body.priority;
    const uniqal_id = req.body.uniqal_id;
    let personalData;

    try{
      personalData = new PersonalData({ weight,weightGoal, height, age,gender, objective, level, days, time, activity, priority, uniqal_id});
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
    const id = req.params.id; // Add this line
    const weight = req.body.weight;
    const weightGoal = req.body.weightGoal;
    const height = req.body.height;
    const age = req.body.age;
    const gender = req.body.gender;
    const objective = req.body.objective;
    const level = req.body.level;
    const days = req.body.days;
    const time = req.body.time;
    const activity = req.body.activity;
    const priority = req.body.priority;
    const uniqal_id = req.body.uniqal_id;
    try {
      const personalData = await PersonalData.findOne({ uniqal_id: uniqal_id });
      if (!personalData) {
        return res.status(404).json({ message: "personalData not found." });
      }
  
      personalData.weight = weight;
      personalData.weightGoal = weightGoal;
      personalData.height = height;
      personalData.age = age;
      personalData.gender = gender;
      personalData.objective = objective;
      personalData.level = level;
      personalData.days = days;
      personalData.time = time;
      personalData.activity = activity;
      personalData.priority = priority;
      personalData.uniqal_id = uniqal_id;
  
      await personalData.save();
      res.status(201).json(personalData);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  // usuwanie notatki
  async deletePersonalData(req, res) {
    const id = req.params.id;
    await PersonalData.deleteOne({ _id: id });
    res.sendStatus(204);
  }

}


module.exports = new PersonalDataActions();