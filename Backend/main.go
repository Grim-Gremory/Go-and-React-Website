package main

import (
	"Backend/database"
	"Backend/routes"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	database.Connect()
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env files")
	}
	port := os.Getenv("PORT")
	app := fiber.New()
	// CORS Middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3001", // or "*" for all origins
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))
	routes.Setup(app)
	app.Listen(":" + port)
}
