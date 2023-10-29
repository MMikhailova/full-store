import { v4 as newId } from 'uuid';

const users = [
    {
        id: newId(),
        email: 'test11@gmail.com',
        password: '$2a$10$EpZjEZ0LBxpcFfl2c4vHkOeD14Wi03OdudSGl0h4TqruZUpZUj2Pi'
    },
    {
        id: newId(),
        email: 'test7@gmail.com',
        password: '$2a$10$tZ6vC/mjp1ycBZ3d4ECioO6DEqceROUhSmXL6e/p4exUQtIvtHNOS'
    },
    {
        id: newId(),
        email: 'test10@gmail.com',
        password: '$2a$10$Seq3cOTnCmb8Ra80hdchWeelcOCoz.wQaeKOjxm2NaG3hEhKP/2dq'
    }
];

class User {
    constructor(email, password) {
        this.id = newId();
        this.email = email;
        this.password = password;
    }

    // methods
    static getUserByEmail = (email) => {
        return users.find((user) => user.email === email);
    };

    addUser = () => {
        users.push(this);
    };
}

export default User;
