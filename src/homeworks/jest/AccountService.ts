export type userType = 'Standard' | 'Premium' | 'Gold' | 'Free';

class UserType {
    userType : userType;
    discount : number;
}

export class User {
    id : number;
    login : string;
    type : UserType;
}

const userTypes : UserType[] = [  
    { userType: 'Free', discount: 0 } , 
    { userType: 'Standard', discount: 2 },
    { userType: 'Gold', discount: 5 },
    { userType: 'Premium', discount: 15 }
]

const users : User[] = [
    { id: 1, login: 'user1', type: { userType : 'Free', discount: 0 }},
    { id: 2, login: 'user2', type: { userType: 'Standard', discount: 2 }},
    { id: 3, login: 'user3', type: { userType: 'Gold', discount: 5 }},
    { id: 4, login: 'user4', type: { userType: 'Premium', discount: 15 }}
]

export class AccountService {

    getUserTypes() : UserType[] {
        return userTypes;
    }

    getUser(id : number) : User {
        return users.filter((user) => user.id == id)?.[0];
    }
}