// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchesdata() {
    try {
        const reposve = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await reposve.json();
        console.log(data);
    } catch (error) {
        console.error('Error',error);
        
    }
}
fetchesdata();