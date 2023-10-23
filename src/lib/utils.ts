import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateFormField(num: number = 1) {
  return new Array(num).fill(null).map(() => ({
    userId: faker.string.uuid(),
    name: faker.lorem.words({ min: 1, max: 3 }),
    description: faker.lorem.sentence(),
    content: faker.lorem.sentence(),
  }));
}
