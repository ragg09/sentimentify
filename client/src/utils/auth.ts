export const getUserToken = (): string | null => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('token') !== undefined
    ) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
};
