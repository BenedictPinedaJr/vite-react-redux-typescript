import classnames from "classnames";
import { Dispatch, SetStateAction } from "react";

interface Props {
  className?: string;
  dataTestId?: string;
  onChange: (e:any) => void | ((e:any) => Dispatch<SetStateAction<any>>);
  value?: string;
  defaultValue?: string;
  label?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isDisabled?: boolean;
}

const InputField = ({
  className,
  dataTestId,
  label,
  prefixIcon,
  suffixIcon,
  isDisabled = false,
  value,
  defaultValue,
  onChange
}: Props) => {
  return (
    <div className="m-3 flex flex-col">
      <label className="font-bold pb-1">{label}</label>
      <div
        className={classnames(
          className,
          { "cursor-not-allowed": isDisabled },
          "flex items-center rounded-md border border-emerald-700",
          "p-1",
          "focus-within:border-2"
        )}
      >
        {prefixIcon}
        <input
          className={classnames(
            { "cursor-not-allowed": isDisabled },
            "w-full bg-transparent focus:outline-none"
          )}
          onChange={onChange}
          disabled={isDisabled}
          data-testid={dataTestId}
          value={value}
          defaultValue={defaultValue}
        />
        {suffixIcon}
      </div>
    </div>
  );
};

export default InputField;
