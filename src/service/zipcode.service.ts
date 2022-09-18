import env from "../lib/env";
import httpClient from "../lib/http-client";

export type IZipCodeInfo = {
    postCode: string;
    countryCode: string;
    countryAbbreviation: string;
    places: {
        placeName: string,
        longitude: number,
        latitude: number,
        state: string,
        stateAbbreviation: string
    };
}

export default class ZipCodeService {

    private readonly serviceUrl = env.ZIPPOPOTAM_API_URL;

    getZipCodeInfo(countryCode: string, zipCode: number) {
        console.log(this.serviceUrl);
        return httpClient.get(
            `${this.serviceUrl}/${countryCode}/${zipCode}`
        );
    }
}