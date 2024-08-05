import { z } from 'zod';

export const verifySchema = z.object({
	verifyCode: z
		.string()
		.min(6, { message: 'Verify code must be at least 6 characters long.' }),
});

export type VerifySchema = z.infer<typeof verifySchema>;
