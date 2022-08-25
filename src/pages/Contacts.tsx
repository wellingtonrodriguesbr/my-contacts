import { Link } from "react-router-dom";
import { Container } from "../components/Container";

export function Contacts() {
  return (
    <>
      <header className="bg-neutral-800 h-20 flex items-center justify-center">
        <div>
          <Link to="/">
            <button className="text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-neutral-900 rounded-md transition-all hover:font-semibold">
              Sair
            </button>
          </Link>
        </div>
      </header>
      <Container>
        <div className="flex flex-col mt-20 h-full">
          <div className="flex gap-4 items-center justify-between">
            <h2 className="text-blue-500 text-3xl font-semibold md:max-w-full max-w-[200px]">
              Lista de contatos
            </h2>
            <button className="bg-blue-500 hover:bg-blue-700 transition-colors px-4 md:px-8 py-4 rounded-md font-semibold">
              Cadastrar novo
            </button>
          </div>

          <div className="mt-10">
            <ul className="flex flex-col gap-4 bg-neutral-800 p-12 rounded-md">
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 1
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 2
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 3
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 4
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </li>
              <li className="bg-neutral-900 px-8 py-4 rounded-md flex justify-between items-center">
                Contato 5
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
