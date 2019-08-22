const express = require('express');

const router = express.Router();

let nextId = 4;

const friends = [{id: 1, name: "Henry"}, {id: 2, name: "Bard"}, {id: 3, name: "Jo"}];

router.get('/', (request, response) => {
  // console.log(request);
  response.json(friends);
});

router.post('/', (req, res) => {
  const friend = {...req.body, id: nextId++};
  friends.push(friend);
  res.json(friend);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const friend = friends.find(friend => friend.id == id);
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({message: "Friend with id does not exist"});
  }
});

module.exports = router;
