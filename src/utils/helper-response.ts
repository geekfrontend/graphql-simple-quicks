import { Response } from "express";

export const responseSuccess = (
  res: Response,
  message: string,
  data: any = {}
) => {
  return res.status(200).json({ success: true, message, data });
};

export const responseCreated = (
  res: Response,
  message: string,
  data: any = {}
) => {
  return res.status(201).json({ success: true, message, data });
};

export const responseValidationError = (
  res: Response,
  errors: Record<string, string>
) => {
  return res.status(400).json({
    success: false,
    message: "Validation failed",
    errors,
  });
};

export const responseServerError = (res: Response, err?: any) => {
  console.error("Internal Server Error:", err);
  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
    errors: null,
  });
};
