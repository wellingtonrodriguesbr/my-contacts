import { ArrowRight, PencilSimpleLine, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Modal } from "../components/Modal";

export function Contacts() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <header className="bg-neutral-800 h-20 flex items-center justify-center">
        <div>
          <Link to="/">
            <button className="text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md transition-all hover:font-semibold flex items-center justify-center gap-2">
              Sair
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </header>
      <Container>
        <div className="flex flex-col mt-20 h-full">
          <div className="flex items-center justify-between">
            <h2 className="text-blue-500 text-2xl md:text-4xl font-semibold">
              Lista de contatos
            </h2>
            <button
              onClick={handleOpenModal}
              className="bg-blue-500 hover:bg-blue-700 transition-colors px-4 md:px-8 md:py-4 py-3 rounded-md font-semibold text-sm md:text-base"
            >
              Cadastrar novo
            </button>
          </div>

          <div className="mt-10">
            <ul className="flex flex-col gap-4 bg-neutral-800 md:p-12 py-10 px-6 rounded-md">
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 1
                <div className="flex gap-10">
                  <button>
                    <PencilSimpleLine size={24} />
                  </button>
                  <button className="text-red-500">
                    <TrashSimple size={24} />
                  </button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 2
                <div className="flex gap-10">
                  <button>
                    <PencilSimpleLine size={24} />
                  </button>
                  <button className="text-red-500">
                    <TrashSimple size={24} />
                  </button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 3
                <div className="flex gap-10">
                  <button>
                    <PencilSimpleLine size={24} />
                  </button>
                  <button className="text-red-500">
                    <TrashSimple size={24} />
                  </button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 4
                <div className="flex gap-10">
                  <button>
                    <PencilSimpleLine size={24} />
                  </button>
                  <button className="text-red-500">
                    <TrashSimple size={24} />
                  </button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 5
                <div className="flex gap-10">
                  <button>
                    <PencilSimpleLine size={24} />
                  </button>
                  <button className="text-red-500">
                    <TrashSimple size={24} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Modal open={isOpenModal} onClose={handleCloseModal} />
    </>
  );
}
