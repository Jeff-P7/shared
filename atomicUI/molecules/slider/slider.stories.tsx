// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Slider from './slider.component';
// import SliderProps from './slider.props';
// import { propToArgTypes } from '../../../global';

// //π This default export determines where your story goes in the story list
// export default {
//   /* π The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: 'Components/Sliders',
//   component: Slider,
//   args: SliderProps.default,
//   argTypes: propToArgTypes(SliderProps.argType),
//   parameters: {
//     layout: 'centered',
//   },
// } as ComponentMeta<typeof Slider>;

// //π We create a βSliderβ of how args map to rendering
// const Base: ComponentStory<typeof Slider> = (args) =>
//   args.children ? (
//     <Slider {...args}>{args.children}</Slider>
//   ) : (
//     <Slider {...args} />
//   );

// export const Default = Base.bind({});
// Default.args = {
//   /*π The args you need here will depend on your component */
// };
