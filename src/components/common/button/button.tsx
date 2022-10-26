import classnames from "classnames";
import { VscLoading } from "react-icons/vsc";

interface Props {
  children: React.ReactNode;
  className?: string;
  dataTestId?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  asIconButton?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button = ({
  children,
  className,
  dataTestId,
  onClick,
  type = "button",
  isDisabled = false,
  isLoading = false,
  asIconButton = false,
  prefix,
  suffix,
}: Props) => {
  return (
    <button
      className={classnames(
        className,
        { "cursor-not-allowed bg-blue-700": isDisabled },
        asIconButton ? "rounded-full" : "rounded-md",
        "bg-blue-600 text-base font-bold text-white shadow-md",
        "m-3 flex items-center justify-center p-2",
        "transition hover:bg-blue-500 focus:outline-none active:translate-y-2"
      )}
      data-testid={dataTestId}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {isLoading ? <VscLoading className="mr-2 animate-spin" /> : null}
      {prefix}
      {children}
      {suffix}
    </button>
  );
};

export default Button;
