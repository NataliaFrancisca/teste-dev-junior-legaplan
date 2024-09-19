'use server'
 
import { cookies } from 'next/headers'
 
export async function saveUserName(name: string) {
  cookies().set('username', name);
}

export async function getUserName(){
  const username = cookies().get('username');
  if(username?.value){
    return username.value;
  }
  return null;
}