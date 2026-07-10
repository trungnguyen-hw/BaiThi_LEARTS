import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().min(1, 'ID is required').trim(),
  categoryId: z.string().min(1, 'Category ID is required').trim(),
  name: z.string().min(1, 'Name is required').trim(),
  slug: z.string().min(1, 'Slug is required').trim(),
  description: z.string().optional().nullable(),
  price: z.number({ required_error: 'Price is required' }).nonnegative('Price must be greater than or equal to 0'),
  oldPrice: z.number().nonnegative('Old price must be greater than or equal to 0').nullable().optional(),
  imageUrl: z.string().min(1, 'Image URL is required').trim(),
  hoverImageUrl: z.string().optional().nullable(),
  stock: z.number({ required_error: 'Stock is required' }).int('Stock must be an integer').nonnegative('Stock must be greater than or equal to 0'),
  featured: z.boolean().optional(),
  hot: z.boolean().optional(),
  isNew: z.boolean().optional(),
  sale: z.boolean().optional(),
  rating: z.number().min(0, 'Rating must be >= 0').max(5, 'Rating must be <= 5').optional(),
  sku: z.string().optional().nullable()
});

export const productUpdateSchema = productSchema.partial().extend({
  isActive: z.boolean().optional()
});
