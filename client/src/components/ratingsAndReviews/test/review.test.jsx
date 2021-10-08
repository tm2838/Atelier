import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Review from '../reviews/review.jsx';
import testReview from '../../../fixtures/testReview.json';
import '../../common/fontAwesomeIcons';
import testStore from '../../../fixtures/testStore';

describe('Review', () => {
  it('should render the individual review without crashing', () => {
    const { getByText } = render(
    <Provider store={testStore}>
      <Review review={testReview.reviews[0]}/>
      </Provider>,
    );

    expect(getByText(/This is a review body 1/)).toBeTruthy();
    expect(getByText(/2021-01-11/)).toBeTruthy();
    expect(getByText(/This is a review summay 1/)).toBeTruthy();
    expect(getByText(/reviewer1/)).toBeTruthy();
  });

  it('should render the show more option when the reviewbody is longer than 250 characters', () => {
    testReview.reviews[0].body = `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
    the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The
    standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied`;

    const { getByText, queryByText } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[0]}/>
        </Provider>,
    );

    expect(getByText(/Show More/)).toBeTruthy();
    expect(queryByText(/reproduced/)).toBeFalsy();

    fireEvent.click(getByText(/Show More/));
    expect(getByText(/reproduced/)).toBeTruthy();
  });

  it('should render the review photo if any', () => {
    const { getByRole } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[2]}/>
        </Provider>,
    );

    expect(getByRole('img')).toBeTruthy();
  });

  it('should open up a modal when click on a review photo', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[2]}/>
        </Provider>,
    );

    fireEvent.click(getByRole('img'));
    expect(getByTestId('review-photo-modal')).toBeTruthy();
  });

  it('should close the photo modal when click on the x icon', () => {
    const { getByRole, getByTestId, queryByTestId } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[2]}/>
        </Provider>,
    );

    fireEvent.click(getByRole('img'));
    fireEvent.click(getByTestId('review-photo-close-modal'));
    expect(queryByTestId('review-photo-modal')).toBeFalsy();
  });

  it('should be able to mark review as helpful', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ status: 201 }),
    }));
    const { getByText } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[0]}/>
        </Provider>,
    );
    fireEvent.click(getByText(/Yes/));
    expect(getByText(/\(1\)/)).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`/reviews/${testReview.reviews[0].review_id}/helpful`, {
      method: 'PUT',
    });
    fetch.mockClear();
  });

  it('should be able to mark review as helpful', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ status: 201 }),
    }));
    const { getByText } = render(
      <Provider store={testStore}>
        <Review review={testReview.reviews[0]}/>
        </Provider>,
    );
    fireEvent.click(getByText(/Report/));
    expect(getByText(/Reported/)).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`/reviews/${testReview.reviews[0].review_id}/report`, {
      method: 'PUT',
    });
    fetch.mockClear();
  });
});
