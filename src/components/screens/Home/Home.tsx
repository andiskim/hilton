import React, { FunctionComponent, useState } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
 } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Button from 'reusable/Button';
import TextInputCustom from 'reusable/TextInputCustom';

interface NavigationParams {
    text: string;
}

interface HomeProps {
    // hotelName: string,
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const Home: FunctionComponent<HomeProps> = (props) => {
    const { navigation } = props;
    const [hotelName, setHotelName] = useState<string>('');

    const handlePressReservations = () => {
        debugger;
        console.log(hotelName);
        props.navigation.navigate('Reservations');
    }

    return (
        <SafeAreaView style={styles.homeContainer}>
            <Image 
                source={require('assets/images/hilton.png')}
                style={styles.logo}
            />
            <View style={styles.homeContentContainer}>
                <View style={styles.hotelDropdownContainer}>
                    <TextInputCustom 
                        field='Please select a Hilton Branch:'
                        value={hotelName}
                        onChangeText={(input: string) => {
                            setHotelName(input)
                        }}
                        ></TextInputCustom>
                </View>
                <View style={styles.reservationsButton}>
                    <Button 
                        onPress={() => handlePressReservations()}
                        navigation={navigation} 
                        disabled={hotelName ? false : true}>Reservations</Button>
                </View>
            </View>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginVertical: 50
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 30,
        width: 250,
    },
    homeContentContainer: {
        padding: 10,
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    },
    hotelDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'grey',
        borderColor: 'grey',
        fontWeight: 'bold',
        fontSize: 15,
        borderWidth: 1,
        width: 250,
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    dropdownStyle: {
        width: 250
    },
    dropdownTextStyle: {
        color: 'black'
    },
    dropdownTextHighlightStyle: {

    },
    reservationsButton: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Home