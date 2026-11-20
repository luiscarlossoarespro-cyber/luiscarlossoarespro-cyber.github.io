/*
  PROJETOS DO PORTFÓLIO — para publicar um projeto novo, copie um bloco,
  cole no TOPO da lista e troque os textos. O site monta tudo sozinho.

  Campos:
    id, destaque (true em UM projeto), area, ano, titulo, tipo (subtítulo curto),
    resumo (2 frases), pergunta (a pergunta de negócio),
    fluxo (etapas do caminho dos dados), destaques (3 achados com número real),
    ferramentas, capa (imagem), links [{ r: texto, u: endereço, p: principal }]
*/
window.PROJETOS = [
  {
    id: "desvios",
    destaque: false,
    area: "Logística",
    ano: 2026,
    titulo: "Causas dos desvios nos indicadores de logística",
    tipo: "Python · SQL (DuckDB) · estatística · dashboard com filtros",
    resumo: "Análise de 62.897 pedidos válidos (base pública DataCo, de 65.752) para descobrir o que explica o atraso. O dashboard tem filtros de Ano e Mês que recalculam todos os números, um simulador de prazos e um plano de ação.",
    pergunta: "O indicador mostra que os pedidos atrasam. O que explica o atraso: região, cliente, categoria, época ou o prazo que a empresa promete?",
    fluxo: ["Base pública DataCo (65.752 pedidos)", "Auditoria e regras de exclusão", "Análise estatística com controle de falsos alarmes", "Conferência por SQL no arquivo original", "Dashboard com filtros e simulador"],
    destaques: [
      "57,3% dos pedidos atrasam, e nenhum país, categoria ou mês fica fora do esperado: o atraso vem do prazo prometido em cada modo de envio",
      "First Class promete 1 dia e leva 2: 100% atrasam. Prometendo 2 dias, o atraso cai de 57,3% para 42,0% (simulação)",
      "241 verificações do dashboard contra SQL em 10 recortes de Ano e Mês, 0 divergências"
    ],
    decisao: "Apoia revisar o prazo prometido por modo de envio antes de investigar região ou cliente. Prometer mais dias reduz o atraso, mas aumenta a espera do cliente; o simulador mostra essa troca.",
    limites: [
      "O autor da base não informa se os dados são reais ou simulados; nada aqui é afirmação sobre uma empresa real",
      "A base não separa as etapas do processo (separação, transporte), então não mostra a causa física do atraso",
      "A moeda dos valores não está informada"
    ],
    ferramentas: ["Python", "SQL (DuckDB)", "Google Sheets", "Dashboard web (HTML · JS)", "Playwright"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/causas-desvios-indicadores-logistica/main/capa_dashboard.png",
    links: [
      { r: "Abrir dashboard", u: "https://luiscarlossoarespro-cyber.github.io/causas-desvios-indicadores-logistica/dashboard/", p: true },
      { r: "Código e resultados", u: "https://github.com/luiscarlossoarespro-cyber/causas-desvios-indicadores-logistica" }
    ]
  },
  {
    id: "conformidade",
    destaque: false,
    area: "Logística",
    ano: 2026,
    titulo: "Conformidade no Recebimento: recolhimentos reais da FDA",
    tipo: "Python · auditoria de dados · dashboard · calculadora",
    resumo: "Estudo de 29.485 recolhimentos reais de alimentos (dados públicos da FDA), da auditoria da base à conferência da planilha de tratamento. Termina em um dashboard interativo de 9 abas com calculadora de vida útil restante para o conferente.",
    pergunta: "Que tipos de problema levam a recolhimentos, quão graves são, quanto tempo levam e o que a conferência no recebimento consegue perceber?",
    fluxo: ["Arquivo público openFDA", "Auditoria de qualidade (61 checagens)", "Conferência da planilha contra o original", "Limpeza sem correção por suposição", "Dashboard interativo"],
    destaques: [
      "Contaminação microbiológica é a maior causa: 44,1% dos recolhimentos, e 75,0% deles são Classe I (risco sério)",
      "A FDA leva 38 dias (mediana) para classificar o risco; 88,9% citam código ou lote, mas 10,2% recolhem todos os lotes",
      "15 de 15 indicadores da planilha de tratamento batem com o arquivo original; 0 números de recolhimento repetidos"
    ],
    decisao: "Apoia dar mais peso à rastreabilidade por lote e validade na conferência de alimentos e checar a vida útil restante contra o mínimo do cliente. A leitura sobre o que a conferência consegue ver é interpretação minha, não dado da FDA.",
    limites: [
      "Dados dos EUA, só de alimentos; a FDA não atualiza o status depois de classificar",
      "Sem clientes, custos nem dados de doca: o painel não mostra acurácia, OTIF ou custo",
      "A categoria do motivo é por palavras-chave e pode errar quando o texto cita dois problemas",
      "Volumes recolhidos não são somados, porque a FDA repete o total do evento em cada recolhimento"
    ],
    ferramentas: ["Python", "Pandas", "Google Sheets", "Dashboard web (HTML · JS)", "Playwright"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/conformidade-recebimento-fda/main/capa_dashboard.png",
    links: [
      { r: "Abrir dashboard", u: "https://luiscarlossoarespro-cyber.github.io/conformidade-recebimento-fda/dashboard/", p: true },
      { r: "Código e vídeo", u: "https://github.com/luiscarlossoarespro-cyber/conformidade-recebimento-fda" }
    ]
  },
  {
    id: "olist",
    destaque: true,
    area: "Logística",
    ano: 2026,
    titulo: "Entregas Olist: onde e por que os pedidos atrasam",
    tipo: "SQL · Python · estatística · modelo · dashboard",
    resumo: "Análise de 96 mil entregas reais do e-commerce brasileiro, da auditoria dos dados ao modelo de risco. Termina em um dashboard interativo com 9 abas e respostas diretas para a gerência.",
    pergunta: "Quanto os pedidos atrasam, em que etapa o tempo se perde, o que explica o atraso e quanto isso custa em satisfação?",
    fluxo: ["9 tabelas CSV", "Auditoria de qualidade", "Base em SQL (DuckDB)", "Estatística e regressão", "Modelo de risco", "Dashboard interativo"],
    destaques: [
      "6,8% dos pedidos atrasam; a rota SP → RJ sozinha responde por 17,6% dos atrasos",
      "RJ e Nordeste têm cerca de 3x a chance de atraso de SP, mesmo com distância igual",
      "Monitorando os 10% de pedidos de maior risco, o modelo captura 49,5% dos atrasos"
    ],
    decisao: "Apoia rever o prazo prometido nas rotas críticas e acompanhar de perto os pedidos de maior risco, em vez de olhar todos igual.",
    limites: [
      "Um único marketplace, de 2016 a 2018: serve para o método, não para descrever a logística de hoje",
      "A base não informa transportadora, rota, clima, greves ou estoque; as conclusões são de associação",
      "A distância é em linha reta entre prefixos de CEP, não pela estrada",
      "O modelo foi testado num período com menos atraso (4,4%) que o treino (8,0%) e precisaria de monitoramento"
    ],
    ferramentas: ["SQL (DuckDB)", "Python", "Pandas", "statsmodels", "scikit-learn", "Dashboard web"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/olist-logistica-entregas/main/graficos/00_dashboard_visao_geral.png",
    links: [
      { r: "Abrir dashboard", u: "https://luiscarlossoarespro-cyber.github.io/olist-logistica-entregas/dashboard/", p: true },
      { r: "Código e vídeo", u: "https://github.com/luiscarlossoarespro-cyber/olist-logistica-entregas" },
      { r: "Relatório técnico", u: "https://github.com/luiscarlossoarespro-cyber/olist-logistica-entregas/blob/main/docs/RELATORIO_TECNICO.md" }
    ]
  },
  {
    id: "vendas",
    destaque: false,
    area: "Vendas",
    ano: 2026,
    titulo: "Análise de Vendas · Aurora Comercial",
    tipo: "Excel · dashboard web",
    resumo: "Dashboard de vendas com receita e margem por representante, dispositivo, país, categoria e gerente, com filtros combinados.",
    pergunta: "Quais países, categorias e representantes sustentam a receita e a margem?",
    fluxo: ["Base em Excel", "Tratamento", "Indicadores", "Dashboard com filtros"],
    destaques: [
      "€ 113,4 M de receita com margem bruta de 16,8%",
      "Portugal e França concentram quase metade da receita",
      "Filtros combinados e exportação do recorte em CSV"
    ],
    ferramentas: ["Excel", "HTML · CSS · JS", "GitHub Pages"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/analise-vendas-online/main/assets/cover.png",
    links: [
      { r: "Ver dashboard", u: "https://luiscarlossoarespro-cyber.github.io/analise-vendas-online/", p: true },
      { r: "Código", u: "https://github.com/luiscarlossoarespro-cyber/analise-vendas-online" }
    ]
  },
  {
    id: "netflix",
    destaque: false,
    area: "Entretenimento",
    ano: 2026,
    titulo: "Catálogo Netflix",
    tipo: "Tableau Public",
    resumo: "Dashboard no Tableau Public sobre a composição do catálogo: filmes e séries, países, ano de lançamento e tendência mensal.",
    pergunta: "Como o catálogo se divide entre filmes e séries, países e anos de lançamento?",
    fluxo: ["Base do curso", "Tratamento", "Tableau Public"],
    destaques: [
      "70% do catálogo são filmes (5.366 títulos)",
      "Os EUA lideram, com 2.732 títulos",
      "2018 é o ano com mais lançamentos (1.142)"
    ],
    ferramentas: ["Tableau Public"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/luiscarlossoarespro-cyber/main/netflix-cover.png",
    links: [
      { r: "Abrir no Tableau", u: "https://public.tableau.com/app/profile/lu.s.carlos.machado.soares/viz/Livro1_17865361765710/Netflix", p: true },
      { r: "Documentação", u: "https://github.com/luiscarlossoarespro-cyber/analise-catalogo-netflix" }
    ]
  },
  {
    id: "erp",
    destaque: false,
    area: "Finanças",
    ano: 2026,
    titulo: "ERP Financeiro Pessoal",
    tipo: "Google Sheets · dashboard web",
    resumo: "Sistema em Google Sheets com um dashboard que mostra onde está o problema, o que fazer primeiro e se os dados são confiáveis.",
    pergunta: "Para onde vai o dinheiro, quais são os gargalos e qual é a próxima decisão?",
    fluxo: ["Lançamentos no Google Sheets", "Fórmulas de gestão", "7 verificações de qualidade", "Dashboard"],
    destaques: [
      "Gargalos ranqueados e ligados a decisões",
      "Auditoria automática: vencidas, aumentos fora do normal e duplicidades",
      "Gestão ágil aplicada: backlog, kanban e retrospectiva"
    ],
    limites: [
      "Versão pública com dados fictícios; os dados reais ficam privados"
    ],
    ferramentas: ["Google Sheets", "HTML · CSS · JS", "IA (Claude)"],
    capa: "https://raw.githubusercontent.com/luiscarlossoarespro-cyber/erp-financeiro-pessoal/main/assets/cover.png",
    links: [
      { r: "Ver demonstração", u: "https://luiscarlossoarespro-cyber.github.io/erp-financeiro-pessoal/", p: true },
      { r: "Código", u: "https://github.com/luiscarlossoarespro-cyber/erp-financeiro-pessoal" }
    ]
  }
];
