export interface Testimony {
    msg: string,
    author: string,
}

// export interface TopDesigner {
//     work_img: string,
//     profile_img: string,
//     name: string,
//     location: string,
//     rate: number,
//     stars: number,
//     brief: string,
// }

export async function getHeroImage(): Promise<string> {
    return "https://www.picsum.photos/1920/1080";
}


export async function getTestimonies(): Promise<Testimony[]> {
    return [
        { msg: "Build your dream properly", author: "John Doe" },
        { msg: "Build your dream beautifully", author: "Jack" }]
}

// export async function getTopDesigners(): Promise<TopDesigner[]> {
//     return [
//         { work_img: "https://www.picsum.photos/200/190", profile_img: "https://www.picsum.photos/100", name: "John Doe", location: "New York, USA", rate: 1000, brief: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", stars: 4.5 },
//         { work_img: "https://www.picsum.photos/200/190", profile_img: "https://www.picsum.photos/100", name: "Jack", location: "New York, USA", rate: 1000, brief: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", stars: 4.5 },
//         { work_img: "https://www.picsum.photos/200/190", profile_img: "https://www.picsum.photos/100", name: "John Doe", location: "New York, USA", rate: 1000, brief: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", stars: 4.5 },
//     ]
// }