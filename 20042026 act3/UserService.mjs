import { saveJsonFile, readJsonFile } from './FileUtils.mjs';

const API_URL = 'https://api.escuelajs.co/api/v1/users';

export async function fetchUsersFromApi() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error al consultar API externa: ${response.status}`);
  }

  return await response.json();
}

export async function getUsers(filePath) {
  const users = await fetchUsersFromApi();
  await saveJsonFile(filePath, users);
  return await readJsonFile(filePath);
}

export async function getFilteredUsers(filePath) {
  const users = await getUsers(filePath);
  return users.filter((user) => user.id < 10);
}