'use server';
import Image from "next/image";
import DialogForm from "./components/dialogForm/DialogForm";
import { getUserName } from "./storage/storage";
import { getFormattedCurrentDate } from "./utils/date-formatted";

export default async function Home() {

  const userName = await getUserName();
  const date = getFormattedCurrentDate();

  return (
    <main id="page__home">
      {!userName && <DialogForm />}
      <header>
        <nav>
          <Image src="logo.svg" alt="company logo" height={36} width={150} />
          {userName && <p>Bem-vindo de volta, {userName}</p>}
          <span>{date}</span>
        </nav>
      </header>
    </main>
  );
}
