import {urls} from "@/app/constant/urls";

 export async function fetchData(type) {
    const response = await fetch(`${urls.BaseUrl}${type}`);
    const data = await response.json();
    return data;
}

export async function fetchId(type, id) {
    const response = await fetch(`${urls.BaseUrl}${type}/${id}`);
    const data = await response.json();
    return data;
}