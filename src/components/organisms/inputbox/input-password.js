import { Input } from "../../";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import "./inputbox.css";
export function InputPass({ title: name, inputClass, inputPlaceHolder }) {
  const [visiblility, setVisiblility] = useState(false);

  return (
    <label className="flex flex-column">
      <span className="text-white">{name}</span>
      <div className="password-container">
        <Input
          inputClass={inputClass}
          inputType={visiblility ? "text" : "password"}
          inputPlaceHolder={inputPlaceHolder}
        />
        <BsEyeFill
          onClick={() => setVisiblility(!visiblility)}
          style={{
            position: "absolute",
            marginLeft: "13rem",
            cursor: "pointer",
          }}
          color="var(--primary-400)"
        />
      </div>
    </label>
  );
}
