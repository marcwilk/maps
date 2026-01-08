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
            <div class="info-window company">
                <div class="info-title">Company</div>
                <div class="info-body">
                    <strong>${this.companyName}</strong>
                    <div class="info-subtext">${this.catchPhrase}</div>
                </div>
            </div>
        `;
    }
}