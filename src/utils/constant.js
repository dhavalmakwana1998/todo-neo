const ERROR_MESSAGE = {
  InvalidCredential: "Invalid Email/Password",
  loginSuccess: "Login Successfuly!",
  required: "This field is required",
  emailRequired: "Email is required",
  taskRequired: "Task is required",
  deadlineRequired: "Due Date is required",
  priorityRequired: "Priority is required",
  passRequired: "Password is required",
  confirmPassRequired: "Confirm Password is required",
  contactReq: "Contact is required",
  userName: "User Name is required",
  fullName: "Fullname is required",
  userNameExist: "Username already exists",
  contactExist: "Contact already exists",
  emailExist: "Email address already exists",
  spaceValidation: "Spaces is not allowed",
  email: "Invalid email address",
  passwordMinSix: "Password must be at least 6 characters",
  contacMinTen: "Contact number must be at least 10 numbers",
  passwordValidation:
    "Contains at least 6 characters, 1 lower case (a-z) & 1 Upper case (A-Z), 1 number (0-9) & one special symbol",
  passwordNotMatch: "Password does not match",
  passwordMatch: "New password and old passwrod must be diffrent",
  minimumThreeCode: "Code must contains more than two characters.",
  minimumThreeChar: "This field must contains more than two characters.",
  phoneLength: "Must be 10 digits",
};
const REGEX = {
  password:
    "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$/",
  onlyDigit: "^[0-9]*$",
};
const TASK_STATUS = ["Backlog", "ToDo", "Ongoing", "Done"];
const TASK_PRIORITY = ["High", "Medium", "Low"];

const API_URL =
  "https://my-json-server.typicode.com/dhavalmakwana1998/todo-neo";
const API_ROUTE = {
  user: "users",
};
const dateInPast = function (date, toDay = new Date()) {
  if (new Date(date) <= toDay) {
    return true;
  }
  return false;
};

module.exports = {
  TASK_STATUS,
  ERROR_MESSAGE,
  TASK_PRIORITY,
  REGEX,
  API_ROUTE,
  API_URL,
  dateInPast,
};
