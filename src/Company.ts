import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `
        <div class="company-marker-content">
            <h4>Company Name: ${this.companyName}</h4>
            <p>Catch Phrase: ${this.catchPhrase}</p>
        </div>
        `;
    }
}