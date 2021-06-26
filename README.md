<div align="center">
<a href="https://github.com/pablogeokar/nextjs-sc-dashboard/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/pablogeokar/nextjs-sc-dashboard"></a>
<a href="https://github.com/pablogeokar/nextjs-sc-dashboard/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/pablogeokar/nextjs-sc-dashboard"></a>
<a href="https://github.com/pablogeokar/nextjs-sc-dashboard/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/pablogeokar/nextjs-sc-dashboard"></a>
 <a href="https://github.com/pablogeokar/nextjs-sc-dashboard/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/pablogeokar/nextjs-sc-dashboard"></a>
 <img alt="David" src="https://img.shields.io/david/pablogeokar/nextjs-sc-dashboard">
</div>

<div>
<img alt="Screenshot" src=".github/dashboard.jpg">
</div>

## 1 - Configurando o tema

As configurações iniciais do tema estão em `src/pages/_app_.tsx`

```javascript
const theme = {
  colors: {
    primary: "#0a3d62",
    sidebar: "#0a3d62",
    sidebarHover: "#012c4d",
    sidebarActiveColor: "#0ab4df",
  },
  sidebar: {
    width: "260px",
  },
};
```

## 2 - Configurando as opções da Sidebar

Editar o arquivo `config/sidebar.json`

```json
[
  {
    "label": "Dashboard",
    "iconClass": "bx bx-grid-alt",
    "path": "/"
  },
  {
    "label": "Cadastros",
    "iconClass": "las la-users",
    "subMenu": [
      {
        "label": "Clientes",
        "path": "#"
      },
      {
        "label": "Empresas",
        "path": "#"
      }
    ]
  }
]
```
