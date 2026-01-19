import Input from "../atoms/Input";
import eyeOffIcon from "../../img/icons/eye-off.png";

interface PasswordFieldProps {
  label: string;
  placeholder: string;
}

export default function PasswordField({
  label,
  placeholder,
}: PasswordFieldProps) {
  return (
    <div className="flex flex-col gap-[4px] md:gap-[6px]">
      <label className="font-sans font-normal text-[10px] md:text-[18px] leading-[22.4px] tracking-[0.2px] text-white">
        {label}
      </label>

      <div className="relative">
        <Input type="password" placeholder={placeholder} className="pr-12" />

        <span
          className="
            absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
        >
          <img
            src={eyeOffIcon}
            alt="Password hidden"
            className="w-[11px] h-[10px] md:w-[18px] md:h-[15px]"
          />
        </span>
      </div>
    </div>
  );
}
