import React, { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import {
    View,
    Dimensions,
    StyleSheet,
    Alert,
    ActivityIndicator
} from 'react-native';
import moment from 'moment';
import ModalHeader from 'reusable/ModalHeader';
import TextInputCustom from 'reusable/TextInputCustom';
import Button from 'reusable/Button';
import DatePickerCustom from 'reusable/DatePickerCustom';
import { CREATE_RESERVATION } from 'api/mutations';

const screen = Dimensions.get('window');

interface AddReservationProps {
    setModalClose: () => void,
    hotelName: string
}

const AddReservation: FunctionComponent<AddReservationProps> = (props) => {
    const [hotelName, setHotelName] = useState(props.hotelName);
    const [name, setName] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [createReservation, {loading, data, error}] = useMutation(CREATE_RESERVATION, {
            onCompleted() {
                Alert.alert(
                    'Success!',
                    'You have added a reservation.',
                    [
                        {text: 'OK', onPress: () => props.setModalClose(), style: 'cancel'},
                    ],
                    { cancelable: false }
                );
                setName('');
                setArrivalDate('');
                setDepartureDate('');
            },
            onError() {
                Alert.alert(
                    'Error!',
                    'There was an error adding the reservation.',
                    [
                        {text: 'OK', style: 'cancel'},
                    ],
                    { cancelable: false }
                );
            }
        }
    );

    const handleAddReservation = () => {
        createReservation({variables: {
            hotelName,
            name,
            arrivalDate,
            departureDate
        }});
    }

    return (
        <>
            <ModalHeader onPress={props.setModalClose}/>
            <View style={styles.addReservationContainer}>
                <View style={styles.addReservationContentContainer}>
                    <View>
                        <TextInputCustom 
                            field={'Hotel Name'} 
                            value={hotelName}
                            editable={false}
                        />
                    </View>
                    <View>
                        <TextInputCustom 
                            field={'Name'}
                            value={name}
                            onChangeText={(input: string) => {
                                setName(input);
                            }}
                            editable={true}
                        />
                    </View>
                    <View>
                        <DatePickerCustom 
                            date={arrivalDate}
                            title={'Arrival Date'}
                            minDate={moment().format("MM-DD-YYYY")}
                            maxDate={'12-31-2022'}
                            format={'MM-DD-YYYY'}
                            onDateChange={(input: string) => {
                                setArrivalDate(input);
                            }}
                        />
                    </View>
                    <View>
                        <DatePickerCustom 
                            date={departureDate}
                            title={'Departure Date'}
                            minDate={moment().format("MM-DD-YYYY")}
                            maxDate={'12-31-2022'}
                            format={'MM-DD-YYYY'}
                            onDateChange={(input: string) => {
                                setDepartureDate(input);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.addReservationButton}>
                    <Button 
                        onPress={() => handleAddReservation()}
                        disabled={!(hotelName && name && arrivalDate && departureDate)}>Add Reservation</Button>
                </View>
                {loading ? <ActivityIndicator style={styles.indicator} /> : null}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addReservationTitle: {
        fontWeight: 'bold',
        textAlign: 'center', 
        fontSize: 18
    },
    addReservationContainer: {
        height: screen.height*0.7,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    addReservationContentContainer: {
        padding: 20,
        height: 500,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    addReservationButton: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    indicator: {
        marginHorizontal: 'auto'
    }
})

export default AddReservation;