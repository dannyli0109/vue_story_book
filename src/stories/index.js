import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Button01 from './Button01.vue';

import Loading01 from './Loading01.vue';




storiesOf('Button', module)
  .add('Ghost Button to Equaliser Loading Animation', () => ({
    template: '<button-01></button-01>'
  }));


storiesOf('Loading', module)
  .add('Snake outline loading', () => ({
    template: '<loading-01></loading-01>'
  }));
