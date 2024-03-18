import database from "../datasources/database.js";
import { IUser } from "../types/IUser";

const users = database.usersDB;

// Create a new user
export const createUser = (user: IUser): IUser => {
    users.push(user);
    return user;
};

// Read all users
export const getUsers = (): IUser[] => {
    return users;
};

// Read a single user by ID
export const getUserById = (id: string): IUser | undefined => {
    return users.find(user => user.id === id);
};

// Update a user by ID
export const updateUserById = (id: string, updatedUser: IUser): IUser | undefined => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        return users[userIndex];
    }
    return undefined;
};

// Delete a user by ID
export const deleteUserById = (id: string): IUser | undefined => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        const deletedUser = users[userIndex];
        users.splice(userIndex, 1);
        return deletedUser;
    }
    return undefined;
};

