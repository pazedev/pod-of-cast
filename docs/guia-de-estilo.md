# 🎨 Guia de Estilos do Pod of Cast

> **Este guia reúne todas as diretrizes de estilo do projeto seguindo o protótipo no Figma.**

---

## 📝 1. Convenções de Nomenclatura

### Regras de Nomenclatura por Tipo

| Tipo | Convenção | Exemplos |
|------|-----------|----------|
| **Variáveis e Funções** | `camelCase` | `userName`, `fetchUserData()`, `isActive` |
| **Componentes React** | `PascalCase` | `Header`, `PodcastCard`, `EpisodeList` |
| **Arquivos de Componentes** | `PascalCase.jsx` | `Header.jsx`, `PodcastCard.jsx` |
| **Arquivos Utilitários** | `kebab-case.js` | `format-date.js`, `api-client.js` |
| **Arquivos de Estilos** | `kebab-case.css` | `header-styles.css`, `global.css` |
| **Constantes** | `UPPER_SNAKE_CASE` | `API_URL`, `MAX_EPISODES` |

### 📁 Convenções para Pastas

| Tipo de Pasta | Convenção | Exemplos |
|---------------|-----------|----------|
| **Páginas** (`src/pages/`) | `PascalCase` | `Landing/`, `About/`, `PodcastDetail/` |
| **Componentes de Layout** | `PascalCase` | `Navbar/`, `Footer/`, `Sidebar/` |
| **Pastas de Configuração** | `kebab-case` | `docs/`, `public/`, `src/` |
| **Pastas Utilitárias** | `kebab-case` | `constants/`, `assets/`, `utils/` |

> [!TIP]
> **Regra prática:** Se a pasta contém componentes React (páginas ou componentes de UI), use `PascalCase`. Para outras pastas (config, assets, utils), use `kebab-case`.

### 💡 Dicas de Nomenclatura

- **Seja descritivo**: `handleSubmitForm` é melhor que `submit`
- **Use inglês**: mantenha consistência no idioma
- **Booleanos**: prefixe com `is`, `has`, `should` → `isActive`, `hasError`, `shouldRender`

---

## 📂 2. Onde vivem os estilos

As configurações de estilo do projeto estão centralizadas em:

### 📄 `src/index.css` (arquivo principal)

| Seção | Conteúdo |
|-------|----------|
| `@theme` | Paleta de cores, tokens de tipografia e espaçamento entre letras |
| `@layer base` | Classes utilitárias de texto, botões e estilos globais |

### 🎨 Tailwind CSS

- Importado com `@import 'tailwindcss';`
- Fornece utilitários para layout, espaçamento, grid, etc.

<br />

> [!NOTE]
> **Antes de criar CSS novo**, verifique se já existe no Tailwind ou se já tem uma classe definida no `@layer base`.

---

## 🎨 3. Paleta de Cores Oficial

As cores do projeto estão definidas em `@theme`:

| Cor | Variável CSS | Valor Hexadecimal | Uso |
|-----|--------------|-------------------|-----|
| **Davys Grey** | `--color-davys-grey` | `#4d4d4d` | Texto secundário e elementos escuros |
| **Vermillion** | `--color-vermillion` | `#cd4631` | Cor de destaque |
| **Pewter Blue** | `--color-pewter-blue` | `#81adc8` | Elementos secundários e detalhes |
| **Champagne** | `--color-champagne` | `#f7ede8` | Fundos suaves e áreas claras |
| **Alice Blue** | `--color-alice-blue` | `#edf3f7` | Fundos alternativos e seções |

### 💡 Como usar as cores

✅ **Com variáveis CSS:**
```css
.meu-elemento {
  color: var(--color-vermillion);
  background-color: var(--color-champagne);
}
```

✅ **Com classes Tailwind:**
```jsx
<div className="text-davys-grey bg-vermillion">Conteúdo</div>
```

---

## 📝 4. Tipografia: quem usa o quê

Fonte base do projeto:

```css
--font-base-font: 'Montserrat Alternates', sans-serif;

:root {
  font-family: var(--font-base-font);
}
```

Ou seja: por padrão, todo mundo já está usando `Montserrat Alternates`.

### Tamanhos de título

Tokens:

- --font-size-display: 6rem;
- --font-size-h1: 3.70625rem;
- --font-size-h2: 2.290625rem;
- --font-size-h3: 1.415625rem;

As Classes utilitárias com tamanhos de texto já foram definidas no `@layer base` seguindo o protótipo do Figma até mesmo na nomenclatura.

- `.text-display`
  - Gigante, para hero / título principal da home.

- `.text-h1`
  - Títulos principais de página e seções grandes.

- `.text-h2-style-1`
  - Subtítulos fortes, mais “sólidos”.

- [...] Veja todas as classes de tipografia definidas no `index.css` na seção `@layer base`.

<br />

> [!WARNING]
> Na dúvida, consulte o protótipo no Figma para ver qual tamanho usar.

---

## 🔘 5. Botões do Projeto

O protótipo define dois estilos principais de botões:

| Tipo | Classe CSS | Uso Recomendado | Exemplo de Ações |
|------|-----------|-----------------|------------------|
| **Botão Black** | `.button-black` | ✨ Ações principais | "Subscribe", "Download now" |
| **Botão Outline** | `.button-outline` | 🔖 Ações secundárias | "Recent Episodes", "Listen now" |

---

### 💻 Código das Classes

As classes estão definidas no arquivo `index.css`:

```css
.button-black {
  @apply bg-vermillion text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition;
}

.button-outline {
  @apply border-2 border-vermillion text-vermillion font-bold py-3 px-6 rounded-lg hover:bg-vermillion hover:text-white transition;
}
```

### 📝 Como Usar

```jsx
// Botão principal
<button className="button-black">Subscribe</button>

// Botão secundário
<button className="button-outline">Listen now</button>
``` 

---

## ✅ 6. Boas Práticas de Design e Estilo

### 📱 Responsividade

✅ **Sempre** desenvolva layouts responsivos para:
- 📱 Mobile (smartphones)
- 📲 Tablet
- 🖥️ Desktop

---

### ♿ Acessibilidade

Todos os componentes devem seguir as diretrizes de acessibilidade:

| Prática | Descrição | Exemplo |
|---------|-----------|--------|
| 🏷️ **ARIA Labels** | Adicione labels descritivos para leitores de tela | `aria-label="Botão de inscrição"` |
| 🎨 **Contraste** | Use cores com contraste adequado (mínimo 4.5:1) | Texto escuro em fundo claro |
| ⌨️ **Navegação por Teclado** | Garanta navegação via Tab e configure foco visual | `tabIndex`, `:focus-visible` |
| 🖼️ **Textos Alternativos** | Forneça descrições para imagens | `alt="Logo do podcast"` |

---

### 🎯 Checklist de Acessibilidade

- [ ] Todos os botões e links possuem `aria-label` ou texto visível
- [ ] Imagens possuem atributo `alt` descritivo
- [ ] Contraste de cores atende WCAG 2.1 (AA)
- [ ] Navegação por teclado funciona corretamente
- [ ] Estados de foco estão claramente visíveis
- [ ] Componentes interativos são acessíveis via teclado

---

## 🔗 Recursos Adicionais

- 🎨 [Protótipo no Figma](https://www.figma.com/design/thmRUiaECjZh3c5G0a7792/Pod-of-cast?node-id=1-4198&t=LB2Y6C7F3vB4QihS-1)
- 📖 [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- ♿ [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- 🎨 [Verificador de Contraste](https://colourcontrast.cc/)
