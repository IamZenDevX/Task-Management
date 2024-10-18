# Task-Management
# **Introduction:**

This Task Management Project is designed to help users efficiently manage their tasks and stay organized. The system provides a streamlined interface where users can easily view, create, update, and delete tasks, making it a simple yet powerful tool for tracking progress and staying on top of daily activities.

## Key Features:

- **User Management**: Users can be created, updated, viewed, and deleted, allowing for complete control over user profiles and their associated data.
- **User Authentication**: Users must log in with valid credentials to access the task management system.
- **View Tasks**: Users can see a list of all their tasks in one place.
- **Create Tasks**: Users can add new tasks with details like title, description, and status.
- **Update Tasks**: Users can edit tasks to update the title, description, status,update_by,update_at
- **Delete Tasks**: Users can remove tasks they no longer need.
- **Task Status**: Each task can be marked as "Open," "In Progress," "Complete," or "Cancelled."

## **AVAILABLE API:**

| **Name** | **HTTP Method** | **Endpoint** | **Requirements** |
| --- | --- | --- | --- |
| **Register User** | POST | http://localhost:4000/user/registration | Request Body: email`: string, password: string` |
| **Login User** | POST | http://localhost:3000/user/login | Request Body: email`: string, password: string` |
| **List User by ID** | GET | http://localhost:3000/user/getuser/Id/:Id | Request Params: `id:string` |
| **Delete User by ID** | DELETE | http://localhost:3000/user/deleteuser/id/:id | Request Params: `id:string` |
| Update User by ID | PUT | http://localhost:3000/user/putuser/Id/:Id | Request Params: `id:string`                                      Request Body: email`: string, password: string` |
| Create a Task | POST | http://localhost:3000/task/createtask | Request Body: Title`: string, Description: string,`Status:string,Created_By:UserID,Update_By:UserID |
| Update Task | PUT | http://localhost:3000/task/updatetask/ID/:ID | Request Params:  `id:string`                                         Request Body: Title`:string, Description:string,`Status:string,Update_By:UserID |
| Delete Task | DELETE | http://localhost:3000/task/deletetask/id/:id | Request Params:  `id:string`   |
| Get Task By UserID | GET | http://localhost:3000/task/gettask/UserID/:UserID | Request Params:  userid`:string`   |

# **Tools Used:**


![! image png (httpsprod-files-secure s3 us-west-2 amazonaws com3f690236-03bd-47db-ac0f-28b089483950a8051494-5e7f-46b0-8b4f-4947637c4fcdimage png) (1900 x 1080 px)](https://github.com/user-attachments/assets/dc727c11-425d-46e2-8641-a29c6e4793bb)



### **Library:**

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoos
- nodemon
- validator

## 1. **Database Structure**

The platform will require a relational database to manage User And Tasks . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) **Users**

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| email | String |
| password | password |

### b) Task

| title | String |
| --- | --- |
| description | String |
| status | String |
| created_at | timestamp |
| update_at | timestamp |
| created_by | Ref. Object → Users |
| update_by | Ref. Object → Users |

# **🔗 Links**

[**Checkout the  Demo Video**](https://www.notion.so/NodeJS-Task-Management-c766d777f45f4ef3a850a8ea07e598ee?pvs=21) 

# **🐦 Follow Me:**
         
 <h3 align="left">Connect with me:</h3>
<p align="left">

<a href="https://linkedin.com/in/ashutosh2506" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ashutosh2506" height="50" width="50" /></a>
<a href="https://www.leetcode.com/ash250604" target="blank"><img align="center" src="https://www.google.com/imgres?q=twitter%20logo%20x&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fnew-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fnew-twitter-logo-x-2023-twitter-x-logo-official-vector-download_57617765.htm&docid=qXOFhqvskD8WJM&tbnid=c-WN6XUI5o5siM&vet=12ahUKEwi78pfD2JeJAxUWi2MGHf4gBiYQM3oECGYQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwi78pfD2JeJAxUWi2MGHf4gBiYQM3oECGYQAA" alt="ash250604" height="30" width="40" /></a>
<a href="https://auth.geeksforgeeks.org/user/ashutoshrajput_" target="blank"><img align="center" src="https://www.google.com/imgres?q=twitter%20logo%20x&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fnew-2023-twitter-logo-x-icon-design_1017-45418.jpg%3Fsize%3D338%26ext%3Djpg%26ga%3DGA1.1.2113030492.1729123200%26semt%3Dais_hybrid&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ftwitter-x-logo&docid=9DmNA1_EbeZKGM&tbnid=QaVS-hYafpd60M&vet=12ahUKEwi78pfD2JeJAxUWi2MGHf4gBiYQM3oECBsQAA..i&w=338&h=338&hcb=2&ved=2ahUKEwi78pfD2JeJAxUWi2MGHf4gBiYQM3oECBsQAA" alt="ashutoshrajput_" height="30" width="40" /></a>
</p>


          
           YouTube

I hope you like the project. Thanks for reading :)

        
