import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type IconLink = {
  icon: React.ReactNode;
  to: string;
  label?: string
};

interface Props {
  dataTestId?: string;
  iconLinks: IconLink[];
}

const BottomNavbar = ({ iconLinks, dataTestId }: Props) => {
  return (
    <div
      className={classNames(
        "h-16 w-full rounded-3xl bg-gradient-to-br from-white/10 to-[#d2d2f6]",
        "fixed bottom-0 z-[100] my-4 shadow-md",
        "flex items-center justify-evenly backdrop-blur-lg lg:hidden"
      )}
      data-testid={dataTestId}
    >
      {iconLinks.map((icon) => (
        <NavLink
          key={uuidv4()}
          to={icon.to}
          end={icon.to === "/" ? true : false}
          className={({ isActive }) =>
            classNames("p-2 w-16 rounded-lg flex flex-col items-center",
            isActive ? "bg-slate-300 bg-opacity-50 font-bold" : undefined)
          }
        >
          {icon.icon}
          <span className="text-xs font-bold">{icon.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavbar;
