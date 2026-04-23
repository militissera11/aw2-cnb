import http from 'http';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario para usar __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del archivo JSON
const filePath = path.join(__dirname, 'users.json');

// Puerto
const PORT = 3000;

// Crear servidor
const server = http.createServer(async (req, res) => {
  try {
    // ✅ Solo permitir GET /usuarios
    if (req.url === '/usuarios' && req.method === 'GET') {
      
      // 1. Obtener datos de la API externa
      const response = await fetch('https://api.escuelajs.co/api/v1/users');
      const data = await response.json();

      // 2. Guardar en archivo JSON
      await writeFile(filePath, JSON.stringify(data, null, 2));

      // 3. Leer archivo
      const fileData = await readFile(filePath, 'utf-8');

      // 4. Responder al cliente
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(fileData);

    } else {
      // ❌ Ruta no encontrada
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: 'Recurso no encontrado'
      }));
    }

  } catch (error) {
    // ⚠️ Manejo de errores
    console.error(error);

    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Error interno del servidor'
    }));
  }
});

// Levantar servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});