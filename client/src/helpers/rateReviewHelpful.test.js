import { rateReviewHelpful, reportReview } from './rateReviewHelpful';

describe('rateReviewHelpful', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ status: 201 }),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });

  it('should call the server with correct payload', () => {
    rateReviewHelpful(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/reviews/1/helpful', {
      method: 'PUT',
    });
  });

  it('should call the server with correct payload', () => {
    reportReview(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/reviews/1/report', {
      method: 'PUT',
    });
  });
});
