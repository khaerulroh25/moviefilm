import Input from "../atoms/Input";

interface FormGroupProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function FormGroup({
  label,
  placeholder,
  type = "text",
}: FormGroupProps) {
  return (
    <div className="flex flex-col gap-[4px] md:gap-[6px]">
      <label className="text-[10px] md:text-[18px] text-white">{label}</label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
