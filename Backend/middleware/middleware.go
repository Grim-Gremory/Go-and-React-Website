package middleware

import (
	"Backend/util"

	"github.com/gofiber/fiber/v2"
)

func IsAuthenticated(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	if _, err := util.Parsejwt(cookie); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"mesaage": "unauthenticated",
		})
	}
	return c.Next()

}
