import apiClient from './apiClient';

export const productService = {
  getProducts: async (params = {}) => {
    const res = await apiClient.get('/products', { params });
    return res.data;
  },

  getProductById: async (id) => {
    const res = await apiClient.get(`/products/${id}`);
    return res.data;
  },

  getFeaturedProducts: async () => {
    const res = await apiClient.get('/products', { params: { featured: true } });
    return res.data;
  }
};

export default productService;
