/*
 * Copyright (C) 2021  Marc Zbyszynski
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ToggleButton } from 'react-native-paper';

enum RatingValue {
  Hate = 'Hate',
  DoNotLike = 'Do not like',
  Like = 'Like',
  Love = 'Love',
}

const styles = StyleSheet.create({
  button: {
    margin: 16,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});

const commonButtonProps = {
  style: styles.button,
  size: 36,
};

export default () => {
  const [rating, setRating] = React.useState<string>(RatingValue.Like);
  return (
    <ToggleButton.Row
      value={rating}
      onValueChange={(value) => setRating(value)}
    >
      <ToggleButton
        {...commonButtonProps}
        icon="emoticon-frown"
        color={rating === RatingValue.Hate ? 'green' : undefined}
        value={RatingValue.Hate}
        accessibilityLabel={RatingValue.Hate}
      />
      <ToggleButton
        {...commonButtonProps}
        icon="thumb-down"
        color={rating === RatingValue.DoNotLike ? 'orange' : undefined}
        value={RatingValue.DoNotLike}
        accessibilityLabel={RatingValue.DoNotLike}
      />
      <ToggleButton
        {...commonButtonProps}
        icon="thumb-up"
        color={rating === RatingValue.Like ? 'orange' : undefined}
        value={RatingValue.Like}
        accessibilityLabel={RatingValue.Like}
      />
      <ToggleButton
        {...commonButtonProps}
        icon="heart"
        color={rating === RatingValue.Love ? 'red' : undefined}
        value={RatingValue.Love}
        accessibilityLabel={RatingValue.Love}
      />
    </ToggleButton.Row>
  );
};
