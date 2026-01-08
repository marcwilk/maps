/// <reference types="@types/google.maps" />
import './styles.css';

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user, {
    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
});

customMap.addMarker(company, {
    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
});