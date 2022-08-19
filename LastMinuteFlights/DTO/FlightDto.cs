namespace LastMinuteFlights.DTO
{
    public class FlightDto
    {
        public int? Id { get; set; }
        public string FlightNum { get; set; }
        public string Destination { get; set; }
        public string DepartureAirport { get; set; }
        public string DepartureTime { get; set; }
        public string DepartureDate { get; set; }
        public string ArrivalAirport { get; set; }
        public string ArrivalTime { get; set; }
        public string ArrivalDate { get; set; }
        public int MaxCapacity { get; set; }
    }
}
