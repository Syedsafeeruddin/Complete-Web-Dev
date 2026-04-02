export interface User {
    id: string;
    email: string;
    password: string;
    createdAt: string;
}

export interface CurrentUser {
    id: string;
    email: string;
    loginTime: string;
}

export interface ValidationErrors {
    [key: string]: string;
}
