const { Router } = require("express")

const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()


// function myMiddleware(request, response, next){
//     console.log("Você passou pelo Middleware")

//     if(!request.body.isAdmin){

//         return response.json({message: "user unauthorized"})
//     }

//     next()

// }

// userRoutes.use(myMiddleware) //Desta forma colocamos o middleware em todas as rotas

const usersController = new UsersController()


userRoutes.post("/", usersController.create)
userRoutes.put("/:id", ensureAuthenticated,usersController.update)

module.exports = userRoutes