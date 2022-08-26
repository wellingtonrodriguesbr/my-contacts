import { ChangeEvent, useState } from "react";
import { phoneFormatter } from "../../utils/phoneFormatter";
import { Input } from "./Input";

interface FormProps {
  onClose?: () => void;
}

export function Form({ onClose }: FormProps) {
  const [phone, setPhone] = useState("");

  function handleChangePhone(event: ChangeEvent<HTMLInputElement>) {
    const phone = phoneFormatter(event.target.value);
    setPhone(phone);
  }

  return (
    <form action="" className="flex flex-col gap-4 w-full">
      <Input label="Nome" type="text" name="name" id="name" />
      <Input label="E-mail" type="email" name="email" id="email" />
      <Input
        label="Telefone"
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={phone}
        onChange={handleChangePhone}
        placeholder="Apenas números com DDD"
      />

      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className="bg-blue-500 w-full uppercase font-semibold p-4 rounded-md hover:bg-blue-700 transition-colors mt-4"
        >
          Cadastrar
        </button>

        <button
          onClick={onClose}
          type="submit"
          className="border border-red-500 text-red-500 w-full uppercase font-semibold p-4 rounded-md transition-colors mt-4"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
