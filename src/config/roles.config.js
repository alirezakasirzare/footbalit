// all exists permissions
const permissions = ['League', 'Team', 'Player', 'Admin', 'admin-panel'];

// roles
const roles = ['USER', 'ADMIN', 'SUPER_ADMIN'];

// user permissions
const userPermissions = [];

// admin permissions
const adminPermissions = ['League', 'Team', 'Player', 'admin-panel'];

// super admin permissions
const superAdminPermissions = [
  'League',
  'Team',
  'Player',
  'Admin',
  'admin-panel',
];

/**
 * Return all permissions belonging to a specific role
 *
 * @param {role} req - the role of user
 */
const getPermissions = (role) => {
  switch (role) {
    case 'USER':
      return userPermissions;

    case 'ADMIN':
      return adminPermissions;

    case 'SUPER_ADMIN':
      return superAdminPermissions;
  }
};

module.exports = {
  allPermissions: permissions,
  roles,
  getPermissions,
};
