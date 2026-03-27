import { typiClient } from './typiClient';

export const userService = {
  getUsers: async (options = {}) => {
    return await typiClient('users', options);
  }
};
