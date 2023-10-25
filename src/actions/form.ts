"use server";

import { CreateFormSchema, CreateFormSchemaType } from "@/lib/schema";
import { currentUser } from "@clerk/nextjs";
import { Form } from "@prisma/client";
import {
  FormSubmissionError,
  FormNotValidError,
  FormNotFoundError,
  UserNotFoundError,
} from "@/lib/errors";

import prisma from "@/lib/prisma";

export async function GetFormStats() {
  const user = await currentUser();

  if (!user) throw new UserNotFoundError();

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return { visits, submissions, submissionRate, bounceRate };
}

/**
 * @param data CreateFormTypeSchema
 * @returns number
 */
export async function CreateForm(data: CreateFormSchemaType): Promise<number> {
  const validation = CreateFormSchema.safeParse(data);

  if (!validation.success) throw new FormNotValidError();

  const user = await currentUser();

  if (!user) throw new UserNotFoundError();

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      ...validation.data,
    },
  });

  if (!form) throw new FormSubmissionError();

  return form.id;
}

/**
 * @returns Promise of an Array of forms
 */
export async function GetForms(): Promise<Form[]> {
  const user = await currentUser();

  if (!user) throw new UserNotFoundError();

  return prisma.form.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * 
 * @param id number<FormId>
 * @returns Promise of a form.
 */
export async function GetFormsById(id: number): Promise<Form> {
  const user = await currentUser();

  if (!user) throw new UserNotFoundError();

  const form = await prisma.form.findUnique({
    where: { id, userId: user.id },
  });

  if (!form) throw new FormNotFoundError();

  return form;
}
