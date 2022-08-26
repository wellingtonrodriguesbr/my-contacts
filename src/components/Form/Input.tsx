interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

export function Input({
  label,
  type,
  name,
  id,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-neutral-500">
        {label}:
      </label>
      <input
        className="bg-neutral-800 p-4 rounded-md placeholder:opacity-50"
        type={type}
        name={name}
        id={id}
        required
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
