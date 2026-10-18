/*
  ============================================================
  PROJETOS DO PORTFÓLIO — É AQUI QUE VOCÊ ADICIONA UM NOVO
  ============================================================
  Para publicar um projeto novo: copie um bloco abaixo, cole no
  TOPO da lista (o mais novo vem primeiro) e troque os textos.
  O site monta o card, o filtro e o contador sozinho.

  Campos:
    id          nome curto, sem espaço
    destaque    true = aparece grande no topo (use em UM projeto)
    area        "Logística", "Finanças", "Vendas"... (cria o filtro)
    ano         ano da publicação
    titulo      nome do projeto
    pergunta    a pergunta de negócio que o projeto responde
    resultados  3 achados com número real (nada inventado)
    ferramentas lista de ferramentas usadas
    capa        endereço de uma imagem (ou deixe "" para usar metricas)
    metricas    até 4 números para a capa, se não houver imagem
    links       botões: { r: "texto", u: "endereço", p: true } (p = principal)
*/
window.PROJETOS = [
  {
    id: "olist",
    destaque: true,
    area: "Logística",
    ano: 2026,
    titulo: "Entregas no e-commerce: onde e por que os pedidos atrasam",
    pergunta: "Quanto os pedidos atrasam, em que etapa o tempo se perde e quanto isso custa em satisfação do cliente?",
    resultados: [
      "8,1% dos 96.455 pedidos entregues chegaram depois do prazo prometido",
      "O gargalo é a transportadora: 25,7 dias nos pedidos atrasados contra 7,9 nos pedidos no prazo",
      "Com mais de 7 dias de atraso, a nota do cliente cai para 1,7 (a média geral é 4,16)"
    ],
    escopo: "96.455 pedidos · 9 tabelas · 2016 a 2018 · 8 consultas SQL",
    recomendacoes: [
      "Atacar os atrasos longos (mais de 3 dias): são cerca de 5% dos pedidos e concentram a queda de nota",
      "Rever transportadoras e rotas do Nordeste e do Rio de Janeiro, onde o atraso vai de 12% a 24%",
      "Prometer prazo por estado e planejar capacidade antes dos picos"
    ],
    ferramentas: ["SQL (DuckDB)", "Python", "Pandas", "Plotly"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/olist-logistica-entregas/main/graficos/02_atraso_por_estado.png",
    metricas: [],
    links: [
      { r: "Ver análise completa", u: "https://github.com/luiscarlossoarespro-cyber/olist-logistica-entregas", p: true }
    ]
  },
  {
    id: "erp",
    destaque: false,
    area: "Finanças",
    ano: 2026,
    titulo: "ERP Financeiro Pessoal — Dashboard Estratégico",
    pergunta: "Para onde vai o dinheiro, quais são os gargalos e qual é a próxima decisão?",
    resultados: [
      "Gargalos ranqueados e ligados a decisões",
      "Auditoria de contas vencidas, aumentos fora do normal e duplicidades",
      "Gestão ágil: backlog, kanban, retrospectiva e placar de regras"
    ],
    ferramentas: ["Google Sheets", "HTML · CSS · JS", "IA (Claude)"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/erp-financeiro-pessoal/main/assets/cover.png",
    metricas: [],
    links: [
      { r: "Ver demonstração", u: "https://luiscarlossoarespro-cyber.github.io/erp-financeiro-pessoal/", p: true },
      { r: "Documentação", u: "https://github.com/luiscarlossoarespro-cyber/erp-financeiro-pessoal" }
    ]
  },
  {
    id: "vendas",
    destaque: false,
    area: "Vendas",
    ano: 2026,
    titulo: "Análise de Vendas — Aurora Comercial",
    pergunta: "Quais países, categorias e representantes sustentam a receita e a margem?",
    resultados: [
      "€ 113,4 M de receita com margem bruta de 16,8%",
      "Portugal e França concentram quase metade da receita",
      "Filtros combinados e exportação do recorte em CSV"
    ],
    ferramentas: ["Excel", "HTML · CSS · JS", "GitHub Pages"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/analise-vendas-online/main/assets/cover.png",
    metricas: [],
    links: [
      { r: "Ver dashboard", u: "https://luiscarlossoarespro-cyber.github.io/analise-vendas-online/", p: true },
      { r: "Documentação", u: "https://github.com/luiscarlossoarespro-cyber/analise-vendas-online" }
    ]
  },
  {
    id: "netflix",
    destaque: false,
    area: "Entretenimento",
    ano: 2026,
    titulo: "Netflix — Análise do Catálogo",
    pergunta: "Como o catálogo se divide entre filmes e séries, países e anos de lançamento?",
    resultados: [
      "70% do catálogo são filmes (5.366 títulos)",
      "Os EUA lideram, com 2.732 títulos",
      "2018 é o ano com mais lançamentos (1.142)"
    ],
    ferramentas: ["Tableau Public"],
    capa: "",
    metricas: [
      { v: "70%", l: "filmes · 5.366 títulos" },
      { v: "30%", l: "séries · 2.293 títulos" },
      { v: "2.732", l: "títulos dos EUA" },
      { v: "2018", l: "ano com mais lançamentos" }
    ],
    links: [
      { r: "Ver no Tableau", u: "https://public.tableau.com/app/profile/lu.s.carlos.machado.soares/viz/Livro1_17865361765710/Netflix", p: true },
      { r: "Documentação", u: "https://github.com/luiscarlossoarespro-cyber/analise-catalogo-netflix" }
    ]
  }
];
