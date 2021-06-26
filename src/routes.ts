import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUsersReceiveRankingController } from "./controllers/ListUsersReceiveRankingController";
import { ListComplimentsController } from "./controllers/ListComplimentsController";

const router = Router();

// Users
const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);
const listUsersController = new ListUsersController();
router.get("/users", ensureAuthenticated, listUsersController.handle);
const listUsersReceiveRankController = new ListUsersReceiveRankingController();
router.get("/users/ranking", ensureAuthenticated, listUsersReceiveRankController.handle);


// Tags
const createTagController = new CreateTagController();
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
const listTagsController = new ListTagsController();
router.get("/tags", ensureAuthenticated, listTagsController.handle);


// Compliments
const createComplimentController = new CreateComplimentController();
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
const listComplimentsController = new ListComplimentsController();
router.get("/compliments", ensureAuthenticated, ensureAdmin, listComplimentsController.handle);
const listUserSendComplimentsController = new ListUserSendComplimentsController();
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);



export { router }