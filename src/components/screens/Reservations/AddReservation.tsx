import React, { FunctionComponent } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import moment from 'moment';
import ModalHeader from 'reusable/ModalHeader';
import TextInputCustom from 'reusable/TextInputCustom';
import Button from 'reusable/Button';
import DatePickerCustom from 'reusable/DatePickerCustom';

const screen = Dimensions.get('window');

interface AddReservationProps {
    setModalClose: () => void
}

const AddReservation: FunctionComponent<AddReservationProps> = (props) => {
    return (
        <>
            <ModalHeader onPress={props.setModalClose}/>
            <View style={styles.addReservationContainer}>
                <View style={styles.addReservationContentContainer}>
                    <View>
                        <TextInputCustom field={'Name'}/>
                    </View>
                    <View>
                        <TextInputCustom field={'Hotel Name'}/>
                    </View>
                    <View>
                        <DatePickerCustom 
                            date={''}
                            minDate={moment().format("MM-DD-YYYY")}
                            maxDate={'12-31-2022'}
                            format={'MM-DD-YYYY'}
                        />
                    </View>
                    <View>
                        <DatePickerCustom 
                            date={''}
                            minDate={moment().format("MM-DD-YYYY")}
                            maxDate={'12-31-2022'}
                            format={'MM-DD-YYYY'}
                        />
                    </View>
                </View>
                <View style={styles.addReservationButton}>
                    <Button>Add Reservation</Button>
                </View>
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
        // borderWidth: 1
    },
    addReservationButton: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default AddReservation;