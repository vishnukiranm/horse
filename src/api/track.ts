import axios from "axios";

import { toast } from "react-toastify";

export interface TrackingDetails {
    id: string,
    address: string,
    startpoint: {
        _latitude: number,
        _longitude: number,
    },
    endpoint: {
        _latitude: number,
        _longitude: number,
    },
    phone: string,
    total: number,
    rate: number,
    geo: string,
    email: string,
    time: string,
    name: string,
}
export async function getTrackingDetails(id: string): Promise<TrackingDetails> {
    // const id: string = "T0xjrTRNoRa3569Y6AtL";
    try {
        const response = await axios.get(`https://transport-57122.uc.r.appspot.com/user/booking?id=${id}`)
        return response.data;
    } catch (error) {
        console.log("Error happened while tracking --> ", error);
        return {
            id: "T0xjrTRNoRa3569Y6AtL",
            address: "Demo Address",
            startpoint: {
                _latitude: 12.21,
                _longitude: 12.0212
            },
            endpoint: {
                _latitude: 12.333,
                _longitude: 54.21
            },
            phone: "12345678",
            total: 123,
            rate: 111,
            geo: "s60s30d1h6",
            email: "Inder@gmail.com",
            time: "Tue, 20 Jul 2021 03:40:45 GMT",
            name: "An Error Happened"
        }
    }
}
