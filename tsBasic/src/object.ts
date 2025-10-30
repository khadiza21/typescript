// reference types --> Object 
const user: {
    readonly location: string;
    company: 'Programming Hero'; // type --> literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
} = {
    location: "Mohakhali, Dhaka",
    firstName: 'Abdul',
    company: "Programming Hero",
    lastName: 'Bhuiyan'
}

