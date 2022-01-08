import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import SvgUmbrella from "../../src/atoms/icons/SvgUmbrella";
import SvgUsine from "../../src/atoms/icons/SvgUsine";
import SvgValeurAjoutee from "../../src/atoms/icons/SvgValeurAjoutee";
import SvgKanomaLogoFilaireBleu from "../../src/atoms/icons/SvgKanomaLogoFilaireBleu";
import SvgPersoG from "../../src/atoms/icons/SvgPersoG";

const iconMap = {
  SvgUmbrella,
  SvgUsine,
  SvgValeurAjoutee,
  SvgKanomaLogoFilaireBleu,
  SvgPersoG,
};

export interface Props {
  color: "primary" | "secondary";
}

const fullConfig = resolveConfig(tailwindConfig);
//@ts-ignore
const primary = fullConfig.theme.colors.primary;
//@ts-ignore
const secondary = fullConfig.theme.colors.secondary;
const sizeLimit = 196;

export const ThemeIcon = ({ color }: Props) => {
  const icons = Object.values(iconMap);
  console.log(icons[0].name);
  return (
    <div className="flex flex-wrap space-x-2">
      {icons.map((Icon, i) => (
        <div key={i} className="p-3 flex flex-col justify-center space-y-3">
          <Icon
            fill={color === "primary" ? primary : secondary}
            height={sizeLimit}
            width={sizeLimit}
          />
          <p className="text-center">
            <span className={`font-semibold`}>Icon name :</span>
            {Icon.name}
          </p>
        </div>
      ))}
    </div>
  );
};
