import { ComponentProps } from "react";

interface TextProps extends ComponentProps<'span'> {}

export function Text(props: TextProps) {
  return <span {...props} />
}