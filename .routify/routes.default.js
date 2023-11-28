

export default {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default__layout_svelte",
      "name": "_layout",
      "file": {
        "path": "src/routes/_layout.svelte",
        "dir": "src/routes",
        "base": "_layout.svelte",
        "ext": ".svelte",
        "name": "_layout"
      },
      "asyncModule": () => import('../src/routes/_layout.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_games_svelte",
      "name": "games",
      "file": {
        "path": "src/routes/games.svelte",
        "dir": "src/routes",
        "base": "games.svelte",
        "ext": ".svelte",
        "name": "games"
      },
      "asyncModule": () => import('../src/routes/games.svelte'),
      "children": []
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}