import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Button01 from './Button01.vue';

import Loading01 from './Loading01.vue';

import ComponentExercise01 from './Component01/ComponentExercise01.vue'

import AppForm from './AppForm.vue'

import Directive from './Directive.vue'

import CssExercise from './css_exercise/CssExercise.vue'

import Carousel from './Carousel/Carousel.vue'



storiesOf('Button', module)
    .add('Ghost Button to Equaliser Loading Animation', () => ({
        template: '<button-01></button-01>'
    }));


storiesOf('Loading', module)
    .add('Snake outline loading', () => ({
        template: '<loading-01></loading-01>'
    }));

storiesOf('Component Exercise', module)
    .add("Component exercise 01", () => ({
        template: '<component-01></component-01>'
    }))
    .add("Form", () => ({
        template: '<app-form></app-form>'
    }))
    .add("Directive", () => ({
        template: '<directive></directive>'
    }));

storiesOf('Css', module)
    .add('Project1', () => ({
        template: '<css-exercise-01></css-exercise-01>'
    }))

storiesOf('Carousel', module)
    .add("Carousel", () => ({
        template: '<carousel></carousel>'
    }))
