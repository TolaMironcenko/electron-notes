var all_notes = []
// function for write data in localstorage
const write_in_localstorage = (name, data) => {
    localStorage.setItem(name, data);
    window.api.save_notes_in_file(data)
}
// function for get data from localstorage
const get_from_localstorage = (name) => {
    window.api.get_all_notes().then(notes => {
        localStorage.setItem('notes', JSON.stringify(JSON.parse(notes).notes))
    })
    return localStorage.getItem(name)
}

all_notes = get_from_localstorage('notes') !== null ? JSON.parse(get_from_localstorage('notes')) : []

// let response = fetch("http://127.0.0.1:43243", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: '[{"title":"No title","data":"","id":"id5d1a6927e1a83"}]'
// }).then(response=>console.log(response))

// let result = response.json()
// console.log(response)