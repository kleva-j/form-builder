import { z } from "zod";

export const CreateFormSchema = z.object({
  name: z.string().min(4, { message: "Name is too short"}),
  description: z.string().optional(),
});

export type CreateFormSchemaType = z.infer<typeof CreateFormSchema>;
