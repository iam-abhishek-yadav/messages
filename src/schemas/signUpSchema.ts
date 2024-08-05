import { z } from 'zod';

export const signUpSchema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username must be at least 3 characters long.' })
		.max(20, { message: 'Username must be less than 20 characters long.' })
		.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
			message: 'Invalid email address.',
		}),
	email: z.string().email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters long.' }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
