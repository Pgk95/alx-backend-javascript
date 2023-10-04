interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstIntial = firstName.charAt(0).toUpperCase();
    const fullName = `${firstIntial}. ${lastName}`;
    return fullName;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName?: string;
    lastName?: string;

    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName ?? "";
        this.lastName = lastName ?? "";
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}