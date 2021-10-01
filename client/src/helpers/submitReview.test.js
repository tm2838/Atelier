import submitReview from './submitReview';

describe('submitReview', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ status: 201 }),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });

  it('should call the server with correct request body', () => {
    const testReview = {
      body: 'This is a review body 1',
      photos: [],
      rating: 4,
      recommend: false,
      name: 'reviewer1',
      summary: 'This is a review summay 1',
      email: 'test@email.com',
      characteristics: {},
    };
    submitReview(testReview);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testReview),
    });
  });
});
