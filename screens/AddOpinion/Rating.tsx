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
import { ToggleButton } from 'react-native-paper';

enum RatingValue {
  Hate = 'Hate',
  DoNotLike = 'Do not like',
  Like = 'Like',
  Love = 'Love',
}

export default () => {
  const [rating, setRating] = React.useState<string>(RatingValue.Like);
  return (
    <ToggleButton.Row
      value={rating}
      onValueChange={(value) => setRating(value)}
    >
      <ToggleButton icon="emoticon-frown" value={RatingValue.Hate} />
      <ToggleButton icon="thumb-down" value={RatingValue.DoNotLike} />
      <ToggleButton icon="thumb-up" value={RatingValue.Like} />
      <ToggleButton icon="heart" value={RatingValue.Love} />
    </ToggleButton.Row>
  );
};
