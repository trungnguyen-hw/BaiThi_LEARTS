import productRepository from '../repositories/productRepository.js';
import { productSchema, productUpdateSchema } from '../validators/productValidator.js';

export const productController = {
  getAllProducts: async (req, res, next) => {
    try {
      const { featured, category, search } = req.query;
      const products = await productRepository.findAll({ featured, category, search });
      res.status(200).json({
        success: true,
        message: 'Products retrieved successfully',
        data: products
      });
    } catch (error) {
      next(error);
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await productRepository.findById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product with ID "${id}" not found.`,
          data: null
        });
      }
      res.status(200).json({
        success: true,
        message: 'Product retrieved successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  },

  createProduct: async (req, res, next) => {
    try {
      const validation = productSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: validation.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }

      const p = validation.data;

      // Validate DB constraints
      const categoryExists = await productRepository.checkCategoryExists(p.categoryId);
      if (!categoryExists) {
        return res.status(400).json({
          success: false,
          message: `Category with ID "${p.categoryId}" does not exist.`,
          data: null
        });
      }

      const slugExists = await productRepository.checkSlugExists(p.slug);
      if (slugExists) {
        return res.status(400).json({
          success: false,
          message: `Slug "${p.slug}" is already in use by another product.`,
          data: null
        });
      }

      if (p.sku) {
        const skuExists = await productRepository.checkSkuExists(p.sku);
        if (skuExists) {
          return res.status(400).json({
            success: false,
            message: `SKU "${p.sku}" is already in use by another product.`,
            data: null
          });
        }
      }

      const product = await productRepository.create(p);
      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  },

  updateProduct: async (req, res, next) => {
    try {
      const { id } = req.params;
      
      const existingProduct = await productRepository.findById(id);
      if (!existingProduct) {
        return res.status(404).json({
          success: false,
          message: `Product with ID "${id}" not found.`,
          data: null
        });
      }

      const validation = productUpdateSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: validation.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }

      const p = validation.data;

      // Validate DB constraints
      if (p.categoryId) {
        const categoryExists = await productRepository.checkCategoryExists(p.categoryId);
        if (!categoryExists) {
          return res.status(400).json({
            success: false,
            message: `Category with ID "${p.categoryId}" does not exist.`,
            data: null
          });
        }
      }

      if (p.slug) {
        const slugExists = await productRepository.checkSlugExists(p.slug, id);
        if (slugExists) {
          return res.status(400).json({
            success: false,
            message: `Slug "${p.slug}" is already in use by another product.`,
            data: null
          });
        }
      }

      if (p.sku) {
        const skuExists = await productRepository.checkSkuExists(p.sku, id);
        if (skuExists) {
          return res.status(400).json({
            success: false,
            message: `SKU "${p.sku}" is already in use by another product.`,
            data: null
          });
        }
      }

      const product = await productRepository.update(id, p);
      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: product
      });
    } catch (error) {
      next(error);
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const { id } = req.params;
      const existingProduct = await productRepository.findById(id);
      if (!existingProduct) {
        return res.status(404).json({
          success: false,
          message: `Product with ID "${id}" not found.`,
          data: null
        });
      }

      const deleted = await productRepository.delete(id);
      if (!deleted) {
        return res.status(400).json({
          success: false,
          message: `Could not delete product with ID "${id}".`,
          data: null
        });
      }

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: null
      });
    } catch (error) {
      next(error);
    }
  }
};

export default productController;
