const ERROR_MESSAGE = {
  required: "This field is required",
  emailRequired: "Email is required",
  taskRequired: "Task is required",
  deadlineRequired: "Due Date is required",
  priorityRequired: "Priority is required",
  passRequired: "Password is required",
  contactReq: "Contact is required",
  userName: "UserName is required",
  passRequired: "Password is required",
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
const TASK_STATUS = {
  completed: "Completed",
  pending: "Pending",
  canceled: "Canceled",
};

module.exports = {
  TASK_STATUS,
  ERROR_MESSAGE,
  REGEX,
};
