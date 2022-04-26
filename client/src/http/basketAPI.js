import {$authHost, $host} from "./index";

export const addToBasket = async (basketId, deviceId) => {
    const {data} = await $authHost.post('api/basket', {params: {
        basketId, deviceId
    }})
    console.log(data)
    return data
}

export const fetchBasketDevices = async (id) => {
    const {data} = await $host.get('api/basket' + id)
    console.log(data)
    return data
}