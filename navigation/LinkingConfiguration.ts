/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Browser: {
            screens: {
              Browser: 'Browser',
            },
          },
          Portfolio: {
            screens: {
              Portfolio: 'Portfolio',
            },
          },
          Shortcuts: {
            screens: {
              Shortcuts: 'Shortcuts',
            },
          },
          Options: {
            screens: {
              Options: 'Options',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
