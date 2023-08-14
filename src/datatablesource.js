export const userColumns = [
     { field: "id", headerName: "ID", width: 70 },
     {
       field: "user",
       headerName: "User",
       width: 230,
       renderCell: (params) => {
         return (
           <div className="cellWithImg">
             <img className="cellImg" src={params.row.img} alt="avatar" />
             {params.row.username}
           </div>
         );
       },
     },
     {
       field: "email",
       headerName: "Email",
       width: 230,
     },
   
     {
       field: "age",
       headerName: "Age",
       width: 100,
     },
     {
       field: "status",
       headerName: "Status",
       width: 160,
       renderCell: (params) => {
         return (
           <div className={`cellWithStatus ${params.row.status}`}>
             {params.row.status}
           </div>
         );
       },
     },
   ];
   
   //temporary data
   export const userRows = [
     {
       id: 1,
       username: "Sumit",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       status: "active",
       email: "sumit1@gmail.com",
       age: 22,
     },
     {
       id: 2,
       username: "Kosal",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "kosal21@gmail.com",
       status: "passive",
       age: 21,
     },
     {
       id: 3,
       username: "Ranjit",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "ranjit15@gmail.com",
       status: "pending",
       age: 27,
     },
     {
       id: 4,
       username: "shivam",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "shivam16@gmail.com",
       status: "active",
       age: 23,
     },
     {
       id: 5,
       username: "Nirmal",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "nirmal22@gmail.com",
       status: "passive",
       age: 25,
     },
     {
       id: 6,
       username: "Devendra",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "devendra13@gmail.com",
       status: "active",
       age: 22,
     },
     {
       id: 7,
       username: "Nikhil",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "nikhil29@gmail.com",
       status: "passive",
       age: 24,
     },
     {
       id: 8,
       username: "Ritik",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "ritik18@gmail.com",
       status: "active",
       age: 22,
     },
     {
       id: 9,
       username: "Kuldeep",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "kuldeep15@gmail.com",
       status: "pending",
       age: 22,
     },
     {
       id: 10,
       username: "Vivek",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "vivek24@gmail.com",
       status: "active",
       age: 20,
     },
   ];