const { Router } = require("express")

const NotesController = require("../controllers/notesController")

const notesRoutes = Router()


// function myMiddleware(request, response, next){
//     console.log("Você passou pelo Middleware")

//     if(!request.body.isAdmin){

//         return response.json({message: "user unauthorized"})
//     }

//     next()

// }

// userRoutes.use(myMiddleware) //Desta forma colocamos o middleware em todas as rotas

const notesController = new NotesController()

notesRoutes.get("/", notesController.index)
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes