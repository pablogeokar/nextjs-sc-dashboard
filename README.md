## 1 - Configurando o tema

As configurações iniciais do tema estão em `src/pages/_app_.tsx`

```javascript
const theme = {
  colors: {
    primary: "#0a3d62",
    sidebar: "#0a3d62",
    sidebarHover: "#012c4d",
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
    "path": "/",
    "iconClass": "bx bx-grid-alt",
    "label": "Dashboard"
  },
  {
    "path": "#",
    "iconClass": "las la-users",
    "label": "Cadastros",
    "subMenu": [
      {
        "path": "#",
        "label": "Clientes"
      },
      {
        "path": "#",
        "label": "Empresas"
      }
    ]
  },
  {
    "path": "#",
    "iconClass": "las la-receipt",
    "label": "Depto. Contábil"
  }
]
```
