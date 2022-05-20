
   const data= await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(Data =>Data)

   export default data;