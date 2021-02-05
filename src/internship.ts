import faker from "faker";

export class Internship {

  internshipName: string;
  locations : {
    latitude: number;
    longtitude: number;
};

  constructor() {
    this.internshipName = faker.company.companyName();

    this.locations = { 
      latitude: parseFloat(faker.address.latitude(49.283080, 49.283080)),
      longtitude: parseFloat(faker.address.longitude(-123.116226, -123.116226)) 
    };
  }
}