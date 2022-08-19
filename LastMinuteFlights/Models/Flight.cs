using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using LastMinuteFlights.DTO;

namespace LastMinuteFlights.Models
{
    public class Flight
    {
        [Key]
        public int FlightID { get; set; }
        public string FlightNum { get; set; }
        public string Destination { get; set; }

        public string DepartureAirport { get; set; }
        public string DepartureTime { get; set; }
        public string DepartureDate { get; set; }
        public string ArrivalAirport { get; set; }
        public string ArrivalTime { get; set; }
        public string ArrivalDate { get; set; }
        public int MaxCapacity { get; set; }

        //Count of all passengers on the flight to be used with MaxCapacity
        public int PassengerCount => BookedPassengers?.Count ?? 0;

        //Collection of passengers that would be on a particular flight
        public virtual ICollection<Passenger> BookedPassengers { get; set; }

        //public virtual ICollection<FlightPassenger> Bookings { get; set; }


        public static Flight PostToFlight(FlightDto flightDto)
        {
            return new Flight
            {
                FlightNum = flightDto.FlightNum,
                DepartureAirport = flightDto.DepartureAirport,
                ArrivalAirport = flightDto.ArrivalAirport,
                DepartureDate = flightDto.DepartureDate,
                MaxCapacity = flightDto.MaxCapacity
            };





        }
    }
}