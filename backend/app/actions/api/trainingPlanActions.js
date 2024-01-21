const TrainingPlan = require('../../db/models/trainplan');

class TrainingPlanActions {

  async saveTrainingPlan(req, res) {
      let trainingPlan;
      const plan = req.body.plan;
      const uniqal_id = req.body.uniqal_id;
      const planName = req.body.planName;

      try{
        trainingPlan = new TrainingPlan({ plan, uniqal_id, planName});
        await trainingPlan.save();
      } 
      catch(err){
        return res.status(422).json({ message: err.message });
      }
      res.status(201).json(trainingPlan);
}

  async getAllTrainingPlans(req, res) {
    try {
      // Pobieramy wszystkie plany treningowe z bazy danych
      const trainingPlans = await TrainingPlan.find({});
      res.status(200).json(trainingPlans);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getTrainingPlan(req, res) {
    const id = req.params.id;
    try {
      const trainingPlan = await TrainingPlan.findOne({ _id: id });
      if (!trainingPlan) {
        return res.status(404).json({ message: "TrainingPlan not found." });
      }
      res.status(200).json(trainingPlan);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async updateTrainingPlan(req, res) {
    const id = req.params.id;
    const uniqal_id = req.body.uniqal_id;
    const plan = req.body.plan;
    const planName = req.body.planName;

    try {
      const trainingPlan = await TrainingPlan.findOne({uniqal_id: uniqal_id });
      if (!trainingPlan) {
        return res.status(404).json({ message: "TrainingPlan not found." });
      }

      trainingPlan.uniqal_id = uniqal_id;
      trainingPlan.plan = plan;
      trainingPlan.planName = planName;
      
      await trainingPlan.save();

      res.status(201).json(trainingPlan);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async deleteTrainingPlan(req, res) {
    const id = req.params.id;
    try {
      await TrainingPlan.deleteOne({ _id: id });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new TrainingPlanActions();
