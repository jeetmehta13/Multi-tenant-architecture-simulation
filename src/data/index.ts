export const tenants = [
  {
    id: 'tenant-a',
    name: 'Tenant A',
    users: [
      {
        id: 1,
        name: 'User A1',
        email: 'userA1@example.com',
        password: 'passwordA1'
      },
      {
        id: 2,
        name: 'User A2',
        email: 'userA2@example.com',
        password: 'passwordA2'
      }
    ],
    data: "Fetching data for tenant A only"
  },
  {
    id: 'tenant-b',
    name: 'Tenant B',
    users: [
      {
        id: 1,
        name: 'User B1',
        email: 'userB1@example.com',
        password: 'passwordB1'
      },
      {
        id: 2,
        name: 'User B2',
        email: 'userB2@example.com',
        password: 'passwordB2'
      }
    ],
    data: "Fetching data for tenant B only"
  },
  {
    id: 'tenant-c',
    name: 'Tenant C',
    users: [
      {
        id: 1,
        name: 'User C1',
        email: 'userC1@example.com',
        password: 'passwordC1',
        tenantId: 'tenantC'
      },
      {
        id: 2,
        name: 'User C2',
        email: 'userC2@example.com',
        password: 'passwordC2',
        tenantId: 'tenantC'
      }
    ],
    data: "Fetching data for tenant C only"
  }
];
