const validationNewReview = (review) => {
  let valid = true;
  const violations = [];

  if (!review.rating) {
    valid = false;
    violations.push('rating');
  }

  if (!review.body || review.body.length < 50) {
    valid = false;
    violations.push('body');
  }

  if (review.recommend === undefined) {
    valid = false;
    violations.push('recommend');
  }

  // if (Object.keys(review.characteristics).length < 6) {
  //   valid = false;
  //   violations.push('characteristics');
  // }

  if (!review.name) {
    valid = false;
    violations.push('name');
  }

  function validateEmail(value) {
    const input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
  }

  if (!review.email || !validateEmail(review.email)) {
    valid = false;
    violations.push('email');
  }

  return [valid, violations];
};

export default validationNewReview;
