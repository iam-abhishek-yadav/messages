import { z } from 'zod';

export const messageSchema = z.object({
	content: z
		.string()
		.min(1, { message: 'Message cannot be empty.' })
		.max(255, { message: 'Message cannot be longer than 255 characters.' }),
});

export type MessageSchema = z.infer<typeof messageSchema>;
