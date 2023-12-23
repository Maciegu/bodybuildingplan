const Note = require('../../db/models/note');

class NoteActions {

  async saveNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;

    let note;

    try {
      note = new Note({ title, description });
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note);
  }

  // pobieranie notatek
  async getAllNotes(req, res) {
    const doc = await Note.find({});
    res.status(200).json(doc);
  }

  // pobieranie notatki
  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    res.status(200).json(note);
  }
  
  // aktualizowanie notatki
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.description = description;
    await note.save();

    res.status(201).json(note);
  }

  // usuwanie notatki
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });
    res.sendStatus(204);
  }

}


module.exports = new NoteActions();