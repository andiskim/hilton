import React, { FunctionComponent } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

interface ReservationProps {

}

const Reservation: FunctionComponent<ReservationProps> = (props) => {
    return (
        <>
            <View style={{height: 10}} />
            <View style={{borderWidth: 1, padding: 10, marginHorizontal: 10, borderRadius: 3}}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Hotel Name:</Text><Text style={styles.fieldValue}>Hilton Inn</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Name:</Text><Text style={styles.fieldValue}>Drew</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Arrival Date:</Text ><Text style={styles.fieldValue}>12-25-2019</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.field}>Departure :</Text><Text style={styles.fieldValue}>12-27-2019</Text>
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