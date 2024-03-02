import axios from 'axios';
import { CarModel } from '../components/CardView/props';
import { CAR_API_URL } from '../constants/car';

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetData = async (id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_URL);
        //console.log('response: ', response.data.cars);
        const carData = response.data.cars.find((car) => car.id == id) || null;
        //console.log('carData: ', carData);
        return carData;
    } catch (error) {
        console.error('Error fetching data', error);
    }
}