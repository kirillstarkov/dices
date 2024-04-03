const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Need for more delay to query don't come instanly, immitation of real API
server.use(async (req, res, next) => {
  next();
});

// login endpoint
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }
    return res.status(403).json({ message: 'AUTH ERROR, user not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// check authorization
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
