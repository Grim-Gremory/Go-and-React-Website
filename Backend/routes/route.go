package routes

import (
	"Backend/controller"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	println("API Hit")
	app.Post("/api/register", controller.Register)
	//appp.post, login logic, return 200 if match
}
