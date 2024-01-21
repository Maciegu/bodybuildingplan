const PlanTracker = require('../../db/models/plantracker');

class PlanTrackerActions {

  async savePlanTracker(req, res) {
      let planTracker;
      const plan = req.body.plan;
      const uniqal_id = req.body.uniqal_id;
      const planName = req.body.planName;
      const data = req.body.data;
      try{
        planTracker = new PlanTracker({plan,uniqal_id, planName, data});
        await planTracker.save();
      } 
      catch(err){
        return res.status(422).json({ message: err.message });
      }
      res.status(201).json(planTracker);
}

  async getAllPlansTracker(req, res) {
    try {
      // Pobieramy wszystkie plany treningowe z bazy danych
      const plansTracker = await PlanTracker.find({});
      res.status(200).json(plansTracker);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getPlanTracker(req, res) {
    const id = req.params.id;
    try {
      const planTracker = await PlanTracker.findOne({uniqal_id: uniqal_id });
      if (!planTracker) {
        return res.status(404).json({ message: "Training not found." });
      }
      res.status(200).json(planTracker);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async updatePlanTracker(req, res) {
    const id = req.params.id;
    const plan = req.body.plan;
    const uniqal_id = req.body.uniqal_id;
    const planName = req.body.planName;
    const data = req.body.data;
    try {
      const planTracker = await PlanTracker.findOne({uniqal_id: uniqal_id });
      if (!planTracker) {
        return res.status(404).json({ message: "Training not found." });
      }
      planTracker.plan = plan;
      planTracker.uniqal_id = uniqal_id;
      planTracker.planName = planName;
      planTracker.data = data;
      
      await planTracker.save();

      res.status(201).json(planTracker);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async deletePlanTracker(req, res) {
    const id = req.params.id;
    try {
      await PlanTracker.deleteOne({ _id: id });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new PlanTrackerActions();
