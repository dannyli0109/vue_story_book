import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Button01 from '../src/stories/Button01.vue';

import Loading01 from '../src/stories/Loading01.vue';

import ComponentExercise01 from '../src/stories/Component01/ComponentExercise01.vue'

import AppForm from '../src/stories/AppForm.vue'

import Directive from '../src/stories/Directive.vue'

import CssExercise from '../src/stories/css_exercise/CssExercise.vue'

import Carousel from '../src/stories/Carousel/Carousel.vue'

import MovingMask from '../src/stories/MovingMask/MovingMask.vue'



// Register custom components.
Vue.component('button-01', Button01);
Vue.component('loading-01', Loading01);
Vue.component('component-01', ComponentExercise01);
Vue.component('app-form', AppForm);
Vue.component('directive', Directive);
Vue.component('css-exercise-01', CssExercise);
Vue.component('carousel', Carousel);
Vue.component('moving-mask', MovingMask);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories');
}

configure(loadStories, module);
