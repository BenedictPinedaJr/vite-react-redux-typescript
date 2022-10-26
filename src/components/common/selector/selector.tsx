import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { Dispatch, SetStateAction } from "react";

interface Props {
  className?: string;
  dataTestId?: string;
  options: string[];
  value?: string;
  multipleValue?: string[];
  onChange: Dispatch<SetStateAction<any>>;
}

const Selector = ({
  className,
  dataTestId,
  options,
  value,
  multipleValue,
  onChange,
}: Props) => {
  return (
    <Listbox
      value={value || multipleValue}
      onChange={onChange}
      multiple={multipleValue && !value ? true : false}
    >
      <div
        className={classNames(className, "relative my-4")}
        data-testid={dataTestId}
      >
        <Listbox.Button
          className={classNames(
            "w-full bg-gradient-to-t from-white/10 to-[#d2d2f6] backdrop-blur-lg p-2 font-bold",
            "flex h-10 items-center rounded-lg"
          )}
        >
          {({ open }) => (
            <>
              {!multipleValue
                ? value
                : multipleValue.map((option: string) => (
                    <div
                      className={classNames(
                        "flex items-center rounded-md border border-black",
                        "z-10 mr-2 px-2"
                      )}
                      key={uuidv4()}
                    >
                      <span>{option}</span>
                      <VscClose
                        className="ml-1 font-bold"
                        size={20}
                        onClick={() =>
                          onChange(
                            multipleValue.filter(
                              (options: string) => options !== option
                            )
                          )
                        }
                      />
                    </div>
                  ))}
              {open ? (
                <FaChevronUp className="ml-auto mr-1" />
              ) : (
                <FaChevronDown className="ml-auto mr-1" />
              )}
            </>
          )}
        </Listbox.Button>
        <Listbox.Options
          className={classNames(
            "absolute z-50 mt-1 max-h-60 w-full bg-gradient-to-b from-white/10 to-[#d2d2f6] backdrop-blur-lg",
            "flex flex-col overflow-y-auto rounded-lg p-2 font-bold"
          )}
        >
          {options.map((option) => (
            <Listbox.Option
              className={({ active }) =>
                classNames(
                  "mt-1 p-1",
                  "cursor-pointer",
                  { "rounded-lg bg-slate-200 bg-opacity-80": active },
                  {
                    "rounded-lg bg-slate-200 bg-opacity-80":
                      multipleValue?.includes(option),
                  }
                )
              }
              key={uuidv4()}
              value={option}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Selector;
