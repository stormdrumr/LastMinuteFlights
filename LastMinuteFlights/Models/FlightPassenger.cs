using System.ComponentModel.DataAnnotations.Schema;
using LastMinuteFlights.Data;

namespace LastMinuteFlights.Models
{
    public class FlightPassenger
    {
        public DateTime BookingDate { get; set; }


        public Passenger Passenger { get; set; }
        public int PassengerId { get; set; }

        public Flight Flight { get; set; }
        public int FlightId { get; set; }



    }
}
