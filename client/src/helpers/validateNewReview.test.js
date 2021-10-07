import validationNewReview from './validateNewReview';
import testReview from '../fixtures/testReview.json';

describe('validateNewReview', () => {
  beforeEach(() => {
    testReview.reviews[0].name = testReview.reviews[0].reviewer_name;
    testReview.reviews[0].email = 'test@email.com';
    testReview.reviews[0].body = 'This is a review body and it has more than 50 characters.';
    testReview.reviews[0].characteristics = {};
    testReview.reviews[0].characteristics.Size = 3;
    testReview.reviews[0].rating = 3;
    testReview.reviews[0].recommend = true;
  });

  it('should return valid for valid inputs', () => {
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(true);
    expect(violations).toHaveLength(0);
  });

  it('should return invalid for invalid star rating', () => {
    testReview.reviews[0].rating = 0;
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('rating');
  });

  it('should return invalid for invalid recommendation', () => {
    testReview.reviews[0].recommend = undefined;
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('recommend');
  });

  it('should return invalid for invalid characteristics', () => {
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size', 'Comfort']);
    expect(valid).toBe(false);
    expect(violations).toContain('characteristics');
  });

  it('should return invalid for <50 characters review body', () => {
    testReview.reviews[0].body = 'this is a review body';
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('body');
  });

  it('should return invalid for empty reviewer name', () => {
    testReview.reviews[0].name = '';
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('name');
  });

  it('should return invalid for empty reviewer email', () => {
    testReview.reviews[0].email = '';
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('email');
  });

  it('should return invalid for invalid email', () => {
    testReview.reviews[0].email = 'not an email';
    const [valid, violations] = validationNewReview(testReview.reviews[0], ['Size']);
    expect(valid).toBe(false);
    expect(violations).toContain('email');
  });
});
