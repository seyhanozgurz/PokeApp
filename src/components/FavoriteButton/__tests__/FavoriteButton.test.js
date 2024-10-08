import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FavoriteButton from '../FavoriteButton';

describe('FavoriteButton', () => {
  it('responds to press events', () => {
    const handlePress = jest.fn();
    const {getByTestId, toJSON} = render(
      <FavoriteButton onFavorite={handlePress} isFavorite={false} />,
    );
    const button = getByTestId('button');

    fireEvent.press(button);
    expect(handlePress).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
