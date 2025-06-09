import { ref, set, get, child } from "firebase/database";
import { database } from "../firebaseConfig";

export function escreverDados(userId: string, nome: string, email: string) {
  set(ref(database, 'users/' + userId), {
    username: nome,
    email: email
  });
}

export function lerDados(userId: string) {
  const dbRef = ref(database);
  return get(child(dbRef, `users/${userId}`));
}
