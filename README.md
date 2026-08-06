# Conan Informática - Sitio web

Este proyecto es el sitio web de Conan Soluciones Informáticas, una empresa dedicada a servicios técnicos, soporte informático y asistencia para hogares, negocios y empresas. El objetivo del sitio es presentar la marca, mostrar los servicios ofrecidos y facilitar la generación de presupuestos de forma rápida y profesional.

## De qué se trata el proyecto

El sitio está pensado como una presentación digital de la empresa y cuenta con dos funciones principales:

- Mostrar información institucional y de contacto.
- Permitir armar presupuestos mediante un cotizador interactivo.

La página principal funciona como una landing page de presentación, mientras que el cotizador permite seleccionar servicios frecuentes, aplicar tarifas según el tipo de cliente y generar un presupuesto listo para imprimir o guardar en PDF.

## Cómo funciona

El proyecto está desarrollado con Jekyll, lo que permite organizar el contenido en páginas, plantillas y parciales reutilizables.

- La portada principal se encuentra en [index.html](index.html).
- El cotizador está implementado en [cotizador.html](cotizador.html).
- Los diseños compartidos se encuentran en [_layouts/default.html](_layouts/default.html) y [_includes/]( _includes/).
- Los estilos y scripts propios del sitio están en [assets/css/main.css](assets/css/main.css) y [assets/js/app.js](assets/js/app.js).

El cotizador permite:

- elegir entre tarifas de Freelance/Taller o Local;
- seleccionar servicios frecuentes desde un menú dinámico;
- cargar automáticamente los servicios en la tabla del presupuesto;
- calcular subtotales y total general;
- imprimir o guardar el presupuesto como PDF.

## Estructura principal del proyecto

- [index.html](index.html): página de inicio y presentación del negocio.
- [cotizador.html](cotizador.html): página del cotizador de presupuestos.
- [_layouts/]( _layouts/): plantillas base para las páginas.
- [_includes/]( _includes/): fragmentos reutilizables del sitio.
- [assets/](assets/): estilos, scripts e imágenes.
- [images/](images/): recursos visuales del sitio.

## Ejecutar el proyecto localmente

Este sitio utiliza Jekyll, por lo que la forma recomendada de servirlo localmente es con el siguiente comando:

### 1. Abrir la carpeta del proyecto

```bash
cd /home/usuario/.../este-proyecto
```

### 2. Instalar Jekyll y Bundler

Si no los tienes instalados:

```bash
sudo gem install jekyll bundler
```

### 3. Iniciar el servidor

```bash
bundle exec jekyll serve
```

También puedes usar recarga automática:

```bash
bundle exec jekyll serve --livereload
```

### 4. Abrir en el navegador

Visita:

```text
http://127.0.0.1:4000/
```

## Alternativa rápida sin Jekyll

Si solo quieres ver el HTML de forma estática, puedes usar un servidor simple de Python:

```bash
cd /home/usuario/.../este-proyecto
python3 -m http.server 8000
```

Luego visita:

```text
http://127.0.0.1:8000/
```

> Nota: para que funcionen correctamente las rutas y la generación de contenido con front matter, la opción recomendada sigue siendo `bundle exec jekyll serve`.
