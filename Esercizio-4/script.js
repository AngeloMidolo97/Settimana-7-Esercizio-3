axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
    console.log(response);
    console.table(response.data.users);
}).catch(function(error) {
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users/4').then(function(response){
    console.log(response);
    console.table(response.data.users);
}).catch(function(error) {
    console.log(error);
});

axios.post('https://jsonplaceholder.typicode.com/users/', {name: 'Angelo Midolo', email: 'angelo.midolo@gmail.com'}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.put('https://jsonplaceholder.typicode.com/users/1', {name: 'Angelo Midolo', email: 'angelo.midolo@gmail.com'}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.delete('https://jsonplaceholder.typicode.com/users/4').then(function(response){
    console.log(response);
    console.table(response.data.users);
}).catch(function(error) {
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
    console.log(response);
    console.table(response.data.users);
}).catch(function(error) {
    console.log(error);
});