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

## **Available API:**

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

![Github Images](https://github.com/user-attachments/assets/6682065d-26dd-4d3f-81e1-5b4952a0715b)



<h2 align="left">Testing Tools Used:</h2>

![! image png (httpsprod-files-secure s3 us-west-2 amazonaws com3f690236-03bd-47db-ac0f-28b089483950a8051494-5e7f-46b0-8b4f-4947637c4fcdimage png) (1900 x 1080 px)](https://github.com/user-attachments/assets/693fb3f5-1b53-4bc8-a863-416f7342229c)


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

<h2 align="left">🔗 Links</h2>

[**Checkout the  Demo Video**](https://www.notion.so/NodeJS-Task-Management-c766d777f45f4ef3a850a8ea07e598ee?pvs=21) 

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>



<h2 align="left">🐦 Connect with me:</h2>
         
 
<p align="left">

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>
</p>


I hope you like the project. Thanks for reading :)

        
