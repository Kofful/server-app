const express = require("express");
const {
    login,
    getAllUsers,
    getUserById,
    createUser,
} = require("./userController");

const {
    getAllProjects,
    getProjectById,
} = require("./projectController");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);
module.exports = router;