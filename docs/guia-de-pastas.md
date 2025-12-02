# 📂 Guia de Pastas do Pod of Cast

<div align="center">

**Este guia existe para responder a grande questão:**  
### _"Onde eu coloco esse arquivo?"_

</div>

---

## 🤔 Guia Rápido de Decisão

<table>
<tr>
<td width="50%">

#### 📄 É uma página/rota nova do app?
**→** `src/pages`

#### 🧱 Aparece em quase todas as páginas?
**→** `src/components/layout`

#### 🎨 Componente visual reaproveitável?
**→** `src/components/UI`

</td>
<td width="50%">

#### 🎯 Específico de UMA página só?
**→** `src/pages/NomeDaPagina`

#### 📋 Lista de links, textos fixos, menus?
**→** `src/constants`

#### 🖼️ Logo, ícone ou imagem?
**→** `src/assets`

</td>
</tr>
</table>

> [!NOTE]
> 💡 Se ainda estiver em dúvida, manda mensagem no grupo ou pergunta para a sua IA favorita!

---

## 🗺️ Estrutura Detalhada

### 📄 **1. Páginas** `src/pages/`

Cada pasta representa uma página do protótipo no Figma e uma rota no app.

```
src/pages/
├── Landing/
├── About/
├── PodcastDetail/
├── Blog/
└── BlogPost/
```

**Estrutura interna de cada página:**
- `index.jsx` → arquivo principal da página
- Componentes de seção (ex: `Hero.jsx`, `FeaturedEpisode.jsx`)

> [!IMPORTANT]
> **Regra de ouro:** Se o componente só faz sentido nessa página, ele mora aqui!

---

### 🧱 **2. Layout** `src/components/layout/`

Componentes estruturais que aparecem em quase todas as páginas.

**Exemplos:**
- ✅ `Navbar/`
- ✅ `Footer/`

```
src/components/layout/
├── Navbar/
│   └── Navbar.jsx
└── Footer/
    └── Footer.jsx
```

> [!IMPORTANT]
> **Pergunta-chave:** _"Isso faz parte da estrutura fixa do site?"_ → Se sim, é layout!

---

### 3. Componentes de UI (design systemzinho)

Pasta: `src/components/UI/`

Aqui entram os componentes reaproveitáveis, que podem aparecer em qualquer página:

- Botões
- Cards
- Inputs
- Coisas clicáveis e bonitinhas

Exemplo:

- `src/components/UI/SubscribeButton.jsx`

<br />

> [!IMPORTANT]
>
> Se você pensa “hum, eu poderia usar isso em mais de uma tela”, ele merece viver em `UI`.

---

### 🔗 **4. Componentes Compartilhados** `src/components/`

Componentes reutilizados em 2+ páginas, mas não são genéricos de UI nem layout global.

**Exemplos:**
- ✅ `PlatformLinks.jsx`
- ✅ `SocialLinks.jsx`
- ✅ `EpisodeCard.jsx`

> [!IMPORTANT]
> **Quando usar:** Não é um simples "Button", mas também não pertence a uma página só.

---

### 5. Constantes e dados fixos

Pasta: `src/constants/`

Aqui vivem todas as coisas que não mudam durante a execução do app:

- Itens de navegação
- Links de redes sociais
- Plataformas de podcast
- Textos fixos

Exemplos:

- `branding.js`
- `navigation.js`
- `platforms.js`
- `social-networks.js`
- `index.js` (para juntar tudo e importar um único lugar)

<br />

> [!IMPORTANT]
>
> “Quero adicionar uma nova rede social/plataforma/menu.”  
> → provavelmente você vai editar algo aqui.

---

### 🖼️ **6. Assets** `src/assets/`

Arquivos visuais e estáticos do projeto.

**O que vai aqui:**
- 🎨 Logos (`logo.png`)
- 🔷 Ícones (`instagram.png`, `twitter.png`)
- 📸 Imagens das páginas

> [!IMPORTANT]
> **Fluxo:** Arquivo visual → `src/assets/` → importar no componente

---

### 🎨 **7. Estilos Globais** `src/index.css`

Estilos que afetam o projeto inteiro.

**O que vai aqui:**
- 🔄 Resets CSS
- 🌍 Estilos globais
- 🎨 Variáveis de cores/fontes
- 📐 Configurações gerais

> [!IMPORTANT]
> **Regra:**  
> Estilo específico de componente → fica no componente  
> Estilo global (body, fontes, cores) → vem para `index.css`

---

<div align="center">

### 🎯 Dica Final

**Quando estiver em dúvida, se pergunte:**  
_"Onde outra pessoa procuraria por isso?"_

</div>
