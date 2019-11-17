import React, { FunctionComponent } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

interface ReservationProps {
    id: string,
    hotelName: string,
    name: string,
    arrivalDate: string,
    departureDate: string
}

const Reservation: FunctionComponent<ReservationProps> = (props) => {
    return (
        <>
            <View style={{height: 10}} />
            <View style={{borderWidth: 1, padding: 10, marginHorizontal: 10, borderRadius: 3}}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Hotel Name:</Text><Text style={styles.fieldValue}>{props.hotelName}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Name:</Text><Text style={styles.fieldValue}>{props.name}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Arrival Date:</Text ><Text style={styles.fieldValue}>{props.arrivalDate}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Departure :</Text><Text style={styles.fieldValue}>{props.departureDate}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    fieldContainer: {
        flexDirection: 'row'
    },
    field: {
        fontWeight: 'bold',
        flex: 1
    },
    fieldValue: {
        flex: 2
    }
})

export default Reservation