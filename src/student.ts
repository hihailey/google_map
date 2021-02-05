import faker from "faker";
import { parse } from "path";

export class Student {

    firstName: string;
    lastName: string;
    locations : {
        latitude: number;
        longtitude: number;
    };

constructor(){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.locations = {
        latitude: parseFloat(faker.address.latitude(49.277137,49.277137)),
        longtitude: parseFloat(faker.address.longitude(-123.122701,-123.122701))
    }
}

}