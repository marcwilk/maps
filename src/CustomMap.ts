const USER_ICON: google.maps.Icon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
};

const COMPANY_ICON: google.maps.Icon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
};

// Instructions to every other class on how they can be an argument to addMarker
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    private infoWindow: google.maps.InfoWindow;
    private bounds: google.maps.LatLngBounds;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
        this.infoWindow = new google.maps.InfoWindow();
        this.bounds = new google.maps.LatLngBounds();

        this.googleMap.addListener('click', () => {
            this.infoWindow.close();
        });
    }

    addMarker(mappable: Mappable, icon: google.maps.Icon): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
            icon: icon
        });

        this.bounds.extend(marker.getPosition() as google.maps.LatLng);
        this.googleMap.fitBounds(this.bounds);

        marker.addListener('click', () => {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null);
            }, 700);
            this.infoWindow.setContent(mappable.markerContent());
            this.infoWindow.open(this.googleMap, marker);
        });
    }
}