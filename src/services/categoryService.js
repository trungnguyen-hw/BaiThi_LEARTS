import apiClient from './apiClient';

export const categoryService = {
  getCategories: async () => {
    const res = await apiClient.get('/categories');
    return res.data;
  }
};

export default categoryService;
