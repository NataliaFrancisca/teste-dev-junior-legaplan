'use server';
import { cookies } from "next/headers";

const ONE_YEAR = 365 * 24 * 60 * 60;
const STORAGE_TASKS = "tasks";
const DEFAULT_STORAGE = {checked: [], unchecked: []};
const STORAGE_USERNAME = "username";

export async function initializeStorage(){
    const tasks = cookies().get(STORAGE_TASKS);

    if(!tasks){
      cookies().set(STORAGE_TASKS, JSON.stringify(DEFAULT_STORAGE), {
        maxAge: ONE_YEAR
      });
    };
}

export async function setUserName(name: string){
  cookies().set(STORAGE_USERNAME, name, {
    maxAge: ONE_YEAR
  });
}

export async function getUserName(){
  const cookie = cookies().get(STORAGE_USERNAME);

  if(cookie && cookie.value){
    return cookie.value;
  }

  return null;
}