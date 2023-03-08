import { z } from 'zod';

export const ProfileSchema = z.object({
  name: z.string(),
  gameType: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;
