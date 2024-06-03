document.addEventListener('DOMContentLoaded', load())


fetch('/load_list', {
    method: 'POST' ,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
    
})