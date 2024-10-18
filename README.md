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

![image.png]([https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/dd44e09e-4063-470c-90f1-e0fd2bdc92f0/image.png](https://ih1.redbubble.net/image.367014180.4385/st,small,507x507-pad,600x600,f8f8f8.u3.jpg))

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/dd5e894d-9f55-4046-a73e-76283e65b0c9/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/7e7db52e-4ebf-471c-95ad-ec6b9ff7a17c/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/e8620f80-bef8-4369-875e-3abe5abeff9c/image.png)

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

           Twitter

           LinkedIn

           YouTube

I hope you like the project. Thanks for reading :)

           Twitter

           LinkedIn

           YouTube

I hope you like the project. Thanks for reading :)
