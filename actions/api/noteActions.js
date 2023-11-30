const Note = require('../../db/models/note');

class NoteActions{

    saveNote(req, res) {
        const newNote = new Note({
            title: 'zrob zakupy',
            body: 'mleko jajka woda'
        });
        newNote.save().then(()=>{
            console.log('notatka zapisana');
        })

        const title = req.body.title;
        const description = req.body.description;
        res.send('Notatka stworzona. tytul: ' + title + ' tresc: ' + description);
    }



    getAllNotes(req, res) {
        res.send('Wszystkie notatki:');
    }


    getNote(req, res) {
        res.send('Notatka o id:');
    }


    updateNote(req, res) {
        const id = req.params.id;
        res.send('Notatka zaktualizowana' + id);
    }


    deleteNote(req, res) {
        const id = req.params.id;
        res.send('Notatka usunieta o id: ' + id );
    }

}


    module.exports = new NoteActions();