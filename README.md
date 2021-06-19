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
    "iconClass": "las la-igloo",
    "label": "Início"
  },
  {
    "path": "/cadastros",
    "iconClass": "las la-users",
    "label": "Cadastros"
  },
  {
    "path": "#",
    "iconClass": "las la-receipt",
    "label": "Depto. Contábil"
  },
  {
    "path": "#",
    "iconClass": "las la-clipboard",
    "label": "Depto. Fiscal"
  },
  {
    "path": "#",
    "iconClass": "las la-users",
    "label": "Depto. Financeiro"
  },
  {
    "path": "#",
    "iconClass": "las la-shopping-bag",
    "label": "Depto. Pessoal"
  },
  {
    "path": "#",
    "iconClass": "las la-clipboard-list",
    "label": "Tarefas"
  },
  {
    "path": "#",
    "iconClass": "las la-user-circle",
    "label": "Usuários"
  }
]
```
