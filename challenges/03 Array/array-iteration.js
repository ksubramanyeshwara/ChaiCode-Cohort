// Find the total amount of expenses for each category and it should be dynamic such that if new categories are added, it should be able to handle that.
let expenses = [
  { description: "Groceries", amount: 100, category: "food" },
  { description: "Gym", amount: 50, category: "fitness" },
  { description: "Netflix", amount: 10, category: "entertainment" },
  { description: "Gas", amount: 100, category: "transportation" },
  { description: "Groceries", amount: 100, category: "food" },
  { description: "Gym", amount: 50, category: "fitness" },
  { description: "Netflix", amount: 10, category: "entertainment" },
  { description: "book", amount: 100, category: "education" },
];

/*
When using .reduce(callback, initialValue), here's what happens:

If an initialValue is provided:

acc starts with initialValue.
curr starts with array[0].
If an initialValue is NOT provided:

acc starts with array[0].
curr starts with array[1].

returns accumulated value and it can be array, number or object
*/

let expenseReport = expenses.reduce(
  (acc, curr) => {
    // if category is not present in acc, add it and set its value to 0
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  },
  { food: 0, fitness: 0, entertainment: 0, transportation: 0 }
);
// console.log(expenseReport);

// Calculate Total Sales per Product Category
// You have an array of sales transactions where each transaction contains the product name, price, and category. Write a function that calculates the total sales for each category.
let sales = [
  { product: "Laptop", price: 1000, category: "Electronics" },
  { product: "Phone", price: 500, category: "Electronics" },
  { product: "Shirt", price: 40, category: "Clothing" },
  { product: "Jeans", price: 60, category: "Clothing" },
  { product: "Tablet", price: 600, category: "Electronics" },
  { product: "Sneakers", price: 80, category: "Footwear" },
];
// Your task: Write a reduce function to sum up sales by category
let salesSum = sales.reduce(
  (acc, curr) => {
    // if category is not present in acc, add it and set its value to 0
    acc[curr.category] = (acc[curr.category] || 0) + curr.price;
    return acc;
  },
  { Electronics: 0, Clothing: 0 }
);
// console.log(salesSum);

// You have an array of student records with their names and grades. Write a function to count how many students are in each grade.
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" },
  { name: "Frank", grade: "A" },
];

// Your task: Write a reduce function to count students in each grade
let studentsInEachGrade = students.reduce(
  (acc, curr) => {
    // if category is not present in acc, add it and set its value to 0 and then increment by 1
    acc[curr.grade] = (acc[curr.grade] || 0) + 1;
    return acc;
  },
  { A: 0, B: 0, C: 0 }
);
// console.log(studentsInEachGrade);

/*
Find the Total Duration of Activities per Type
You have an array of activities with a duration and type. Write a function that calculates the total time spent on each activity type.
*/
let activities = [
  { activity: "Running", duration: 30, type: "Exercise" },
  { activity: "Reading", duration: 45, type: "Leisure" },
  { activity: "Cycling", duration: 60, type: "Exercise" },
  { activity: "Gaming", duration: 90, type: "Leisure" },
  { activity: "Swimming", duration: 50, type: "Exercise" },
];
// Your task: Write a reduce function to sum up total duration per activity type
let activityDuration = activities.reduce(
  (acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + curr.duration;
    return acc;
  },
  { Exercise: 0, Leisure: 0 }
);
// console.log(activityDuration);

/*
Find the Most Frequent Word in an Array
You have an array of words. Write a function that determines the most frequently occurring word and its count.
*/
let words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "grape",
  "orange",
  "grape",
  "banana",
  "banana",
  "apple",
];

/*
Expected Output:
{ mostFrequent: "apple", count: 4 }
*/

// Your task: Use reduce to create a frequency object and extract the most frequent word.
let mostFrequentWord = words.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(mostFrequentWord);

/*
Group and Sum Transactions by User
You have an array of transactions where each transaction contains a userId, amount, and type. Write a function that groups transactions by userId and calculates their total spent (debit) and earned (credit).
*/
let transactions = [
  { userId: 1, amount: 200, type: "debit" },
  { userId: 2, amount: 500, type: "credit" },
  { userId: 1, amount: 150, type: "credit" },
  { userId: 3, amount: 300, type: "debit" },
  { userId: 2, amount: 400, type: "debit" },
  { userId: 3, amount: 250, type: "credit" },
];

/*
Expected Output:
{
  1: { debit: 200, credit: 150 },
  2: { debit: 400, credit: 500 },
  3: { debit: 300, credit: 250 }
}
*/

// Your task: Write a reduce function to group by userId and sum debit & credit separately.
let transactionByID = transactions.reduce((acc, curr) => {
  // Initialize the nested object for this userId if it doesn't exist
  if (!acc[curr.userId]) {
    acc[curr.userId] = { debit: 0, credit: 0 };
  }
  // Add the amount to the appropriate type (debit or credit)
  acc[curr.userId][curr.type] =
    (acc[curr.userId][curr.type] || 0) + curr.amount;
  return acc;
}, {});
// console.log(transactionByID);

// forEach version
let transactionById = {};

transactions.forEach((transaction) => {
  if (!transactionById[transaction.userId]) {
    transactionById[transaction.userId] = { debit: 0, credit: 0 };
  }
  transactionById[transaction.userId][transaction.type] += transaction.amount;
});
// console.log(transactionById);

/*
Categorize and Calculate Average Ratings
You have an array of movie reviews containing title, rating, and category. Write a function that groups movies by category and calculates the average rating for each category.
*/
let reviews = [
  { title: "Movie A", rating: 4.5, category: "Action" },
  { title: "Movie B", rating: 3.8, category: "Drama" },
  { title: "Movie C", rating: 4.2, category: "Action" },
  { title: "Movie D", rating: 5.0, category: "Comedy" },
  { title: "Movie E", rating: 3.5, category: "Drama" },
  { title: "Movie F", rating: 4.0, category: "Comedy" },
  { title: "Movie G", rating: 4.8, category: "Action" },
];

/*
Expected Output:
{
  Action: { totalRating: 13.5, count: 3, averageRating: 4.5 },
  Drama: { totalRating: 7.3, count: 2, averageRating: 3.65 },
  Comedy: { totalRating: 9.0, count: 2, averageRating: 4.5 }
}
*/

// Your task: Use reduce to group by category and calculate the average rating dynamically.
let groupReviews = reviews.reduce((acc, curr) => {
  // Step 1: Check if category exists, if not initialize it
  if (!acc[curr.category]) {
    acc[curr.category] = {
      totalRating: 0, // Sum of all ratings
      count: 0, // Number of movies
      averageRating: 0, // Average rating (totalRating/count)
    };
  }

  // Step 2: Update the values
  acc[curr.category].totalRating += curr.rating; // Add current rating to total
  acc[curr.category].count += 1; // Increment movie count

  // Step 3: Calculate new average
  acc[curr.category].averageRating =
    acc[curr.category].totalRating / acc[curr.category].count;

  // Step 4: Return accumulator for next iteration
  return acc;
}, {}); // Start with empty object
// console.log(groupReviews);

/*
There is an array of tasks in which there are multiple objects with three properties description, completed, priority. You will have to filter the array to get the pending tasks and then sort the pending tasks based on the priority. The output should be an array of objects with the pending tasks sorted based on the priority.

The output should be like this:
[
    { description: "Task1", completed: false, priority: "High" },
    { description: "Task2", completed: false, priority: "Low" },
    { description: "Task3", completed: false, priority: "Medium" },
]

*/

let tasks = [
  { description: "Write Report", completed: true, priority: 1 },
  { description: "Prepare Presentation", completed: false, priority: 3 },
  { description: "Attend Meeting", completed: false, priority: 2 },
  { description: "Send Email", completed: true, priority: 1 },
  { description: "Review Code", completed: false, priority: 3 },
  { description: "Create Document", completed: false, priority: 2 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log("Pending Sorted Tasks:", pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [3, 4, 5] },
  { title: "Movie C", ratings: [5, 4, 4] },
];

let averageRating = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  let average = total / movie.ratings.length;
  return (movie.ratings = average);
  return movie;
  return { title: movie.title, averageRating: average.toFixed(2) };
});
console.log(averageRating);
