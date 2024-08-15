package routes

import (
	"Backend/controller"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	app.Post("/api/register", controller.Register)
	//app.Use(middleware.IsAuthenticated())
	app.Post("/api/login", controller.Login)
	//app.post, login logic, return 200 if match
}
