# Sitio de tours en Montevideo - Gabriela Piven

Sitio estático orientado a turismo cultural de alto valor con dos universos visuales:

- **Sitio regular** para city tours en Montevideo con estética uruguaya.
- **Sitio especial de marca** para **Montevideo by Night** en blanco y negro.

## Páginas

- `index.html`: inicio general con propuesta de valor.
- `tours.html`: detalle de tours regulares.
- `perfil.html`: perfil profesional de Gabriela Piven.
- `resenas.html`: enlaces a reseñas externas e independientes.
- `montevideo-by-night.html`: experiencia nocturna de marca separada.

## Diseño implementado

- Header tipo menú en todas las páginas.
- Lenguaje visual turístico inspirado en Uruguay para la web regular (`assets/uruguay-tourism-bg.svg`).
- Hero principal con visual de Plaza Independencia en formato SVG para compatibilidad de PR y blur suave (`assets/plaza-independencia-blur.svg`).
- Identidad monocroma para Montevideo by Night con medialunas de contorno blanco y estrellas (`assets/montevideo-night-sky.svg`).
- Copy optimizado para atraer turistas exigentes, priorizando confianza, calidad y diferenciación.
- Reseñas destacadas en home + página dedicada de reseñas con estrellas y placeholders por plataforma.
- Formulario de contacto y botón flotante de WhatsApp para consultas rápidas.
- Selector de idioma (Español / English / Português) con cambio automático del contenido según selección.
- Tour adicional: Punta del Este.

## Ejecutar en local

```bash
python3 -m http.server 4173
```

Abrir:

- `http://localhost:4173/index.html`
- `http://localhost:4173/montevideo-by-night.html`
