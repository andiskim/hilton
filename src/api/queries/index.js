import gql from 'graphql-tag';

export const GET_RESERVATIONS = gql`
  query getReservations($hotelName: String!) {
    reservations(where: {hotelName: $hotelName}) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;