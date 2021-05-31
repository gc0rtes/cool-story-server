//Import the Router class from express.
const { Router } = require("express");

//Import Authentication middleware
const auth = require("../auth/middleware");

//Import tables from ./models. Singular Capitalized.
const Space = require("../models").space;
const Story = require("../models").story;

//create new router
const router = new Router();

//***Edit my space***
router.patch("/:id", auth, async (req, res) => {
  // console.log("I got a request to update a space");
  const space = await Space.findByPk(req.params.id);
  if (!space.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this space" });
  }

  const { title, description, backgroundColor, color } = req.body;

  await space.update({ title, description, backgroundColor, color });

  return res.status(200).send({ space });
});

//*** 2) Post a cool story bro in My Space section***
router.post("/:id/stories", auth, async (req, res) => {
  console.log("I got a request to POST a new story");

  // first we need verify if the space exists
  const space = await Space.findByPk(req.params.id);
  console.log("what is space", space);

  if (space === null) {
    return res.status(404).send({ message: "This space does not exist" });
  }
  //After if the space belongs to the user
  if (!space.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this space" });
  }
  // After checked let's accept the request send by the user
  const { name, imageUrl, content } = req.body;

  //name null is not allowed!
  if (!name) {
    return res.status(400).send({ message: "A story must have a name" });
  }

  //After verify if constrains are matched we finnally CREATE it on the table stories
  const story = await Story.create({
    name,
    imageUrl,
    content,
    spaceId: space.id,
  });
  return res.status(201).send({ message: "Story created", story });
});

//*** 3) A list of spaces belonging to other users ***
router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  console.log("what is my offset?", offset);

  const spaces = await Space.findAndCountAll({
    limit,
    offset,
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });
  res.status(200).send({ message: "ok", spaces });
});

//*** 4) Visit space button of a space we see the details of a space***
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Space id is not a number" });
  }

  const space = await Space.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });

  if (space === null) {
    return res.status(404).send({ message: "Space not found" });
  }

  res.status(200).send({ message: "ok", space });
});

module.exports = router;
