import { writeFile, readFile } from 'fs/promises';

export async function saveJsonFile(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function readJsonFile(filePath) {
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content);
}