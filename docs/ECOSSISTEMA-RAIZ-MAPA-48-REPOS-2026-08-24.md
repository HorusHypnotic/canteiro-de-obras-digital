# CANTEIRO DE OBRAS DIGITAL — MAPA RAIZ DO ECOSSISTEMA

Data: 2026-08-24
Status: CANONICAL MAP / FIRST-PASS COMPLETE
Escopo: patrimônio GitHub HorusHypnotic — 48 repositórios mapeados

## 1. Propósito deste mapa

Este documento transforma a varredura de 48 repositórios em um mapa operacional legível da empresa.

O objetivo não é afirmar que existem 48 produtos. O objetivo é mostrar:
- quais capacidades existem;
- onde estão;
- qual é a autoridade de cada repositório;
- quais sistemas são ativos, históricos, cascas, pesquisa, infraestrutura ou memória;
- quais departamentos usam ou produzem essas capacidades;
- quais relações entre repositórios são úteis;
- o que deve permanecer separado;
- quais ativos merecem remanufatura profunda;
- quais repositórios apenas reduzem incerteza por terem sido classificados como baixa prioridade/sem evidência.

Regra: `REPOSITORY != PRODUCT != CAPABILITY != DEPARTMENT`.

## 2. Modelo raiz da empresa

A Canteiro de Obras Digital deve ser entendida como uma empresa com patrimônios e departamentos que conversam por contratos, evidências e eventos, e não como um monólito de software.

### Departamentos raiz

1. COMERCIAL & CASH
2. OBRAS & OPERAÇÕES
3. SUPRIMENTOS & COMPRAS
4. EVIDÊNCIA & QUALIDADE
5. TERRITÓRIO & MERCADO
6. PESQUISA & CONHECIMENTO
7. PRODUTO & ENGENHARIA DE SOFTWARE
8. GOVERNANÇA & CONTROL TOWER
9. EMPRESA-LAB / DIRCEU
10. PROJEÇÃO PÚBLICA & MARCA

Cada departamento pode usar capacidades de vários repositórios. Nenhum departamento ganha automaticamente autoridade sobre o repositório fonte.

## 3. Cadeia operacional comum descoberta

REALIDADE
→ IDENTIDADE
→ CONTEXTO / TEMPO / LOCAL
→ FONTE / AUTORIDADE
→ REPRESENTAÇÃO
→ DECISÃO
→ EXECUÇÃO
→ EVIDÊNCIA
→ OUTCOME
→ MEMÓRIA
→ APRENDIZADO

Os produtos do ecossistema ocupam fatias dessa cadeia. A integração correta é por relações explícitas, não por fusão indiscriminada.

## 4. Mapa dos 48 repositórios

### A. OPERA / gestão e operação de obras

#### `opera-atlas`
Papel: gestão de cronograma, mão de obra, baseline, relatórios, exportação, multi-tenant.
Classe: produto ativo / beta.
Departamento principal: OBRAS & OPERAÇÕES.
Fronteira: não absorver cotação, pedidos, NF e financeiro.
Princípio: `PRODUCT_BOUNDARY_IS_A_FEATURE`.

#### `copilotodeobras`
Papel: captura operacional, estoque, entradas, saídas, consumo, alertas e necessidade de reposição.
Classe: sistema operacional / demanda.
Departamentos: OBRAS & OPERAÇÕES + SUPRIMENTOS.
Relação forte: origem de necessidade para Smart Cotações.

#### `opera-control`
Papel: análise de ECO/ICO/TDO e diagnóstico operacional.
Classe: produto + aplicação de conhecimento canônico.
Departamentos: EVIDÊNCIA & QUALIDADE + PESQUISA.
Risco: dívida semântica; código correto sobre definição incorreta continua sendo bug.

#### `opera-control-canonical-extract`
Papel: extrato operacional/pesquisável de conhecimento do OPERA Control.
Classe: derivado.
Autoridade: não substitui fonte canônica.
Princípio: `EXTRACT_CAN_IMPROVE_ACCESS_WITHOUT_INHERITING_AUTHORITY`.

#### `opera-inspection`
Papel: inspeção, não conformidade, evidência, reincidência, qualidade de fornecedor/material.
Classe: capacidade operacional reutilizável.
Departamentos: EVIDÊNCIA & QUALIDADE + SUPRIMENTOS.
Relação: futuro enriquecimento de memória de fornecedor no Smart Cotações.

#### `opera-vision`
Papel: planta/prancha clicável, EAP, zonas, estado, evidências e navegação espacial.
Classe: produto ativo em evolução.
Departamento: OBRAS & OPERAÇÕES.
Átomo: OBRA + EAP + PRANCHA + ZONA + ESTADO + EVIDÊNCIA.
Princípio: `PRODUCT_ATOM_BEFORE_ECOSYSTEM_INTEGRATION`.

#### `reo`
Papel: registro operacional com cadeia de evidência, timestamps, GPS/hash e PDF forense.
Classe: capacidade de evidência.
Departamento: EVIDÊNCIA & QUALIDADE.
Relação: prova de eventos operacionais e suporte a disputas/diagnósticos.

#### `obra-flow`
Papel: pedido, recebimento parcial, nota fiscal, vencimento/pagamento e operação offline.
Classe: logística de pedido/recebimento.
Departamentos: SUPRIMENTOS + OBRAS.
Relação: trecho pós-compra do ciclo Smart Cotações/COD.

#### `direcione-operacional`
Papel: missão operacional de obra com responsáveis, equipe, materiais, ferramentas, bloqueios, prazos e evidências.
Classe: coordenação operacional.
Departamento: OBRAS & OPERAÇÕES.
Fronteira: missão de obra != missão da Control Tower.

#### `qfd-os`
Papel: evento real → normalização → prioridade → backlog → execução → telemetria → feedback.
Classe: mecanismo de tradução realidade→trabalho.
Departamentos: PRODUTO & ENGENHARIA + OBRAS.

#### `canteiro-de-obras-digital`
Papel: raiz institucional/comercial pública e diário canônico.
Classe: projeção pública + raiz empresarial.
Departamentos: PROJEÇÃO PÚBLICA & MARCA + COMERCIAL.
Regra: copy pública é projeção da evidência canônica.

#### `opera-landing`
Papel: landing histórica/consulta de interesse, deliberadamente não publicada.
Classe: artefato comercial controlado.
Departamento: COMERCIAL.
Princípio: `NOT_PUBLISHED != BROKEN`.

#### `admin-diagnostico-opera`
Papel: operação comercial do Diagnóstico: elegibilidade, escopo, cobrança, PAID, material, análise, QA, PDF, entrega, feedback.
Classe: sistema operacional comercial.
Departamento: COMERCIAL & CASH.
Valor: forte proximidade de first cash.

### B. Suprimentos, compras e mercado local

#### `smart-cotacoes`
Papel atual: sourcing, fornecedores, propostas, comparação, negociação observável, memória econômica e caminho para inteligência territorial de compras.
Classe: produto ativo / live-assisted em evolução.
Departamento: SUPRIMENTOS & COMPRAS.
Relações: COD/Copiloto (demanda), Obra Flow (recebimento/NF), Inspection (qualidade), REO (evidência).
Observação: README raiz é histórico e não representa integralmente o estado atual.

#### `vitrinedigital-cod`
Papel: vitrine/direcionamento de demanda para fornecedores via WhatsApp.
Classe: conceito/produto antigo com mecanismo reutilizável.
Departamento: COMERCIAL + SUPRIMENTOS.
Princípio: `ROUTING_VALUE_CAN_EXIST_WITHOUT_TRANSACTION_OWNERSHIP`.

#### `memoriadevendas`
Papel: capturar, estruturar, preservar e medir conhecimento comercial, scripts, objeções e outcomes.
Classe: memória comercial.
Departamento: COMERCIAL & CASH.
Relação: fábrica copy-paste deve evoluir para mensagem + contexto + resposta + conversão.

#### `build-pix-pal`
Papel: conceito de pagamentos em lote/colaboradores Pix.
Classe: capacidade não comprovada / documento histórico.
Departamento: nenhum ativo atual prioritário.
Extração útil: lote + status por item + evidência.

#### `redex-mvp-nexus`
Papel: marketplace regional com curadoria, estados comerciais, Pix manual, chat e roles.
Classe: implementação/documentação histórica com inconsistências.
Departamento: COMERCIAL, apenas como fonte de mecanismos.
Princípios: `DOCUMENTED_FEATURE != VERIFIED_CAPABILITY`; `AI_PRAISE != EVIDENCE`.

#### `redencao-nota-pro`
Papel: emissão NFS-e/MEI em Redenção, dependente de autoridade/API externa.
Classe: conceito/implementação condicionada.
Departamento: PRODUTO.
Princípio: `EXTERNAL_AUTHORITY_CAN_BE_THE_REAL_PRODUCT_GATE`.

#### `debt-buddy-visual`
Papel: gerenciador visual de dívidas.
Classe: baixa alavancagem atual.
Extração mínima: separar valor original de valor atualizado no tempo.

### C. Território, inteligência urbana e localização

#### `radar-territorial`
Papel: território, zoneamento, atividades, mapas, importação, snapshots, proveniência, versionamento.
Classe: produto/pesquisa profundamente remanufaturado.
Departamento: TERRITÓRIO & MERCADO.
Relação: contexto espacial para licitações, obras e fornecedores.

#### `radarurbanooperador`
Papel: eventos públicos, licitações, obras, empresas, localização e atividade urbana.
Classe: conceito de observabilidade territorial.
Departamento: TERRITÓRIO & MERCADO.
Uso defensável: PUBLIC SIGNAL → ENTITY → LOCATION → CATEGORY → TIMELINE.

#### `operaterritorial`
Papel: shell/interface territorial com baixa evidência de domínio no README.
Classe: baixa prioridade / investigar somente por referência específica.

#### `terra-mapa-control`
Papel: obras georreferenciadas com projeção interna e projeção cliente, progresso, fotos, próximo passo.
Classe: mecanismo reutilizável.
Departamentos: TERRITÓRIO + OPERA VISION.
Relação: ancestral das melhorias de timeline compartilhada do Vision.

#### `soil-guard-base`
Papel: nome sugere geotecnia, mas primeira passada não encontrou evidência suficiente.
Classe: `INSUFFICIENT_EVIDENCE`.
Princípio: nome do repo não prova capacidade.

#### `cog-move`
Papel: mobilidade/pegada operacional, intenção de deslocamento, custo e logística.
Classe: conceito experimental.
Departamento: TERRITÓRIO & MERCADO / OBRAS.
Gate: só avançar se provar ganho sobre campos simples de logística/frete/rota.

#### `edu-redencao-paudarco`
Papel: presença/local site educacional.
Classe: baixa alavancagem atual.
Departamento: nenhum prioritário.

### D. Pesquisa, teoria, autoridade e conhecimento

#### `informodinamica-canonical`
Papel: núcleo canônico de teoria, protocolos, pesquisa e autoridade epistemológica.
Classe: fonte canônica.
Departamento: PESQUISA & CONHECIMENTO.
Regra: teoria orienta; evidência decide.

#### `informodinmica-os`
Papel: sistema/processo de mudança, versionamento, justificativa, estados e evidência.
Classe: mecanismo de governança do conhecimento.
Departamento: PESQUISA + GOVERNANÇA.

#### `pequisa-informodinamica-opera`
Papel: pesquisa aplicada ligada a oferta/OPERA.
Classe: histórico/experimental.
Risco: confusão entre hipótese de pesquisa e promessa comercial.
Princípio: `RESEARCH_CLAIM != COMMERCIAL_CLAIM`.

#### `tpc-paper`
Papel: patrimônio científico/formalização TPC.
Classe: pesquisa.
Departamento: PESQUISA & CONHECIMENTO.
Princípio: `THEORY_EXPLAINS; EVIDENCE_DECIDES`.

#### `tpc-markets-research`
Papel: experimentos de mercado com baseline, holdout, walk-forward, placebo e refutação preservada.
Classe: laboratório metodológico.
Departamento: PESQUISA.
Princípio: `COMPLEXITY_MUST_EARN_ITS_KEEP`.

#### `bim-normative-knowledge`
Papel: classificação de autoridade normativa, orientação, regra, inferência, unknown e validade temporal.
Classe: knowledge/governance.
Departamento: PESQUISA & CONHECIMENTO.
Princípio: `CLASSIFY_AUTHORITY_BEFORE_REASONING`.

#### `identity-central`
Papel: identidade canônica entre sistemas sem sobrescrever nomes externos; possíveis matches vs verificados.
Classe: infraestrutura de identidade.
Departamento: GOVERNANÇA & DADOS.
Princípios: `SAME_NAME != SAME_ENTITY`; `DIFFERENT_NAME != DIFFERENT_ENTITY`.

#### `p0-missao-arqueologia`
Papel: arqueologia anterior, 121 objetos/27 repositórios + Drive, red team do Knowledge Kernel.
Classe: memória da investigação.
Departamento: PESQUISA + GOVERNANÇA.
Uso: reutilizar evidência anterior; não reiniciar escavação do zero.

### E. Economia, decisão e narrativa

#### `value-cap-analyzer`
Papel: valor criado versus valor capturado; teto de captura.
Classe: mecanismo analítico.
Departamentos: COMERCIAL + PESQUISA.
Princípio: `CREATED_VALUE != CAPTURED_VALUE`.

#### `margin-narrative-engine`
Papel: projeções diferentes do mesmo fato para públicos distintos.
Classe: mecanismo de narrativa executiva.
Departamento: COMERCIAL / GESTÃO.
Princípio: `PROJECTION_CAN_CHANGE; FACT_CANNOT`.

#### `jec-economic-lab`
Papel: validação econômica/first cash, separando prontidão de oferta e demanda externa.
Classe: laboratório econômico atual.
Departamento: COMERCIAL & CASH.
Princípio: `READINESS_IS_NOT_DEMAND`.

### F. Comercial, recrutamento e presença

#### `vaga-quente-connect`
Papel: evento → seleção → WhatsApp → resposta simples → encaminhamento → outcome.
Classe: mecanismo reutilizável.
Departamento: COMERCIAL.
Uso: padrão de outreach de baixa fricção.

#### `portfolio`
Papel: mapa público/genealógico do ecossistema.
Classe: projeção pública, não prova técnica.
Departamento: PROJEÇÃO PÚBLICA & MARCA.

#### `.github`
Papel: perfil público institucional da organização/usuário.
Classe: projeção pública.
Departamento: PROJEÇÃO PÚBLICA & MARCA.
Regra: toda alegação deve voltar a repositório/evidência fonte.

### G. Governança, fábrica e operação empresarial

#### `opera-control-tower`
Papel: saber onde está, quem trabalha, estado, bloqueio, próxima ação e evidência.
Classe: governança operacional da software house.
Departamento: GOVERNANÇA & CONTROL TOWER.
Modelo: Execução / Autorização / Preservação separados.

#### `dirceu-engenharia`
Papel: casa canônica mínima do patrimônio e aprendizado da empresa-lab.
Classe: conhecimento empresarial específico / frente pausada.
Departamento: EMPRESA-LAB / DIRCEU.
Fronteira: Dirceu → OPERA nunca é migração automática.

### H. Históricos, shells e negativos úteis

#### `Sistema-Integrado-de-Gerenciamento-de-Obras-SIGO-`
Papel: repositório vazio/arquivado.
Classe: negativo arqueológico.
Princípio: `EMPTY_IS_A_VALID_ARCHAEOLOGICAL_RESULT`.

#### `thought-weaver-31`
Papel: scaffold Lovable sem domínio comprovado na primeira passada.
Classe: baixa prioridade.

#### `street-sound-blueprint`
Papel: scaffold Lovable sem domínio comprovado na primeira passada.
Classe: baixa prioridade.

#### `lovable-blueprint-bot`
Papel: memória de prompting/processo e ancestral conceitual de recursos/movimentações auditáveis.
Classe: memória de processo; claims externos em quarentena.

### I. Outros artefatos e infraestrutura mapeados

#### `pdic`
Papel: gerações conceituais diferentes: integração/eventos e inteligência imobiliária/territorial.
Classe: `VERSION_DRIFT`.
Departamento: TERRITÓRIO / PRODUTO.
Regra: não costurar versões divergentes sem proveniência.

#### `opera-control-canonical-extract`
Já descrito em OPERA; permanece derivado, não autoridade.

## 5. Departamentos e contratos entre eles

### COMERCIAL & CASH
Entrada: capacidades comprovadas, provas, oferta, prospects, preço.
Saída: lead, conversa, proposta, PAID, feedback de mercado.
Fontes principais: admin-diagnostico-opera, memoriadevendas, jec-economic-lab, canteiro-de-obras-digital, vaga-quente-connect.
Não pode: inventar capacidade ou transformar hipótese de pesquisa em promessa.

### OBRAS & OPERAÇÕES
Entrada: obra, EAP, equipe, cronograma, estoque, eventos, evidências.
Saída: estado operacional, necessidade, missão, progresso, bloqueio.
Fontes: opera-atlas, copilotodeobras, opera-vision, direcione-operacional, reo.

### SUPRIMENTOS & COMPRAS
Entrada: necessidade líquida, fornecedor, item, prazo, contexto territorial.
Saída: cotação, negociação, recomendação, compra, entrega, memória.
Fontes: smart-cotacoes, copilotodeobras, obra-flow, opera-inspection.

### EVIDÊNCIA & QUALIDADE
Entrada: fatos, anexos, timestamps, fonte, autoridade.
Saída: prova, não conformidade, QA, histórico.
Fontes: reo, opera-inspection, opera-control, bim-normative-knowledge.

### TERRITÓRIO & MERCADO
Entrada: eventos públicos, localização, zoneamento, fornecedor, obra, licitação.
Saída: contexto espacial e sinais investigáveis.
Fontes: radar-territorial, radarurbanooperador, terra-mapa-control, pdic, cog-move.

### PESQUISA & CONHECIMENTO
Entrada: observação, hipótese, dataset, protocolo.
Saída: princípio candidato, teste, refutação, conhecimento classificado.
Fontes: informodinamica-canonical, tpc-paper, tpc-markets-research, bim-normative-knowledge, p0-missao-arqueologia.

### PRODUTO & ENGENHARIA
Entrada: gap comprovado, contrato de domínio, teste de campo.
Saída: implementação versionada.
Regra: reality→backlog via qfd-os; não construir wishlist.

### GOVERNANÇA & CONTROL TOWER
Entrada: missão, autorização, agente, evidência, SHA.
Saída: estado, fila, preservação, bloqueio, próxima ação.
Fontes: opera-control-tower, identity-central.

### EMPRESA-LAB / DIRCEU
Entrada: operação real da Dirceu.
Saída: ocorrência e aprendizado específico.
Regra: generalização para OPERA exige análise e validação.

### PROJEÇÃO PÚBLICA & MARCA
Entrada: claims já sustentados por fonte canônica.
Saída: site, portfolio, perfil, copy.
Regra: `PUBLIC_COPY_IS_A_PROJECTION_OF_CANONICAL_EVIDENCE`.

## 6. Fronteiras que não devem ser quebradas

- COD/Copiloto detecta necessidade; Smart Cotações resolve sourcing; Obra Flow registra pedido/recebimento; Inspection avalia qualidade; REO prova eventos.
- Atlas não absorve procurement apenas porque existe integração possível.
- Vision aprofunda o átomo visual e histórico antes de absorver outros módulos.
- Control Tower coordena projetos; Direcione coordena operação de obra.
- Identity Central liga representações sem roubar os dados operacionais.
- Dirceu produz evidência empresarial específica; OPERA só recebe o que for generalizável e autorizado.
- Canteiro Digital e `.github` projetam fatos; não criam fatos.

## 7. Princípios candidatos consolidados da remanufatura

- REPOSITORY_NAME_IS_NOT_CAPABILITY
- SCAFFOLD_IS_NOT_PRODUCT
- EMPTY_IS_A_VALID_ARCHAEOLOGICAL_RESULT
- DOCUMENTED_FEATURE_IS_NOT_VERIFIED_CAPABILITY
- AI_PRAISE_IS_NOT_EVIDENCE
- CREATED_VALUE != CAPTURED_VALUE
- PROJECTION_CAN_CHANGE; FACT_CANNOT
- COMPLEXITY_MUST_EARN_ITS_KEEP
- READINESS_IS_NOT_DEMAND
- SAME_NAME != SAME_ENTITY
- DIFFERENT_NAME != DIFFERENT_ENTITY
- CLASSIFY_AUTHORITY_BEFORE_REASONING
- RESEARCH_CLAIM != COMMERCIAL_CLAIM
- THEORY_EXPLAINS; EVIDENCE_DECIDES
- PRODUCT_BOUNDARY_IS_A_FEATURE
- NOT_PUBLISHED != BROKEN
- DEPLOYED != AUTHORIZED_TO_PUBLISH
- PUBLIC_COPY_IS_A_PROJECTION_OF_CANONICAL_EVIDENCE
- EXTRACT_CAN_IMPROVE_ACCESS_WITHOUT_INHERITING_AUTHORITY
- SEMANTIC_DEBT_IS_TECHNICAL_DEBT
- ROUTING_VALUE_CAN_EXIST_WITHOUT_TRANSACTION_OWNERSHIP
- EXTERNAL_AUTHORITY_CAN_BE_THE_REAL_PRODUCT_GATE
- PRODUCT_ATOM_BEFORE_ECOSYSTEM_INTEGRATION
- LOCATION_IS_CONTEXT_NOT_CAUSE

## 8. Estado da remanufatura

`FIRST_PASS_COVERAGE = COMPLETE`

Isso não significa `DEEP_REMANUFACTURE = COMPLETE`.

A unidade de trabalho deixa de ser “próximo repositório” e passa a ser “pergunta real”.

Escavações profundas prioritárias:
1. Smart Cotações + COD/Copiloto + Obra Flow — fechar procurement/evidência ponta a ponta.
2. OPERA Vision + Terra Mapa — timeline compartilhada, contexto diário e histórico visual.
3. Admin Diagnóstico + Canteiro Digital + Memória de Vendas — first cash e memória comercial.
4. Identity Central — somente quando identidade entre sistemas bloquear operação real.

## 9. Regra de atualização

Quando um repositório mudar materialmente de função, maturidade, autoridade ou vínculo departamental, atualizar este mapa por commit e registrar a mudança no `DIARIO.md`.

O mapa não deve crescer por decoração. Deve ficar mais preciso conforme a empresa aprende.