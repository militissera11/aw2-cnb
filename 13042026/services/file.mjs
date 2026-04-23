import fs from 'fs/promises';

export async function guardarArchivo(ruta, data) {
  await fs.writeFile(ruta, JSON.stringify(data, null, 2));
}

export async function leerArchivo(ruta) {
  const data = await fs.readFile(ruta, 'utf-8');
  return JSON.parse(data);
}