import { forwardRef, HTMLAttributes, useState, useEffect, useRef } from "react";
import {
  AppearanceContainer,
  Container,
  OptionCase,
  SelectContainer,
  Selection,
  Option,
  Input,
} from "./styles";
import { CaretDown } from "@phosphor-icons/react";
import { ThreeDots } from "react-loader-spinner";

interface Option {
  key: string;
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  children?: React.ReactNode;
  options?: Option[];
  loadOptions?: (search: string) => Promise<Option[]>;
  onOptionChange?: (option: Option) => void;
  isAsync?: boolean;
  placeholder?: string;
  noOptionsMessage?: string;
  loadingMessage?: string | React.ReactNode;
  defaultValue?: string | number | readonly string[];
}

export const Select = forwardRef<HTMLTableElement, SelectProps>(
  (
    {
      children,
      options,
      onOptionChange,
      loadOptions,
      isAsync,
      placeholder,
      noOptionsMessage,
      loadingMessage,
      ...props
    }: SelectProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [optionsState, setOptionsState] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option | undefined>(
      options?.[0]
    );
    const [search, setSearch] = useState<string>(" ");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      setSearch(option.label);
      setIsOpen(false);
      if (onOptionChange) {
        onOptionChange(option);
      }
    };

    const containerRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !(containerRef.current as any).contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [containerRef]);

    useEffect(() => {
      if (isAsync && loadOptions) {
        setIsLoading(true);
        loadOptions(search || " ").then((loadedOptions) => {
          setOptionsState(loadedOptions);
          setSelectedOption(loadedOptions[0]);
          setIsLoading(false);
        });
      } else if (options) {
        setOptionsState(options);
        setSelectedOption(options[0]);
      }
    }, [loadOptions, isAsync, options]);

    return (
      <span ref={containerRef}>
        <Container onClick={toggleDropdown}>
          <SelectContainer>
            <Selection>
              {isAsync ? (
                <Input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={placeholder}
                  style={{ width: "100%" }}
                  value={isAsync && !isLoading ? search : " "}
                />
              ) : (
                selectedOption?.label
              )}
            </Selection>
          </SelectContainer>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height={25}
              width={25}
              color="#d1d5db"
              visible={isLoading}
            />
          </div>
          <AppearanceContainer onClick={toggleDropdown}>
            <CaretDown />
          </AppearanceContainer>
        </Container>
        {isOpen && (
          <OptionCase>
            {isLoading && <Option>{loadingMessage}</Option>}{" "}
            {!isLoading && optionsState.length === 0 && (
              <Option>{noOptionsMessage}</Option>
            )}
            {!isLoading &&
              optionsState.map((option) => (
                <Option
                  key={option.key}
                  onClick={() => handleOptionClick(option)}
                  variant={
                    selectedOption?.key === option.key
                      ? "selected"
                      : "unselected"
                  }
                >
                  {option.label}
                </Option>
              ))}
          </OptionCase>
        )}
      </span>
    );
  }
);

Select.displayName = "Select";
