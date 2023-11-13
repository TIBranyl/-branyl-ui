import {
  ComponentProps,
  forwardRef,
  ElementRef,
  InputHTMLAttributes,
} from "react";
import { FormTextContainer, Input, Prefix } from "./styles";
import { Text } from "../../Text";

interface FormTextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: string | JSX.Element;
}

export interface FormTextProps extends FormTextInputProps {
  text?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const FormText = forwardRef<ElementRef<typeof Input>, FormTextProps>(
  ({ prefix, text, as = "input", ...props }: FormTextProps, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "$2" }}>
        {!!text && <Text>{text}</Text>}
        <FormTextContainer>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input as={as} ref={ref} {...props} />
        </FormTextContainer>
      </div>
    );
  }
);

FormText.displayName = "FormText";
