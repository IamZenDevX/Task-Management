# Task-Management

<h2 align="left">Introduction:</h2>

This Task Management Project is aimed to help users to stay neat and properly manage their tasks. Simple yet efficient for monitoring progress and maintaining on top of daily operations, the system provides a simple interface where users may quickly observe, add, alter, and remove tasks.

<h2 align="left">Key Features:</h2>

- **User Management**: Users can be created, altered, seen, and deleted, therefore granting complete control over user profiles and the associated information.
- **User Authentication:**  Task management system users have to log in using current credentials.
- **View Tasks**: View Tasks: Users could view all of their assignments from one place.
- **Create Tasks**: Users can create new tasks containing specifics on title, description, and status.
- **Update Tasks**: Users may adjust jobs to affect the title, description, status, update_by, update_at.
- **Delete Tasks**: Jobs users no longer need can be deleted.
- **Task Status**: Every assignment can be categorized as "Open," "In Progress," "Complete," "Cancelled."
<h2 align="left">AVAILABLE API:</h2>

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

<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)



<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)


<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

##  **Database Structure**

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

<h2 align="left">🔗 Video Links</h2>

[**Checkout the  Development Video Using ZenDevX**](https://www.notion.so/NodeJS-Task-Management-c766d777f45f4ef3a850a8ea07e598ee?pvs=21) 

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>



<h2 align="left">🐦 Connect with me:</h2>
         
 
<p align="left">

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>
</p>


I hope you like the project. Thanks for reading :)

        
