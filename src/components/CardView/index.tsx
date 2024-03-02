import React, {useEffect, useState} from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from './styles';
import Logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSESTS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

const CarView = () => {
    const [carData, setCarData] = useState<CarModel | null>(null);
    useEffect(() => {
        (async () => {
            await loadCarData(2,setCarData);
            console.log('carData: ', carData);
        })();
    }, []);

    return (
        <>
            <View style={styles.imageContainer}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.imageLogo} />
                </View>
                <Divider />
                <View style={styles.detailContainer}>
                    <Text style={styles.carBrand}>Lamborghini</Text>
                    <Text style={styles.carModel}>{carData?.carName}</Text>
                </View>
                <Image source={{ uri: `${CAR_ASSESTS_BASE_URL}${carData?.id}.png` }} style={styles.image} />
                <Divider />
                <BuyButton />
                <View style={styles.priceLabelContainer}>
                    <Button color={"#01A6B3"} title='<' onPress={()=>handlePreviousItem(carData,setCarData)} />
                    <Text style={styles.priceLabel}>{carData?.price}</Text>
                    <Button color={"#01A6B3"} title='>' onPress={()=>handleNextItem(carData,setCarData)} />
                </View>
            </View>
        </>
    );
}

export default CarView;