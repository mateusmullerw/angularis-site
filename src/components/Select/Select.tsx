import React from "react";
import "./Select.scss";

interface IOptions {
  label: string;
  value: number;
}
interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  caption?: string;
  disabled?: boolean;
  error?: boolean;
  options: Array<IOptions>;
}
const Select = (props: ISelectProps) => {
  const { label, caption, disabled, error, options, ...rest } = props;

  return (
    <label className={`select ${error ? "select--error" : ""}`}>
      {label}
      <select className="select__field" disabled={disabled} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value} aria-label={option.label}>
              {option.label}
            </option>
          );
        })}
      </select>
      <p className="select__caption">{caption}</p>
    </label>
  );
};

export default Select;
