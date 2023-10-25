import { FormBuilder } from "@/dashboard/FormBuilder";
import { InvalidFormIdError } from "@/lib/errors";
import { GetFormsById } from "@/actions/form";
import { z } from "zod";

interface PageProps {
  params: { id: string };
}

export default async function BuilderPage({ params }: PageProps) {
  const validateParams = z
    .object({ id: z.string().regex(/^\d+$/).transform(Number) })
    .safeParse(params);

  if (!validateParams.success) throw new InvalidFormIdError();

  const form = await GetFormsById(validateParams.data.id);

  return <FormBuilder form={form} />;
}
