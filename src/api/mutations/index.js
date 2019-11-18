import gql from 'graphql-tag';

export const CREATE_RESERVATION = gql`
    mutation  createNewReservation($name: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!) {
        createReservation(data: {
                name: $name, 
                hotelName: $hotelName, 
                arrivalDate: $arrivalDate, 
                departureDate: $departureDate}) {
                    id
                    name
                    hotelName
                    arrivalDate
                    departureDate
                }
    }
`