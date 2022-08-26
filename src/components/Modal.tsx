import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Form } from "./Form";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export function Modal({ open, onClose }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed w-screen h-screen inset-0 bg-black bg-opacity-75"
          onClick={onClose}
        />
        <Dialog.Content className="max-w-[20rem] md:max-w-[32rem] rounded-md px-6 md:px-12 py-16 md:py-10 bg-neutral-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title>
            <h3 className="text-xl">Cadastrar novo contato</h3>
          </Dialog.Title>
          <Dialog.Description className="mt-6">
            <Form onClose={onClose} />
          </Dialog.Description>
          <Dialog.Close
            onClick={onClose}
            className="absolute bg-transparent border-none top-6 right-6 leading-none cursor-pointer"
          >
            <X size={24} weight="regular" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
