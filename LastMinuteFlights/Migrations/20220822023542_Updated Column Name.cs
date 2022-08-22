using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LastMinuteFlights.Migrations
{
    public partial class UpdatedColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlightPassenger");

            migrationBuilder.RenameColumn(
                name: "PassengerID",
                table: "Passengers",
                newName: "PassengerId");

            migrationBuilder.AddColumn<int>(
                name: "FlightID",
                table: "Passengers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Passengers_FlightID",
                table: "Passengers",
                column: "FlightID");

            migrationBuilder.AddForeignKey(
                name: "FK_Passengers_Flights_FlightID",
                table: "Passengers",
                column: "FlightID",
                principalTable: "Flights",
                principalColumn: "FlightID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Passengers_Flights_FlightID",
                table: "Passengers");

            migrationBuilder.DropIndex(
                name: "IX_Passengers_FlightID",
                table: "Passengers");

            migrationBuilder.DropColumn(
                name: "FlightID",
                table: "Passengers");

            migrationBuilder.RenameColumn(
                name: "PassengerId",
                table: "Passengers",
                newName: "PassengerID");

            migrationBuilder.CreateTable(
                name: "FlightPassenger",
                columns: table => new
                {
                    BookedFlightsFlightID = table.Column<int>(type: "int", nullable: false),
                    BookedPassengersPassengerID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightPassenger", x => new { x.BookedFlightsFlightID, x.BookedPassengersPassengerID });
                    table.ForeignKey(
                        name: "FK_FlightPassenger_Flights_BookedFlightsFlightID",
                        column: x => x.BookedFlightsFlightID,
                        principalTable: "Flights",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FlightPassenger_Passengers_BookedPassengersPassengerID",
                        column: x => x.BookedPassengersPassengerID,
                        principalTable: "Passengers",
                        principalColumn: "PassengerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlightPassenger_BookedPassengersPassengerID",
                table: "FlightPassenger",
                column: "BookedPassengersPassengerID");
        }
    }
}
