import { advancedAnimations } from '../../core/helpers/scrollAnimationConverter';

const SCROLL_ANIMATIONS = {
  NO_EFFECT: 'NO_EFFECT',
  FADE_IN: 'FADE_IN',
  GRAYSCALE: 'GRAYSCALE',
  SLIDE_UP: 'SLIDE_UP',
  EXPAND: 'EXPAND',
  SHRINK: 'SHRINK',
  ZOOM_OUT: 'ZOOM_OUT',
  ONE_COLOR: 'ONE_COLOR',
  MAIN_COLOR: 'MAIN_COLOR',
  BLUR: 'BLUR',
  ...Object.keys(advancedAnimations).reduce((result, key) => {
    result[key] = key;
    return result;
  }, {}), // add advanced animations to the list
};

export default SCROLL_ANIMATIONS;
