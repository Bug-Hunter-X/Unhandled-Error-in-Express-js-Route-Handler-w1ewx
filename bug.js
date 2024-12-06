const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  console.log(users[userId]);
  res.send(users[userId]);
});

const users = {
  '1': { name: 'John Doe' },
  '2': { name: 'Jane Doe' },
};
app.listen(3000, () => console.log('Server listening on port 3000'));