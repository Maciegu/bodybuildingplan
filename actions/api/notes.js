const Note = require('../../db/models/note');

module.exports = {
    saveNote(req, res) {

        const newNote = new Note({
            title: 'zrob zakupy',
            body: 'mleko jajka woda'
        });
        
        newNote.save().then(()=>{
            console.log('notatka zapisana');
        })

        res.send('strona glowna dziala!');
    }


}