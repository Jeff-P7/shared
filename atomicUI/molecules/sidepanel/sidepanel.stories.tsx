import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidepanel from './sidepanel.component';
import SidepanelProps from './sidepanel.props';
import { propToArgTypes } from '../../../global';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/UI/Sidepanel',
  component: Sidepanel,
  args: SidepanelProps.default,
  argTypes: propToArgTypes(SidepanelProps.argType),
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Sidepanel>;

//π We create a βSidepanelβ of how args map to rendering
const Base: ComponentStory<typeof Sidepanel> = (args) =>
  args.children ? (
    <Sidepanel {...args}>{args.children}</Sidepanel>
  ) : (
    <Sidepanel {...args} />
  );

export const Default = Base.bind({});
Default.args = {
  /*π The args you need here will depend on your component */
};
