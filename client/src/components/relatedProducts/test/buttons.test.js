import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../common/fontAwesomeIcons';

describe('button', () => {
  it('should fire onClickStar when clicking on star icon', () => {
    const onClickStar = jest.fn();
    const { getByTestId } = render(
      <FontAwesomeIcon icon={['far', 'star']} className='icon' data-testid='star' onClick={ onClickStar } />,
    );

    fireEvent.click(getByTestId('star'));
    expect(onClickStar).toHaveBeenCalled();
  });

  it('should fire onClickCircleX when clicking on encircled x icon', () => {
    const onClickCircleX = jest.fn();
    const { getByTestId } = render(
      <FontAwesomeIcon icon={['far', 'star']} className='icon' onClick={ onClickCircleX } data-testid='circleX' />,
    );

    fireEvent.click(getByTestId('circleX'));
    expect(onClickCircleX).toHaveBeenCalled();
  });

  it('should fire onClickPlus when clicking on plus icon', () => {
    const onClickPlus = jest.fn();
    const { getByTestId } = render(
      <FontAwesomeIcon icon={['fas', 'plus']} onClick={ onClickPlus } data-testid='plus' />,
    );

    fireEvent.click(getByTestId('plus'));
    expect(onClickPlus).toHaveBeenCalled();
  });

  it('should fire onClickLeft when clicking on left arrow icon', () => {
    const onClickLeft = jest.fn();
    const { getByTestId } = render(
      <FontAwesomeIcon icon={ faChevronLeft } onClick={ onClickLeft } data-testid='left-arrow' />,
    );

    fireEvent.click(getByTestId('left-arrow'));
    expect(onClickLeft).toHaveBeenCalled();
  });

  it('should fire onClickRight when clicking on right arrow icon', () => {
    const onClickRight = jest.fn();
    const { getByTestId } = render(
      <FontAwesomeIcon icon={ faChevronRight } onClick={ onClickRight } data-testid='right-arrow' />,
    );

    fireEvent.click(getByTestId('right-arrow'));
    expect(onClickRight).toHaveBeenCalled();
  });
});
