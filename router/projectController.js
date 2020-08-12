const Project = require("../models/project.model");

module.exports.createProject = (req, res, next) => {
    const data = req.body;
    const project = new Project(data);
    project.save()
        .then((savedProject) => {
            res.json(savedProject)
        })
        .catch(err => next(err));
};


module.exports.getAllProjects = function (req, res) {
    let projects;
    Project.find({}, (req, res) => {
        projects = res;
    })
        .then(
            () => {
                res.json(projects);
            })
        .catch(
            (err) => {
                res.json(err);
            });
};

module.exports.getProjectById = function (req, res, next) {
    Project.findById(req.params.id)
        .then(
            project => {
                console.log(project);
                res.json(project);
            })
        .catch(
            (err) => {
                res.json(err);
            });
};



