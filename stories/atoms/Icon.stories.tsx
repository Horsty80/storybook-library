import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
/**
 * Imported icon
 */
import SvgUmbrella from '../../src/atoms/icons/SvgUmbrella';
import SvgUsine from '../../src/atoms/icons/SvgUsine';
import SvgValeurAjoutee from '../../src/atoms/icons/SvgValeurAjoutee';
import SvgKanomaLogoFilaireBleu from '../../src/atoms/icons/SvgKanomaLogoFilaireBleu';
import SvgPersoG from '../../src/atoms/icons/SvgPersoG';

const fullConfig = resolveConfig(tailwindConfig);
//@ts-ignore
const primary = fullConfig.theme.colors.primary;

export default {
  component: SvgUmbrella,
  argTypes: {
    fill: { control: 'color' },
  },
} as ComponentMeta<typeof SvgUmbrella>;

const TemplateUmbrela: ComponentStory<typeof SvgUmbrella> = (args) => (
  <SvgUmbrella {...args} />
);
const TemplateUsine: ComponentStory<typeof SvgUsine> = (args) => (
  <SvgUsine {...args} />
);
const TemplateValeurAjoutee: ComponentStory<typeof SvgValeurAjoutee> = (
  args
) => <SvgValeurAjoutee {...args} />;

const TemplateKanomaLogoFilaireBleu: ComponentStory<
  typeof SvgKanomaLogoFilaireBleu
> = (args) => <SvgKanomaLogoFilaireBleu {...args} />;

const TemplatePersoG: ComponentStory<typeof SvgPersoG> = (args) => (
  <SvgPersoG {...args} />
);

export const Umbrella = TemplateUmbrela.bind({});
export const Usine = TemplateUsine.bind({});
export const ValeurAjoutee = TemplateValeurAjoutee.bind({});
export const KanomaLogoFilaireBleu = TemplateKanomaLogoFilaireBleu.bind({});
export const PersoG = TemplatePersoG.bind({});

Umbrella.args = {
  fill: primary,
};
Usine.args = {
  fill: primary,
};
ValeurAjoutee.args = {
  fill: primary,
};
KanomaLogoFilaireBleu.args = {
  fill: primary,
};
PersoG.args = {
  fill: primary,
};
