import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .transform((val) => val.trim())
    .refine((val) => /^[a-zA-Z0-9_]+$/.test(val), 'Username can only contain alphanumeric characters and underscores'),
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .transform((val) => val.trim())
    .refine((val) => val.length > 0, 'Full name cannot contain only whitespace'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address format'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .refine((val) => val.trim().length > 0, 'Password cannot contain only whitespace')
});

export const loginSchema = z.object({
  identifier: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  password: z
    .string()
    .min(1, 'Password is required')
}).refine(data => data.identifier || data.username || data.email, {
  message: 'Username, Email, or Identifier is required',
  path: ['identifier']
});
