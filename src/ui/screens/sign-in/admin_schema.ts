import { z } from 'zod';

export const SignInAdminSchema = z.object({
  email: z
    .string({
      required_error: 'Por favor, informe seu e-mail',
    })
    .email(),
  password: z.string({
    required_error: 'Por favor, informe uma senha',
  }),
});

export type SignInAdmin = z.infer<typeof SignInAdminSchema>;
