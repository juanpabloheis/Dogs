export function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  }
  if (/\d/.test(input.name)) {
    error.name = "Numbers are not allowed";
  }
  if (input.name.split('').length < 3) {
    error.name = "Name must be at least 3 characters long";
  }
  if (input.name.length > 30) {
    error.name = "Name must be at least 30 characters long";
  }
  /*
  if (!input.difficulty) {
    error.difficulty = "Select at least one difficulty";
  }
  if (!input.duration) {
    error.duration = "Indicate duration of the activity";
  }
  if (!input.season) {
    error.season = "Select at least one season";
  }
  if (input.countries.length <= 0) {
    error.countries = "Select at least one country";
  } */
  return error;
}
