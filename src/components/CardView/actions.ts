import { fetchGetData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (id:number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetData(id);
    try {
        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.error('Error fetching data in API', error);
        setCarData(null);
    }
};

export const handlePreviousItem = async ( carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>> ) => {
    console.log('handlePreviousItem');
    try {
        if (carData && carData?.id>0) {
            const previousId = carData.id - 1;
            const response = await fetchGetData(previousId);
            if (response) {
                setCarData(response);
            }
        }
    }catch (error) {
        console.error('Error fetching data in API', error);
        setCarData(null);
    }
};

export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>> ) => {
    console.log('handleNextItem');
    try {
        if (carData && carData?.id<=10) {
            const nextId = carData.id + 1;
            const response = await fetchGetData(nextId);
            if (response) {
                setCarData(response);
            }
        }
    }catch (error) {
        console.error('Error fetching data in API', error);
        setCarData(null);
    }

};
