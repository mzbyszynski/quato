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
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Appbar, Title, TextInput, Button } from 'react-native-paper';
import { View } from '../../components/Themed';
import { RootStackParamList } from '../../types';
import Rating from './Rating';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
  },
  wrapper: {
    flex: 1,
  },
  bottom: {
    display: 'flex',
  },
});

const TextInputAvoidingView = ({ children }: React.PropsWithChildren<{}>) =>
  Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );

export default ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) => (
  <View style={styles.container}>
    <TextInputAvoidingView>
      <ScrollView>
        <View style={styles.item}>
          <Title>My Opinion</Title>
        </View>
        <View style={styles.item}>
          <TextInput label="About" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <Rating />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
        <View style={styles.item}>
          <TextInput label="Category" />
        </View>
      </ScrollView>
      <Appbar style={styles.bottom}>
        <Button onPress={() => navigation.navigate('Home')}>Cancel</Button>
        <View style={{ flex: 1 }} />
        <Button>Save</Button>
      </Appbar>
    </TextInputAvoidingView>
  </View>
);
