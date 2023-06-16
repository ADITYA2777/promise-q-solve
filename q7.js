// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function combinedata () {
    try {
        const todoproimse = fetch("https://jsonplaceholder.typicode.com/todos/1");
        const postproimse = fetch("https://jsonplaceholder.typicode.com/posts/1");
    //    const [todorespone,postrespone]= await Promise.all([todoproimse,postproimse]);
        const todorespone = await todoproimse;
        const postrespone = await postproimse;

        const tododata = await todorespone.json();
        const postdata = await postrespone.json();

        const combinedata ={
            todo:tododata,
            post:postdata
        };
        console.log(combinedata);

    } catch (error) {
        console.error("error",error);
    }
}
combinedata();