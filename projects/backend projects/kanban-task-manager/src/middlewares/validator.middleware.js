import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, res, next) => {
  // console.log the errors that is below, learn the data type of error
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // understand whole code of this middleware
  const extractedError = [];
  errors.array().map((err) =>
    extractedError.push({
      [err.path]: err.msg,
    }),
  );

  throw new ApiError(422, "Received data is not valid", extractedError);
};
