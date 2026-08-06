# Conan Informática - Sitio Provisorio

## Ejecutar el proyecto localmente

Este sitio utiliza plantillas y front matter de Jekyll, por lo que la forma recomendada de servirlo localmente es con Jekyll.

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
jekyll serve
```

### 4. Abrir en el navegador

Visita:

```
http://127.0.0.1:4000/
```

## Alternativa rápida sin Jekyll

Si solo quieres ver el HTML de forma estática puedes usar un servidor simple de Python. Esta opción no procesa las plantillas de Jekyll, pero sirve los archivos desde la carpeta.

```bash
cd /home/usuario/.../este-proyecto
python3 -m http.server 8000
```

Luego visita:

```
http://127.0.0.1:8000/
```

> Nota: para que funcionen correctamente las rutas y la generación de contenido con front matter, la opción preferida es `jekyll serve`.
