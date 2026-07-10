import categoryRepository from '../repositories/categoryRepository.js';

export const categoryController = {
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await categoryRepository.findAll();
      
      const categoriesWithCount = [];
      for (const cat of categories) {
        const productCount = await categoryRepository.countProducts(cat.id);
        categoriesWithCount.push({
          ...cat,
          productCount
        });
      }

      res.status(200).json({
        success: true,
        message: 'Categories retrieved successfully',
        data: categoriesWithCount
      });
    } catch (error) {
      next(error);
    }
  },

  createCategory: async (req, res, next) => {
    try {
      const { id, name, slug, description } = req.body;

      if (!id || id.trim() === '') {
        return res.status(400).json({ success: false, message: 'Category ID is required', data: null });
      }
      if (!name || name.trim() === '') {
        return res.status(400).json({ success: false, message: 'Category Name is required', data: null });
      }
      if (!slug || slug.trim() === '') {
        return res.status(400).json({ success: false, message: 'Category Slug is required', data: null });
      }

      const normalizedId = id.trim().toLowerCase();
      const idExists = await categoryRepository.checkIdExists(normalizedId);
      if (idExists) {
        return res.status(409).json({ success: false, message: 'Category ID already exists', data: null });
      }

      const normalizedSlug = slug.trim().toLowerCase();
      const slugExists = await categoryRepository.checkSlugExists(normalizedSlug);
      if (slugExists) {
        return res.status(409).json({ success: false, message: 'Category Slug already exists', data: null });
      }

      const newCategory = await categoryRepository.create({
        id: normalizedId,
        name: name.trim(),
        slug: normalizedSlug,
        description: description ? description.trim() : null
      });

      res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: newCategory
      });
    } catch (error) {
      next(error);
    }
  },

  updateCategory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, slug, description } = req.body;

      if (!name || name.trim() === '') {
        return res.status(400).json({ success: false, message: 'Category Name is required', data: null });
      }
      if (!slug || slug.trim() === '') {
        return res.status(400).json({ success: false, message: 'Category Slug is required', data: null });
      }

      const category = await categoryRepository.findById(id);
      if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found', data: null });
      }

      const normalizedSlug = slug.trim().toLowerCase();
      const slugExists = await categoryRepository.checkSlugExists(normalizedSlug, id);
      if (slugExists) {
        return res.status(409).json({ success: false, message: 'Category Slug already exists', data: null });
      }

      const updatedCategory = await categoryRepository.update(id, {
        name: name.trim(),
        slug: normalizedSlug,
        description: description ? description.trim() : null
      });

      res.status(200).json({
        success: true,
        message: 'Category updated successfully',
        data: updatedCategory
      });
    } catch (error) {
      next(error);
    }
  },

  deleteCategory: async (req, res, next) => {
    try {
      const { id } = req.params;

      const category = await categoryRepository.findById(id);
      if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found', data: null });
      }

      const productCount = await categoryRepository.countProducts(id);
      if (productCount > 0) {
        return res.status(400).json({
          success: false,
          message: 'Danh mục này vẫn còn sản phẩm. Hãy chuyển hoặc xóa sản phẩm trước.',
          data: null
        });
      }

      await categoryRepository.delete(id);
      res.status(200).json({
        success: true,
        message: 'Category deleted successfully',
        data: null
      });
    } catch (error) {
      next(error);
    }
  }
};

export default categoryController;
