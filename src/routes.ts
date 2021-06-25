import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUsersendComplimentsController } from "./controllers/ListUsersendComplimentsController";
import { ListUsersReceiveComplimentsController } from "./controllers/ListUsersReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const ListUsersendComplimentsController = new ListUsersendComplimentsController();
const ListUsersReceiveComplimentsController = new ListUsersReceiveComplimentsController();
const listTagsController = new ListTagsController();
const ListUsersController = new ListUsersController();

router.post("/login", authenticateUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post("/users", ensureAuthenticated, createUserController.handle);
router.get("/users", ensureAuthenticated, ListUsersController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, ListUsersendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, ListUsersReceiveComplimentsController.handle);



export { router }