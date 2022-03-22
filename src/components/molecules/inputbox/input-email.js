import { Input } from "../..";

export function InputTextBox({
  title: name,
  inputClass,
  inputPlaceHolder,
  inputType,
}) {
  return (
    <label className="flex flex-column">
      <span className="text-white">{name}</span>
      <Input
        inputClass={inputClass}
        inputType={inputType}
        inputPlaceHolder={inputPlaceHolder}
      />
    </label>
  );
}
