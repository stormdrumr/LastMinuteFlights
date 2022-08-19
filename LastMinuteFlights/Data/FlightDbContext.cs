using Microsoft.EntityFrameworkCore;
using LastMinuteFlights.Models;
using System.Linq;

namespace LastMinuteFlights.Data
{ 
    public class FlightDbContext : DbContext
    {
        public FlightDbContext(DbContextOptions<FlightDbContext> op) : base(op)
        {

        }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        //public DbSet<FlightPassenger> FlightPassengers { get; set; }



        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Passenger>().ToTable("Passenger");
        //    modelBuilder.Entity<FlightPassenger>().ToTable("FlightPassenger");
        //    modelBuilder.Entity<Flight>().ToTable("Flight");
        //    modelBuilder.Entity<Flight>()
        //        .HasMany(f => f.BookedPassengers)
        //        .WithMany(p => p.BookedFlights)
        //        .UsingEntity<FlightPassenger>(
        //        fp => fp
        //                .HasOne(fb => fb.Flight)
        //                .WithMany(f => f.Bookings)
        //                .HasForeignKey(fb => fb.FlightId),
        //        fp => fp
        //                .HasOne(fb => fb.Passenger)
        //                .WithMany(p => p.Bookings)
        //                .HasForeignKey(fb => fb.PassengerId),
        //        fp =>
        //        {
        //            fb.HasKey(e => new { e.FlightId, e.PassengerId });

        //            fb.Property(e => e.BookingDate).HasDefaultValueSql("CURRENT_TIMESTAMP");
        //        }


               //);

        }
    }
//}
