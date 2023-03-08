import { z } from 'zod';

export const LoginAdminSchema = z.object({
  email: z
    .string({
      required_error: 'Por favor, informe seu e-mail',
    })
    .email(),
  password: z.string({
    required_error: 'Por favor, informe uma senha',
  }),
});

export type LoginAdmin = z.infer<typeof LoginAdminSchema>;
