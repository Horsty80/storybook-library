import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

/**
 * Imported icon
 */
import SvgUmbrella from "../../../src/atoms/icons/SvgUmbrella";
import SvgUsine from "../../../src/atoms/icons/SvgUsine";
import SvgValeurAjoutee from "../../../src/atoms/icons/SvgValeurAjoutee";
import SvgKanomaLogoFilaireBleu from "../../../src/atoms/icons/SvgKanomaLogoFilaireBleu";
import SvgLogoPago from "../../../src/atoms/icons/SvgLogoPago";
import SvgLogoPago1 from "../../../src/atoms/icons/SvgLogoPago1";
import SvgPersoG from "../../../src/atoms/icons/SvgPersoG";
import SvgPersoG100 from "../../../src/atoms/icons/SvgPersoG100";
import SvgPersoP from "../../../src/atoms/icons/SvgPersoP";
import SvgPersoP1100 from "../../../src/atoms/icons/SvgPersoP1100";
import SvgBulletPoint from "../../../src/atoms/icons/SvgBulletPoint";
import SvgCooperation from "../../../src/atoms/icons/SvgCooperation";
import SvgHumilite from "../../../src/atoms/icons/SvgHumilite";
import SvgPlaisir from "../../../src/atoms/icons/SvgPlaisir";
import SvgRadar from "../../../src/atoms/icons/SvgRadar";
import SvgRocket from "../../../src/atoms/icons/SvgRocket";
import SvgTruck from "../../../src/atoms/icons/SvgTruck";

const fullConfig = resolveConfig(tailwindConfig);
//@ts-ignore
const primary = fullConfig.theme.colors.primary;
//@ts-ignore
const secondary = fullConfig.theme.colors.secondary;

const iconMap = {
  SvgUmbrella,
  SvgUsine,
  SvgValeurAjoutee,
  SvgKanomaLogoFilaireBleu,
  //   SvgLogoPago,
  //   SvgLogoPago1,
  SvgPersoG,
  //   SvgPersoG100,
  //   SvgPersoP,
  //   SvgPersoP1100,
  SvgBulletPoint,
  SvgCooperation,
  SvgHumilite,
  SvgPlaisir,
  SvgRadar,
  SvgRocket,
  SvgTruck,
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: SvgUmbrella,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fill: { control: "color" },
    children: {
      defaultValue: "SvgUmbrella",
      control: {
        options: {
          SvgUmbrella: "SvgUmbrella",
          SvgUsine: "SvgUsine",
          SvgValeurAjoutee: "SvgValeurAjoutee",
          SvgKanomaLogoFilaireBleu: "SvgKanomaLogoFilaireBleu",
          //   SvgLogoPago: 'SvgLogoPago',
          //   SvgLogoPago1: 'SvgLogoPago1',
          SvgPersoG: "SvgPersoG",
          //   SvgPersoG100: 'SvgPersoG100',
          //   SvgPersoP: 'SvgPersoP',
          //   SvgPersoP1100: 'SvgPersoP1100',
          SvgBulletPoint: "SvgBulletPoint",
          SvgCooperation: "SvgCooperation",
          SvgHumilite: "SvgHumilite",
          SvgPlaisir: "SvgPlaisir",
          SvgRadar: "SvgRadar",
          SvgRocket: "SvgRocket",
          SvgTruck: "SvgTruck",
        },
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof SvgUmbrella>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SvgUmbrella> = (args) => {
  const Icon = iconMap[args.children as string];
  return <Icon {...args} />;
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  fill: primary,
  children: "SvgUmbrella",
};
Secondary.args = {
  fill: secondary,
  children: "SvgUmbrella",
};
