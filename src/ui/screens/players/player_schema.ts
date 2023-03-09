import { z } from 'zod';

export const PlayerSchema = z.object({
  name: z.string(),
  username: z.string(),
  patent: z.string(),
  active: z.boolean(),
});

export type PlayerFormType = z.infer<typeof PlayerSchema>;
