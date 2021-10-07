import { sortHelpful, sortNewest, sortRelevant } from './sortReviews';
import testReview from '../fixtures/testReview.json';

describe('sortHelpful', () => {
  it('should sort reviews based on helpfulness', () => {
    const sortedReviews = sortHelpful(testReview.reviews);
    expect(sortedReviews[0].review_id).toBe(3);
    expect(sortedReviews[1].review_id).toBe(2);
    expect(sortedReviews[2].review_id).toBe(1);
  });
});

describe('sortNewst', () => {
  it('should sort reviews based on helpfulness', () => {
    const sortedReviews = sortNewest(testReview.reviews);
    expect(sortedReviews[0].review_id).toBe(1);
    expect(sortedReviews[1].review_id).toBe(2);
    expect(sortedReviews[2].review_id).toBe(3);
  });
});

describe('sortRelevant', () => {
  it('should sort reviews based on helpfulness', () => {
    const sortedReviews = sortRelevant(testReview.reviews);
    expect(sortedReviews[0].review_id).toBe(3);
    expect(sortedReviews[1].review_id).toBe(2);
    expect(sortedReviews[2].review_id).toBe(1);
  });
});
