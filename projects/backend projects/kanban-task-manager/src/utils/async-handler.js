function asyncHandler(requestHandler) {
  return function (req, res, next) {
    Promise.resolve(requestHandler(req, res, next)).catch(function (err) {
      next(err);
    });
  };
}

export { asyncHandler };

function test(req, res, next) {
  Promise.resolve().catch();
}

/*
Common Express.js pattern for error handling with async/await functions.

This pattern eliminates the need to write try/catch blocks in every controller function.
async function myController(req, res, next) {
  try {
    // Your async logic
  } catch (err) {
    next(err);
  }
}

Instead of above code you write below code
const myController = asyncHandler(async (req, res, next) => {
  // Your async logic without try/catch
});
*/