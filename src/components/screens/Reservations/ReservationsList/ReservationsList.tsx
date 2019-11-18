import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { 
    ActivityIndicator,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import Reservation from 'screens/Reservations/ReservationsList/Reservation';
import { GET_RESERVATIONS } from 'api/queries';

interface ReservationsListProps {
    hotelName: string
    modalOpen: boolean
}

const ReservationsList: FunctionComponent<ReservationsListProps> = (props) => {
    const { loading, data, error } = useQuery(GET_RESERVATIONS, {variables: {hotelName: props.hotelName}});
    useEffect(() => {
        debugger;
    })

    if(loading) return <ActivityIndicator style={styles.indicator} />;
    if(error) return <Text style={styles.loadError}>Error loading data.</Text>;
    if(data.reservations.length === 0) return <Text style={styles.loadError}>No reservations found for {props.hotelName}.</Text>;

    return (
        <>
            <FlatList
                data={data.reservations}
                renderItem={({ item }) => (
                    <Reservation 
                        id={item.id}
                        hotelName={item.hotelName}
                        name={item.name}
                        arrivalDate={item.arrivalDate}
                        departureDate={item.departureDate}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    indicator: {
        marginTop: 40
    },
    loadError: {
        textAlign: 'center',
        margin: 40,
    },
});

export default ReservationsList;