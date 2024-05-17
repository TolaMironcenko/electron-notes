const notes_square = document.querySelector('.notessquare')
const new_note_btn = document.querySelector('#newnotebtn')
const save_note_btn = document.querySelector('#savenotebtn')
const delete_note_btn = document.querySelector('#deletenotebtn')

const rerender_notes = (activenoteid) => {
    if (all_notes.length === 0) {
        notes_square.innerHTML = '<p style="text-align: center; padding: 15px">No notes yet</p>'
        return
    }
    notes_square.innerHTML = ''
    for (const note of all_notes) {
        note.id === activenoteid ?
            notes_square.innerHTML += `<div class="note active" id="${note.id}"><p class="notetitle" id="${note.id}">${note.title}</p></div>`:
            notes_square.innerHTML += `<div class="note" id="${note.id}"><p class="notetitle" id="${note.id}">${note.title}</p></div>`
    }
}

const saveNote = () => {
    const index = all_notes.indexOf(all_notes.find(note => note.id === edit_note_square.id))
    var ptitle = document.querySelectorAll('.notetitle')
    for (const title of ptitle) {
        if (title.id === edit_note_square.id) {
            ptitle = title
        }
    }
    if (index !== -1) {
        all_notes[index].data = edit_note_square.innerHTML
        var firststr = edit_note_square.innerHTML.split('<div>')[0]
        if (firststr.length > 20) {
            all_notes[index].title = edit_note_square.innerHTML.split('<div>')[0].slice(0, 20) + '...'
            ptitle.innerHTML = edit_note_square.innerHTML.split('<div>')[0].slice(0, 20) + '...'
        }
        else {
            if (edit_note_square.innerHTML.length === 0) {
                all_notes[index].title = 'No title'
                ptitle.innerHTML = 'No title'
            } 
            else {
                all_notes[index].title = edit_note_square.innerHTML.split('<div>')[0].slice(0, 20)
                ptitle.innerHTML = edit_note_square.innerHTML.split('<div>')[0].slice(0, 20)
            }
        }
        write_in_localstorage('notes', JSON.stringify(all_notes))
    }
}

rerender_notes()

const clearActiveNotes = () => {
    var notes = document.querySelectorAll('.note')
    for (const note of notes) {
        note.classList.remove('active')
    }
}

const set_active_note = (e) => {
    clearActiveNotes()
    e.target.classList.add('active');
    saveNote()
    // rerender_notes()
    edit_note_square.id = e.target.id
    edit_note_square.innerHTML = all_notes.find(note=>note.id === e.target.id).data
}

const new_note = () => {
    saveNote()
    var new_note_data = {'title': 'No title', 'data': '', 'id': "id" + Math.random().toString(16).slice(2)}
    all_notes.unshift(new_note_data)
    rerender_notes(new_note_data.id)
    edit_note_square.id = new_note_data.id
    edit_note_square.innerHTML = new_note_data.data
}

const delete_note = () => {
    const delete_item_index = all_notes.indexOf(all_notes.find(note => note.id === edit_note_square.id))
    console.log(delete_item_index)
    if (delete_item_index !== -1) {
        all_notes.splice(delete_item_index, 1)
        console.log(all_notes)
        edit_note_square.id = null
        edit_note_square.innerHTML = ''
        if (all_notes.length !== 0) {
            rerender_notes(all_notes[0].id)
            edit_note_square.id = all_notes[0].id
            edit_note_square.innerHTML = all_notes[0].data
        } else {
            rerender_notes()
        }
        write_in_localstorage('notes', JSON.stringify(all_notes))
    }
}

new_note_btn.addEventListener('click', new_note)
save_note_btn.addEventListener('click', saveNote)
notes_square.addEventListener('click', (e) => {
    e.target.classList.contains('note') && set_active_note(e)
})
delete_note_btn.addEventListener('click', delete_note)



setInterval(() => {
    saveNote()
}, 500)
