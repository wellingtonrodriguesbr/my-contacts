import { Link } from "react-router-dom";
import { Container } from "../components/Container";

export function Register() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-6 md:gap-12 items-center h-screen">
        <div className="bg-neutral-800 py-12 px-6 md:p-12 rounded-md w-full max-w-lg">
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-neutral-300">
                Nome completo:
              </label>
              <input
                className="bg-neutral-900 p-4 rounded-md"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-neutral-300">
                E-mail:
              </label>
              <input
                className="bg-neutral-900 p-4 rounded-md placeholder:opacity-50"
                type="email"
                name="email"
                id="email"
                required
                placeholder="seuemail@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-neutral-300">
                Senha:
              </label>
              <input
                className="bg-neutral-900 p-4 rounded-md"
                type="password"
                name="password"
                required
                id="password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 uppercase font-semibold p-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </button>
          </form>

          <div className="flex justify-center gap-1 mt-6">
            <p>Já tem uma conta?</p>
            <Link to="/">
              <a className="text-blue-500 underline hover:text-blue-300 transition-colors">
                Faça login
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-neutral-400">My Contacts</h2>
          <h1 className="text-2xl md:text-5xl max-w-xl font-semibold md:leading-tight mt-4">
            Cadastre-se para acessar sua agenda
          </h1>
        </div>
      </div>
    </Container>
  );
}
