using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LastMinuteFlights.Data;
using LastMinuteFlights.Models;
using LastMinuteFlights.DTO;

namespace LastMinuteFlights.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly FlightDbContext _context;
        private readonly ILogger<FlightsController> _logger;

        public FlightsController(ILogger<FlightsController> logger, FlightDbContext context)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Flights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {

            if (_context.Flights == null)
            {
                return NotFound();
            }
            return await _context.Flights.ToListAsync();
        }

        // GET: api/Flights/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlight(int id)
        {
            if (_context.Flights == null)
            {
                return NotFound();
            }
            var flight = await _context.Flights.FindAsync(id);

            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }
        // TODO: Change path listing to api/Flights/Passenger/5
        // GET: api/Flights/Passenger/5
        //[HttpGet("Passenger/{id}")]
        //public async Task<ActionResult<Flight>> GetFlightsByPassenger(int id)
        //{
        //    if (_context.Flights == null)
        //    {
        //        return NotFound();
        //    }

        //    var passenger = await _context.Passengers.Include(p => p.BookedFlights).FirstOrDefaultAsync(p => p.PassengerId == id);
        //    var flight = passenger.BookedFlights;

        //    return Ok(flight);
        //}

        // PUT: api/Flights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlight(int id, FlightDto flightDto)
        {
            if (id != flightDto.Id)
            {
                return BadRequest("Flight not found");
            }

            if (flightDto != null)
            {
                flightDto.Id = id;

                var flight = await _context.Flights.FindAsync(id);

                flight.FlightNum = flightDto.FlightNum;
                flight.Destination = flightDto.Destination;
                flight.DepartureAirport = flightDto.DepartureAirport;
                flight.DepartureTime = flightDto.DepartureTime;
                flight.DepartureDate = flightDto.DepartureDate;
                flight.ArrivalAirport = flightDto.ArrivalAirport;
                flight.ArrivalTime = flightDto.ArrivalTime;
                flight.ArrivalDate = flightDto.ArrivalDate;
                flight.MaxCapacity = flightDto.MaxCapacity;

                _context.Entry(flight).State = EntityState.Modified;
            }
            

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.LogError(ex, "An error occurred while attempting to update the flight information.");
                if (!FlightExists(id))
                {
                    return Problem("There is no flight matching this criteria");
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Flights.ToListAsync());
        }

        // POST: api/Flights
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Flight>> PostFlight(FlightDto flightDto)
        {
            if (_context.Flights == null)
            {
                return Problem("No flights were added. If problems persist, please contact your system adminstrator.");
            }

            var flight = new Flight() {

            FlightNum = flightDto.FlightNum,
            Destination = flightDto.Destination,
            DepartureAirport = flightDto.DepartureAirport,
            DepartureTime = flightDto.DepartureTime,
            DepartureDate = flightDto.DepartureDate,
            ArrivalAirport = flightDto.ArrivalAirport,
            ArrivalTime = flightDto.ArrivalTime,
            ArrivalDate = flightDto.ArrivalDate,
            MaxCapacity = flightDto.MaxCapacity
        };
            _context.Flights.Add(flight);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFlight", new { id = flight.FlightID }, flightDto);
        }

        // DELETE: api/Flights/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(int id)
        {
            if (_context.Flights == null)
            {
                return NotFound();
            }
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FlightExists(int id)
        {
            return (_context.Flights?.Any(e => e.FlightID == id)).GetValueOrDefault();
        }

        
    }
}

