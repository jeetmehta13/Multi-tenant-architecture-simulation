# Multi-tenant-architecture-simulation
A simulation to showcase a multi tenant system authentication and data retrieval

### To run the server:

```
npm i
npx tsc
node .
```

### You can use any of the 3 tenants:

`http://tenant-a.localhost:3000`<br>
`http://tenant-b.localhost:3000`<br>
`http://tenant-c.localhost:3000`<br>

### The available api paths are: 

1. `/login`: To login to that particular tenant
2. `/data`: To fetch the data of that particular tenant
3. `/logout`: To logout of that tenant

Login for a tenant is only vailable to the users of that tenant. Similarly data of a particular tenant is also only accessible by a user that belongs to that tenant upon signing in.
