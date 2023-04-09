import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { authenticate } from './middleware/authenticate';
import { tenants } from './data'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.environment === "development") {
  app.set('subdomain offset', 1);
}

app.use(
  session({
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: true,
  })
);

app.post('/login', (req, res) => {
  if(req.session.tenantId && req.session.email) {
    return res.status(200).send({ message: 'Already logged in', data: { email: req.session.email } });
  }

  const { email, password } = req.body;
  const tenantId: string = req.subdomains[0];

  const targetTenant = tenants.find((t) => t.id === tenantId);
  
  if (!targetTenant) {
    return res.status(400).json({ message: 'Invalid URL' });
  }

  // for this example we are using the password directly, but it should be encrypted and stored
  // we can use salted hash for this
  const user = targetTenant.users.find(
    (u) => u.email === email && u.password === password
  );
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  req.session.tenantId = tenantId;
  req.session.email = email;

  res.status(200).send({ message: 'Logged in succesfully' });
});

app.get('/data', authenticate, (req, res) => {
  const tenantId: string = req.subdomains[0];

  const data = tenants.find((t) => t.id === tenantId)?.data;

  if(data)
    return res.status(200).json({ data });
  return res.status(404).json({ message: "No data found" });
});

app.post('/logout', authenticate, (req, res) => {
  if(req.session.email)
       return req.session.destroy(() => res.send({ message: 'Logged Out'}));
    else return res.send({ message: 'Logged Out'});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
