class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'employee';
    };

    getId() {
        return this.id;
    }
};

// to be exported 
module.exports = Employee; 