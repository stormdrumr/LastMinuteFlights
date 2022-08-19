export interface Travel {
    flightID: number;
    flightNum: string;
    destination: string;
    departureAirport: string;
    departureTime: string;
    departureDate: string;
    arrivalAirport: string;
    arrivalTime: string;
    arrivalDate: string;
    maxCapacity: number;
}

export interface TravelDto{
    flightNum: string;
    destination: string;
    departureAirport: string;
    departureTime: string;
    departureDate: string;
    arrivalAirport: string;
    arrivalTime: string;
    arrivalDate: string;
    maxCapacity: number;
}