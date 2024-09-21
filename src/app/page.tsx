'use server';
import Image from "next/image";

import { getTasks } from "./storage/tasks";
import { getUserName } from "./storage/storage";
import { getFormattedCurrentDate } from "./utils/date-formatted";

import Tasks from "./components/Tasks/Tasks";
import DialogUserName from "./components/Dialog/DialogUserName";

export default async function Home() {
  const userName = await getUserName();
  const date = getFormattedCurrentDate();
  const tasks = await getTasks();

  return (
    <main id="page__home">
      {!userName && <DialogUserName />}

      <header>
        <nav>
          <Image src="logo.svg" alt="company logo" height={36} width={150} />
          {userName && <p className="p__message">Bem-vindo de volta, <span className="span__styled">{userName}</span></p>}
          <span className="span__date">{date}</span>
        </nav>
      </header>
      
      {tasks && <Tasks tasks={tasks} />}
    </main>
  );
}
