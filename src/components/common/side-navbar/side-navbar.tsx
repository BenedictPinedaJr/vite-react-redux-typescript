import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type Link = {
  to: string;
  label: string;
};

interface Props {
  links: Link[];
  dataTestId?: string;
  logo?: string
}

const SideNavbar = ({ links, dataTestId, logo }: Props) => {
  return (
    <div
      className="hidden w-60 flex-col bg-[#191624] px-4 py-10 sm:flex"
      data-testid={dataTestId}
    >
      <img src={logo} alt="Logo" className="w-full h-14 object-contain mb-4" />
      {links.map((link) => (
        <NavLink
          key={uuidv4()}
          to={link.to}
          end={link.to === "/" ? true : false}
          className={({ isActive }) =>
            classNames(
              "flex flex-col items-center rounded-lg p-2 text-white",
              isActive ? "bg-slate-300 bg-opacity-50 font-bold" : undefined
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SideNavbar;
