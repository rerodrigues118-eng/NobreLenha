# 📝 Guia de Edição - Landing Page Nobre Lenha

## 🎨 Como Editar a Aparência

### Alterar Cores da Marca

As cores principais estão configuradas para preto grafite e dourado. Se precisar ajustar os tons:
- Dourado/Amarelo: `yellow-400`, `yellow-500`, `yellow-600`
- Preto/Grafite: `zinc-900`, `zinc-950`, `black`

### Personalizar Fontes

As fontes estão usando as configurações padrão do Tailwind. Para mudar, edite o arquivo `tailwind.config.js`.

---

## 📦 Como Editar os Produtos

### Arquivo: `src/data/products.ts`

Neste arquivo você encontra todos os produtos em um array. Para editar:

```typescript
{
  id: 1,                           // ID único do produto
  name: "Nome do Produto",         // Nome que aparece no card
  description: "Descrição...",     // Texto descritivo
  benefits: [                      // Lista de benefícios
    "Benefício 1",
    "Benefício 2",
    "Benefício 3",
    "Benefício 4"
  ],
  image: "URL_DA_IMAGEM",         // URL da foto do produto
  category: "categoria"            // Categoria interna
}
```

### Para Adicionar um Novo Produto:

1. Abra o arquivo `src/data/products.ts`
2. Copie um produto existente
3. Altere os valores (id, name, description, benefits, image)
4. Salve o arquivo

### Para Remover um Produto:

1. Abra o arquivo `src/data/products.ts`
2. Delete o objeto do produto desejado
3. Salve o arquivo

### Para Trocar a Foto de um Produto:

1. Encontre o produto em `src/data/products.ts`
2. Altere a URL no campo `image`
3. Recomendamos usar fotos do Pexels ou suas próprias fotos hospedadas

---

## 💬 Como Editar os Depoimentos

### Arquivo: `src/data/testimonials.ts`

Estrutura de cada depoimento:

```typescript
{
  id: 1,                           // ID único
  name: "Nome do Cliente",         // Nome que aparece
  role: "Cargo/Profissão",        // Descrição do cliente
  content: "Texto do depoimento", // Depoimento completo
  rating: 5,                       // Avaliação (1 a 5 estrelas)
  image: "URL_DA_FOTO"            // Foto do cliente
}
```

### Para Adicionar um Novo Depoimento:

1. Abra `src/data/testimonials.ts`
2. Copie um depoimento existente
3. Altere os valores
4. Salve o arquivo

---

## 📱 Como Configurar WhatsApp e Mercado Livre

### WhatsApp

Edite o número em 3 arquivos:
1. `src/components/Hero.tsx` - linha 4
2. `src/components/Products.tsx` - linha 5
3. `src/components/FinalCTA.tsx` - linha 4
4. `src/components/WhatsAppButton.tsx` - linha 4

Altere: `const whatsappNumber = "5511999999999";`

### Mercado Livre

Edite a URL em 3 arquivos:
1. `src/components/Hero.tsx` - linha 5
2. `src/components/Products.tsx` - linha 6
3. `src/components/FinalCTA.tsx` - linha 5

Altere: `const mercadoLivreUrl = "https://www.mercadolivre.com.br/SUALOJA";`

---

## 👤 Como Editar Informações de Contato

### Arquivo: `src/components/Footer.tsx`

No footer você pode editar:
- Telefone
- E-mail
- Horário de atendimento
- Links de redes sociais

---

## 🖼️ Como Usar Suas Próprias Fotos

### Opção 1: Fotos Online (Recomendado)
1. Hospede suas fotos em um serviço como Imgur, Cloudinary, ou seu próprio servidor
2. Copie a URL da foto
3. Cole no campo `image` do produto ou depoimento

### Opção 2: Fotos do Pexels (Gratuitas)
1. Acesse [Pexels.com](https://www.pexels.com)
2. Busque pela foto desejada
3. Copie a URL da foto
4. Cole no campo `image`

### Opção 3: Fotos Locais
1. Coloque a foto na pasta `public/images/`
2. Use o caminho: `/images/nome-da-foto.jpg`

---

## 🎯 Otimização para SEO

O arquivo `index.html` já está otimizado com:
- Título descritivo
- Meta descrição
- Open Graph tags

Para personalizar, edite as meta tags no arquivo `index.html`.

---

## 🚀 Após Fazer Alterações

1. Salve todos os arquivos editados
2. O site será atualizado automaticamente
3. Verifique se tudo está funcionando corretamente

---

## 📞 Dicas de Conversão

### Para Melhorar Vendas:
- Use fotos reais e de alta qualidade dos seus produtos
- Adicione depoimentos verdadeiros de clientes
- Mantenha os botões de WhatsApp sempre visíveis
- Atualize os links do Mercado Livre com seus produtos reais

### Textos que Convertem:
- Use verbos de ação: "Garanta", "Compre", "Peça"
- Destaque benefícios, não apenas características
- Crie senso de urgência quando apropriado
- Seja específico e honesto sobre seus produtos
