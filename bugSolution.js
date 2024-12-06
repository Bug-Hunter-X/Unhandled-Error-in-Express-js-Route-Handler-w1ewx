const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }
  res.send(user);
});

const users = {
  '1': { name: 'John Doe' },
  '2': { name: 'Jane Doe' },
};
app.listen(3000, () => console.log('Server listening on port 3000'));