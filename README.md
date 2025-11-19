# ZalesMachine Website

Hecho por [Abi Marangoni](https://github.com/abrilmarangoni) para los chicos de ZalesMachine.

## Qué es esto

Landing page de ZalesMachine. Acá mostramos qué hacen, cómo funciona su sistema de automatización de ventas con IA, los precios y algunos casos de éxito. La idea era hacer algo moderno, limpio y que se vea bien tanto en mobile como desktop.

## Cómo correrlo

Necesitás Node.js 18+.

```bash
# Clonar el repo
git clone https://github.com/abrilmarangoni/inspo.git
cd inspo

# Instalar dependencias
npm install --legacy-peer-deps

# Correr en desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) y listo.

Para producción:
```bash
npm run build
npm start
```

## Stack que usamos

- **Next.js 16** - El framework base
- **TypeScript** - Para que todo esté tipado
- **Tailwind CSS** - Para los estilos
- **Framer Motion** - Para las animaciones suaves
- **Radix UI** - Algunos componentes base

## Cosas importantes

- Tiene soporte para inglés y español (todo traducible desde el contexto de idiomas)
- Es responsive, se ve bien en cualquier dispositivo
- Tema oscuro por defecto
- Tiene varias secciones: hero, features, pricing, ROI calculator, testimonials, FAQ, video, etc.

## Estructura

- `app/` - Páginas principales
- `components/` - Todos los componentes React
- `contexts/` - Contexto de idiomas (inglés/español)
- `public/` - Imágenes y assets

Si necesitás cambiar algo, la mayoría del contenido está en los componentes dentro de `components/`. Los precios están en `components/pricing-section.tsx` y las traducciones en `contexts/language-context.tsx`.

## Deploy

Se puede deployar en Vercel, Netlify o cualquier lado que soporte Next.js. En Vercel es súper fácil, conectás el repo y funciona.

---

Cualquier duda, preguntame.
