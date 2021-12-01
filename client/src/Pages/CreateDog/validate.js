export function validate(input) {
  let error = {};
  if (!input.name) {error.name = "Name is required";}
  else if (input.name.length > 30) {error.name = "Name must be at least 30 characters long";}
  else if (/[^A-Za-z_\s]/.test(input.name)) {error.name = "No numbers or signs allowed ";}
  else if (!input.minHeight || !input.maxHeight) {error.height = "Height is required";}
  else if (/\D/.test(input.minHeight) || /\D/.test(input.maxHeight)) {error.height = "Height must be a number";}
  else if (!input.minWeight || !input.maxWeight) {error.weight = "Weight is required";}
  else if (/\D/.test(input.minWeight) || /\D/.test(input.maxWeight)) {error.weight = "Weight must be a number";}
  else if (!input.minLifeSpan || !input.maxLifeSpan) {error.lifeSpan = "Life Span is required";}
  else if (/\D/.test(input.minLifeSpan) || /\D/.test(input.maxLifeSpan)) {error.lifeSpan = "Life Span must be a number";}
  return error;
}
