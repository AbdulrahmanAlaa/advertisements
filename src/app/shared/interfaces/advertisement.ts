export interface Advertisement {
    advertisementAssets:Array<any>;
    additionalId: number;
    advertisementPrice: Price;
    hasFurniture: boolean;
    purpose: number;
    realestateSummary: RealState;
    title: string;
    userWishes:  boolean ;
    _id: { $id: string }
}

export interface Price {
    baseRent: number;
    sellPrice: number;

}
export interface RealState {
    address: Address;
    numberOfRooms: number;
    space: number;
}

export interface Address {
    city: string;
    fullAddress: string;
    location: { coordinates: number[], type: number };
    number: string;
    postalCode: string;
    street: string;
}