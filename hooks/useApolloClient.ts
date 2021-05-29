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
import { useRef } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default () => {
  console.log('Token is ', process.env.EXPO_GQL_TOKEN);
  console.log('URL is', process.env.GQL_URL);
  const clientRef = useRef(
    new ApolloClient({
      uri: process.env.GQL_URL,
      headers: {
        authorization: `Bearer ${process.env.EXPO_GQL_TOKEN}`,
      },
      cache: new InMemoryCache(),
    }),
  );

  return clientRef.current;
};
