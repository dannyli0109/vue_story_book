import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Button01 from '../src/stories/Button01.vue';

import Loading01 from '../src/stories/Loading01.vue';


// Register custom components.
Vue.component('button-01', Button01);
Vue.component('loading-01', Loading01)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
