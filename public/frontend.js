

function load() {
    fetch('/load_list')
        .then(response => response.json())
        .then(data => {
            const testList = document.getElementById('test-list');
            data.list.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                testList.appendChild(li);
                console.log(data)
            });
        })
        .catch(error => {
            console.error('Error fetching test list:', error);
        });
}