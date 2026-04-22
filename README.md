# Repositorio de lo trabajado en clase

## Comandos básicos de GIT

- `git init` -> solo la primera vez  
- `git config user.name miusuario` -> la primera vez  
- `git config user.email miemail@mail.com` -> la primera vez  
- `git remote add origin https://github.com/miusuario/mirepositorio.git` -> configurar repositorio remoto  

Creamos un `README.md`

- `git status` -> para ver estado de seguimiento (aparece en rojo)  
- `git add .` o `git add ruta/nombreDeArchivo` -> marcar archivos  
- `git status` -> verificar (aparece en verde)  
- `git commit -m "primer commit"` -> guardar en local  
- `git branch -M main` -> cambiar nombre de rama  
- `git push -u origin main` -> subir al repositorio  

---

## Trabajo diario

- `git pull` -> bajar cambios y sincronizar  
- `git add .`  
- `git status`  
- `git commit -m "mensaje sobre lo trabajado"`  
- `git push`  

---

## Clonar repositorio

- `git clone https://github.com/miusuario/mirepositorio.git`  
- `git config user.name miusuario`  
- `git config user.email miemail@mail.com`  

---

## Comandos básicos de NPM

- `npm init -y` -> solo la primera vez  
- Revisar `package.json`  
- `npm install paquete` -> instalar dependencias  
- Configurar scripts (ej: `"dev": "node index.js"`)  
- `npm run dev` -> ejecutar  
