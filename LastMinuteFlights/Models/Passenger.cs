using LastMinuteFlights.Data;
using System.ComponentModel.DataAnnotations;
using LastMinuteFlights.DTO;

namespace LastMinuteFlights.Models
{
    public class Passenger
    {
        [Key]
        public int PassengerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        //public virtual ICollection<Flight> BookedFlights { get; set; }
        //public virtual List<FlightPassenger> Bookings { get; set; }



        public static Passenger PostToPassenger(PassengerDto passengerDto)
        {
            return new Passenger
            {
                FirstName = passengerDto.FirstName,
                LastName = passengerDto.LastName,
                Email = passengerDto.Email
            };
        }
    }
}


