import { Select as BaseSelect } from "antd";
import { FC } from "react";
import {useCart} from "../../recoil/hooks/useCart"

const { Option } = BaseSelect;

interface SelectProps {
  id: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  options: Array<{
    key: string;
    value: string;
    label: string;
  }>;
}

const Select: FC<SelectProps> = ({ id, placeholder = "Select an option", options, onChange, onSearch }) => {
  const [_, addItem] = useCart();
  return (<BaseSelect
    showSearch
    placeholder={placeholder}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
    }
  >
    {options.map(({ value, label }) => (
      <Option key={value} value={value}>
        {label}
      </Option>))
    }
  </BaseSelect>)
};

export default Select;
