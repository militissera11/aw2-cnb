export async function obtenerUsuarios() {
  const response = await fetch('https://api.escuelajs.co/api/v1/users');
  const data = await response.json();

  return data.map(user => ({
    id: user.id,
    email: user.email,
    name: user.name
  }));
}