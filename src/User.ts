import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `
            <div class="info-window user">
                <div class="info-title">User</div>
                <div class="info-body">
                    <strong>${this.name}</strong>
                </div>
            </div>
        `;
    }
}