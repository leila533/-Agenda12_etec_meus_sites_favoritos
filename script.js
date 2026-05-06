// ============================================================
// script.js — Meus Sites Favoritos | Leila Victoria
// Responsabilidade: gerar os cards dos sites no HTML
// ============================================================

// ===== ARRAY COM OS 7 SITES FAVORITOS =====
// Cada objeto contém: nome, url, imagem e texto alternativo
const sitesFavoritos = [
  {
    nome: "YouTube",
    url: "https://www.youtube.com",
    urlTexto: "www.youtube.com",
    imagem: "img/youtube.png",
    alt: "Logo do YouTube"
  },
  {
    nome: "Instagram",
    url: "https://www.instagram.com",
    urlTexto: "www.instagram.com",
    imagem: "img/instagram.png",
    alt: "Logo do Instagram"
  },
  {
    nome: "WhatsApp",
    url: "https://web.whatsapp.com",
    urlTexto: "web.whatsapp.com",
    imagem: "img/whatsapp.png",
    alt: "Logo do WhatsApp"
  },
  {
    nome: "TikTok",
    url: "https://www.tiktok.com",
    urlTexto: "www.tiktok.com",
    imagem: "img/tiktok.png",
    alt: "Logo do TikTok"
  },
  {
    nome: "Shopee",
    url: "https://shopee.com.br",
    urlTexto: "shopee.com.br",
    imagem: "img/shopee.png",
    alt: "Logo da Shopee"
  },
  {
    nome: "GitHub",
    url: "https://www.github.com",
    urlTexto: "www.github.com",
    imagem: "img/github.png",
    alt: "Logo do GitHub"
  },
  {
    nome: "Spotify",
    url: "https://www.spotify.com",
    urlTexto: "www.spotify.com",
    imagem: "img/spotify.png",
    alt: "Logo do Spotify"
  }
  ,{
    nome: "Netflix",
    url: "https://www.netflix.com",
    urlTexto: "www.netflix.com",
    imagem: "img/netflix.PNG",
    alt: "Logo da netflix"
  }
];

// ===== FUNÇÃO: CRIAR UM CARD =====
// Recebe um objeto do array e retorna um elemento <article> completo
function criarCard(site) {

  // Cria o elemento article com a classe "card"
  const card = document.createElement("article");
  card.classList.add("card");

  // --- Nome do site (acima da imagem) ---
  const nomeSite = document.createElement("h1");
  nomeSite.classList.add("nome-site");
  nomeSite.textContent = site.nome;

  // --- Wrapper da imagem ---
  const imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");

  // Link que envolve a imagem
  const linkImagem = document.createElement("a");
  linkImagem.href = site.url;
  linkImagem.target = "_blank";             // abre em nova aba
  linkImagem.rel = "noopener noreferrer";   // segurança ao abrir nova aba

  // Elemento da imagem
  const img = document.createElement("img");
  img.src = site.imagem;
  img.alt = site.alt;

  // Monta a estrutura da imagem
  linkImagem.appendChild(img);
  imgWrap.appendChild(linkImagem);

  // --- Link textual (abaixo da imagem) ---
  const linkArea = document.createElement("div");
  linkArea.classList.add("link-area");

  const linkTexto = document.createElement("a");
  linkTexto.href = site.url;
  linkTexto.target = "_blank";
  linkTexto.rel = "noopener noreferrer";
  linkTexto.textContent = site.urlTexto;

  linkArea.appendChild(linkTexto);

  // --- Monta o card completo ---
  card.appendChild(nomeSite);   // nome acima
  card.appendChild(imgWrap);    // imagem no meio
  card.appendChild(linkArea);   // link abaixo

  return card; // retorna o card pronto
}

// ===== FUNÇÃO: RENDERIZAR TODOS OS CARDS NO HTML =====
function renderizarCards() {

  // Seleciona o elemento <main> onde os cards serão inseridos
  const grid = document.getElementById("grid-sites");

  // Percorre o array e cria um card para cada site
  sitesFavoritos.forEach(function(site) {
    const card = criarCard(site); // cria o card
    grid.appendChild(card);       // insere no grid
  });
}

// ===== EXECUTA AO CARREGAR A PÁGINA =====
// Aguarda o DOM estar pronto antes de inserir os cards
document.addEventListener("DOMContentLoaded", renderizarCards);
