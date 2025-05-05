import { ApiResponse } from "../utils/api-response.js";

/*
we are writing req, res in this file because this is a controller and routes connect controllers to the Express framework

Controllers focus on business logic
Routes handle URL mapping and connecting to the framework
Models manage data
*/
const healthCheck = async (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running" }));
  } catch (error) {}
};

export { healthCheck };
