import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
/**
 * Imported icon
 */
import SvgUmbrella from "../../src/atoms/icons/SvgUmbrella";
import SvgUsine from "../../src/atoms/icons/SvgUsine";
import SvgValeurAjoutee from "../../src/atoms/icons/SvgValeurAjoutee";
import SvgKanomaLogoFilaireBleu from "../../src/atoms/icons/SvgKanomaLogoFilaireBleu";
import SvgPersoG from "../../src/atoms/icons/SvgPersoG";
import SvgBulletPoint from "../../src/atoms/icons/SvgBulletPoint";
import SvgCooperation from "../../src/atoms/icons/SvgCooperation";
import SvgHumilite from "../../src/atoms/icons/SvgHumilite";
import SvgPlaisir from "../../src/atoms/icons/SvgPlaisir";
import SvgRadar from "../../src/atoms/icons/SvgRadar";
import SvgRocket from "../../src/atoms/icons/SvgRocket";
import SvgTruck from "../../src/atoms/icons/SvgTruck";

const fullConfig = resolveConfig(tailwindConfig);
//@ts-ignore
const primary = fullConfig.theme.colors.primary;

export default {
  component: SvgUmbrella,
  argTypes: {
    fill: { control: "color" },
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
const TemplateBulletPoint: ComponentStory<typeof SvgBulletPoint> = (args) => (
  <SvgBulletPoint {...args} />
);
const TemplateCooperation: ComponentStory<typeof SvgCooperation> = (args) => (
  <SvgCooperation {...args} />
);
const TemplateHumilite: ComponentStory<typeof SvgHumilite> = (args) => (
  <SvgHumilite {...args} />
);
const TemplatePlaisir: ComponentStory<typeof SvgPlaisir> = (args) => (
  <SvgPlaisir {...args} />
);
const TemplateRadar: ComponentStory<typeof SvgRadar> = (args) => (
  <SvgRadar {...args} />
);
const TemplateRocket: ComponentStory<typeof SvgRocket> = (args) => (
  <SvgRocket {...args} />
);
const TemplateTruck: ComponentStory<typeof SvgTruck> = (args) => (
  <SvgTruck {...args} />
);

export const Umbrella = TemplateUmbrela.bind({});
export const Usine = TemplateUsine.bind({});
export const ValeurAjoutee = TemplateValeurAjoutee.bind({});
export const KanomaLogoFilaireBleu = TemplateKanomaLogoFilaireBleu.bind({});
export const PersoG = TemplatePersoG.bind({});
export const BulletPoint = TemplateBulletPoint.bind({});
export const Cooperation = TemplateCooperation.bind({});
export const Humilite = TemplateHumilite.bind({});
export const Plaisir = TemplatePlaisir.bind({});
export const Radar = TemplateRadar.bind({});
export const Rocket = TemplateRocket.bind({});
export const Truck = TemplateTruck.bind({});

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
BulletPoint.args = {
  fill: primary,
};
Cooperation.args = {
  fill: primary,
};
Humilite.args = {
  fill: primary,
};
Plaisir.args = {
  fill: primary,
};
Radar.args = {
  fill: primary,
};
Rocket.args = {
  fill: primary,
};
Truck.args = {
  fill: primary,
};
