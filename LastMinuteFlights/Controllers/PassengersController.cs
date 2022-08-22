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
    public class PassengersController : ControllerBase
    {
        private readonly FlightDbContext _context;
        private readonly ILogger<PassengersController> _logger;

        public PassengersController(ILogger<PassengersController> logger, FlightDbContext context)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Passengers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passenger>>> GetPassengers()
        {
            if (_context.Passengers == null)
            {
                return NotFound();
            }
            return await _context.Passengers.ToListAsync();
        }

        //// GET: api/Passengers/Flight/5
        //[HttpGet("Passengers/Flight/{id}")]
        //public async Task<ActionResult<Flight>> GetPassengersByFlight(int id)
        //{
        //    if (_context.Passengers == null)
        //    {
        //        return NotFound();
        //    }

        //    var flight = await _context.Flights.Include(f => f.BookedPassengers).FirstOrDefaultAsync(f => f.FlightID == id);
        //    var passenger = flight.BookedPassengers;

        //    return Ok(flight);
        //}

        // GET: api/Passengers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passenger>> GetPassenger(int id)
        {
            if (_context.Passengers == null)
            {
                return NotFound();
            }
            var passenger = await _context.Passengers.FindAsync(id);

            if (passenger == null)
            {
                return NotFound();
            }

            return passenger;
        }

        // PUT: api/Passengers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassenger(int id, PassengerDto passengerDto)
        {
            if (id != passengerDto.PassengerId)
            {
                return BadRequest("Passenger not found");
            }

            if (passengerDto != null)
            {
                passengerDto.PassengerId = id;

                var passenger = await _context.Passengers.FindAsync(id);

                passenger.FirstName = passengerDto.FirstName;
                passenger.LastName = passengerDto.LastName;
                passenger.Email = passengerDto.Email;

                _context.Entry(passenger).State = EntityState.Modified;
            }


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                _logger.LogError(ex, "An error occurred while attempting to update the passenger information.");
                if (!PassengerExists(id))
                {
                    return Problem("There is no passenger matching this criteria");
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.Passengers.ToListAsync());
        }

        // POST: api/Passengers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passenger>> PostPassenger(PassengerDto passengerDto)
        {
            if (_context.Passengers == null)
            {
                return Problem("No passengers were added. If problems persist, please contact your system adminstrator.");
            }

            var passenger = new Passenger()
            {

                FirstName = passengerDto.FirstName,
                LastName = passengerDto.LastName,
                Email = passengerDto.Email

            };
            _context.Passengers.Add(passenger);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFlight", new { id = passenger.PassengerId }, passengerDto);
        }
            // DELETE: api/Passengers/5
            [HttpDelete("{id}")]

            public async Task<IActionResult> DeletePassenger(int id)
            {
                if (_context.Passengers == null)
                {
                    return NotFound();
                }
                var passenger = await _context.Passengers.FindAsync(id);
                if (passenger == null)
                {
                    return NotFound();
                }

                _context.Passengers.Remove(passenger);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool PassengerExists(int id)
            {
                return (_context.Passengers?.Any(e => e.PassengerId == id)).GetValueOrDefault();
            }

        
    }

}
