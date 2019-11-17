import React, { FunctionComponent } from 'react';
import { 
    FlatList
} from 'react-native';
import Reservation from 'screens/Reservations/ReservationsList/Reservation';

interface ReservationsListProps {
    reservations: {
        id: string,
        hotelName: string,
        name: string,
        arrivalDate: string,
        departureDate: string
    }[],
}

const ReservationsList: FunctionComponent<ReservationsListProps> = (props) => {
    return (
        <>
            <FlatList
                data={props.reservations}
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

export default ReservationsList;