import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form>
      <label htmlFor="title">Qual seu comprometimento?</label>

      <input type="text" id="title" placeholder="ex.: Exercícios, dormir bem, etc..." autoFocus />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a frequência?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
