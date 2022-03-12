import axios from "axios";

export interface BookingDetails {
    origin: string,
    phone: string,
    name: string,
    email: string,
    distance1: number,
    distance2: number,
    distance3: number,
    total_distance: number,
    start_address: string,
    start_lan: number,
    start_lat: number,
    end_address: string,
    end_lan: number,
    end_lat: number,
    rate_km: number,
    rate_km_office: number,
    address: string,
    sstate: string,
    zip: number,
    total: number,
    total_distance_office: number,
    total_office: number,
    total_client: number,
}
export async function getRate(): Promise<number> {
    try {
        const response = await axios.get("https://transport-57122.uc.r.appspot.com/bookings/rates");
        if (response.status === 200) {
            console.log("rate api-> ", response);
            let { rate } = response.data; // TODO
            return rate;
        }
        // return { rate_km: 45, rate_km_office: 40 };
        return -1;

    } catch (error) {
        console.log(error);
        return -1;
        // return { rate_km: 50, rate_km_office: 40 };
    }
}
export async function addBooking(details: any) {
    const data = details;
    data["key"] = "9bcc3acfd1f218a23a41b37421e4cf841af165a8db45484d7dbfa368e5a0763a"; //TODO #Temporary
    console.log("request---> ", data);
    const response = await axios.post("https://transport-57122.uc.r.appspot.com/bookings/add", data);
    console.log(response);
    return response;
    // const id: string = "T0xjrTRNoRa3569Y6AtL";
    // const response = await axios.get(`https://transport-57122.uc.r.appspot.com/user/booking?id=${id}`)
    // return response.data;
    // return {
    //     status: "OK"
    // }
}
