using LastMinuteFlights.Data;
using System.ComponentModel.DataAnnotations;

namespace LastMinuteFlights.Models
{
    public class Passenger
    {
        [Key]
        public int PassengerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Flight> BookedFlights { get; set; }
        //public virtual List<FlightPassenger> Bookings { get; set; }
        
    }
}
