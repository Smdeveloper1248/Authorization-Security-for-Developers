export const PERMISSIONS = {
  USER: {
    READ_OWN: 'user:read:own',
    UPDATE_OWN: 'user:update:own',
    READ_ALL: 'user:read:all',
    DELETE_ANY: 'user:delete:any'
  },

  COURSE: {
    READ_ALL: 'course:read:all',
    CREATE_ANY: 'course:create:any',
    UPDATE_ANY: 'course:update:any',
    DELETE_ANY: 'course:delete:any'
  },

  ENROLLMENT: {
    READ_ALL: 'enrollment:read:all',
    READ_OWN: 'enrollment:read:own',
    CREATE_OWN: 'enrollment:create:own',
    UPDATE_ANY: 'enrollment:update:any',
    DELETE_ANY: 'enrollment:delete:any'
  }
};