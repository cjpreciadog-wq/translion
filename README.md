# Translion Logistics — sitio web

Sitio de una sola página con botones que llevan directo a WhatsApp con
un mensaje predeterminado. No requiere backend ni base de datos: son
solo archivos estáticos.

## Archivos

- `index.html` — el contenido y la estructura del sitio.
- `style.css` — colores, tipografía y estilos.
- `script.js` — arma los enlaces de WhatsApp (número + mensaje) y el
  año del pie de página.
- `assets/logo.png` — el logo de Translion Logistics (recortado y con
  fondo transparente) usado en la barra de navegación.

## Personalizar

- **Número de WhatsApp / mensaje predeterminado:** en `script.js`,
  constantes `WHATSAPP_NUMBER` y `DEFAULT_MESSAGE`.
- **Textos:** directamente en `index.html`.
- **Colores y tipografía:** en `style.css`, variables dentro de `:root`.
  Los colores (`--green`, `--blue`, `--text` navy) y las tipografías
  (Montserrat para títulos, Manrope para texto) se tomaron del logo.
- **Logo:** reemplaza `assets/logo.png` si actualizas el logo de la
  empresa.

## Publicar el sitio en GitHub Pages (gratis)

1. Crea un repositorio nuevo en tu cuenta de GitHub.
2. Sube todos los archivos de esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Sitio web Translion Logistics"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**.
4. En "Source", elige la rama `main` y la carpeta `/ (root)`.
5. En un par de minutos tu sitio estará disponible en:

   ```
   https://TU-USUARIO.github.io/TU-REPO/
   ```

Ese enlace es público y accesible desde cualquier lugar del mundo.
