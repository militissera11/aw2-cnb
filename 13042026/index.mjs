import path from 'path';
import { fileURLToPath } from 'url';
import { obtenerUsuarios } from './services/api.mjs';
import { guardarArchivo, leerArchivo } from './services/file.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaArchivo = path.join(__dirname, 'data', 'users.json');

try {
  const usuarios = await obtenerUsuarios();

  await guardarArchivo(rutaArchivo, usuarios);
  console.log('✅ Datos guardados');

  const usuariosLeidos = await leerArchivo(rutaArchivo);

  console.log('📄 Usuarios:');
  console.log(usuariosLeidos);

} catch (error) {
  console.error('❌ Error:', error.message);
}