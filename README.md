# 🌍 Landing Page de Turismo - Astro + TailwindCSS

Una landing page moderna y responsiva para una empresa de turismo, construida con **Astro** y **TailwindCSS**.

## 🎨 Características

✅ **Diseño Moderno y Minimalista**
- Paleta de colores profesional (Celeste turismo #0EA5E9, Azul oscuro #0369A1)
- Espacios amplios y tipografía clara (Inter)
- Totalmente responsive (Mobile, Tablet, Desktop)

✅ **Animaciones Suaves**
- Fade-in y Slide-up en elementos principales
- Hover effects en tarjetas y botones
- Transiciones fluidas de 0.3s a 0.7s

✅ **Secciones Completas**
- Hero Section con imagen de fondo
- Grid de destinos populares (6 tarjetas)
- Beneficios con iconografía
- Testimonios de clientes
- Call To Action final
- Footer con redes sociales

✅ **Componentes Astro Separados**
- Estructura modular y mantenible
- Cada sección en su propio archivo
- Layout base reutilizable

## 📁 Estructura del Proyecto

```
turismo-landing/
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Sección principal
│   │   ├── Destinos.astro      # Grid de destinos
│   │   ├── Beneficios.astro    # Por qué elegir
│   │   ├── Testimonios.astro   # Opiniones de clientes
│   │   ├── CTA.astro           # Call to action
│   │   └── Footer.astro        # Pie de página
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout principal
│   └── pages/
│       └── index.astro         # Página de inicio
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.mjs         # Configuración de TailwindCSS
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias
└── README.md                   # Este archivo
```

## 🚀 Instalación y Uso

### Requisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**
```bash
git clone <tu-repo>
cd turismo-landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`

4. **Compilar para producción**
```bash
npm run build
```

5. **Vista previa de producción**
```bash
npm run preview
```

## 🎯 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Primario | #0EA5E9 | Botones, acentos |
| Secundario | #0369A1 | Fondos, headers |
| Fondo | #F0F9FF | Fondo general |
| Texto Principal | #0F172A | Títulos, texto |
| Texto Secundario | #334155 | Descripciones |
| Highlight | #22D3EE | Botones destacados |

## 📐 Espaciado Responsive

- **Mobile**: `px-6` (24px)
- **Tablet**: `md:px-12` (48px)
- **Desktop**: `lg:px-20` (80px)

- **Secciones**: `py-20 md:py-28 lg:py-32`
- **Hero**: `py-28`

## ✨ Animaciones

- **Fade-in**: Aparición suave (0.7s)
- **Slide-up**: Deslizamiento hacia arriba (0.7s)
- **Scale**: Escala en hover (0.3s)
- **Delays**: 0.1s a 0.5s entre elementos

## 🖼️ Imágenes

Las imágenes utilizadas son placeholders de Unsplash. Para usar imágenes propias:

1. Reemplaza las URLs en cada componente
2. Coloca las imágenes en `public/images/`
3. Actualiza las rutas en los componentes

Ejemplo:
```astro
<!-- Antes -->
style="background-image: url('https://images.unsplash.com/...')"

<!-- Después -->
style="background-image: url('/images/tu-imagen.jpg')"
```

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.mjs`:
```javascript
colors: {
  'turismo-primary': '#TU_COLOR',
  'turismo-secondary': '#TU_COLOR',
  // ...
}
```

### Cambiar tipografía
Edita `src/layouts/BaseLayout.astro` y `tailwind.config.mjs`:
```javascript
fontFamily: {
  'inter': ['Tu-Fuente', 'sans-serif'],
}
```

### Agregar nuevas secciones
1. Crea un nuevo archivo en `src/components/`
2. Importa en `src/pages/index.astro`
3. Agrega el componente en el orden deseado

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles (iOS/Android)

## 📝 Notas Importantes

- Todas las animaciones usan CSS puro (sin dependencias externas)
- Los paddings están optimizados para cada breakpoint
- Las imágenes son responsivas y optimizadas
- El código está comentado para fácil mantenimiento

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Configura en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-usuario.github.io/turismo-landing',
  base: '/turismo-landing',
});
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado con ❤️ para empresas de turismo que desean una presencia web moderna.

---

**¿Necesitas ayuda?** Revisa la [documentación de Astro](https://docs.astro.build) o [TailwindCSS](https://tailwindcss.com/docs)
# Landing-empresa-turismo
