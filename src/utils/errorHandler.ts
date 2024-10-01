import { CustomError } from "../types/Item";

export const handleError = (error: unknown): string => {
  const customError = error as CustomError;
  return customError?.message || "An unexpected error occurred.";
};
