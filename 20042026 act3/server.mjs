import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { getUsers, getFilteredUsers } from './UserService.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const dataFilePath = path.join(__dirname, 'users.json');

function sendJsonResponse(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data, null, 2));
}

function sendNotFound(res) {
  sendJsonResponse(res, 404, { error: 'Recurso no encontrado' });
}

async function handleUsersRoute(res) {
  const users = await getUsers(dataFilePath);
  sendJsonResponse(res, 200, users);
}

async function handleFilteredUsersRoute(res) {
  const filteredUsers = await getFilteredUsers(dataFilePath);
  sendJsonResponse(res, 200, filteredUsers);
}

const server = http.createServer(async (req, res) => {
  try {
    const { url, method } = req;

    if (method === 'GET' && url === '/usuarios') {
      await handleUsersRoute(res);
      return;
    }

    if (method === 'GET' && url === '/usuarios/filtrados') {
      await handleFilteredUsersRoute(res);
      return;
    }

    sendNotFound(res);
  } catch (error) {
    console.error('Error del servidor:', error);
    sendJsonResponse(res, 500, { error: 'Error interno del servidor' });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});