# CANTEIRO DE OBRAS DIGITAL — DEPARTAMENTOS E CONTRATOS INTERNOS

Data: 2026-08-24
Status: PROPOSED OPERATING MODEL / READY FOR HUMAN REVIEW

## Objetivo

Separar responsabilidades sem criar silos. Departamentos conversam por entradas, saídas, eventos, evidências e gates claros.

A empresa não deve ser organizada pela quantidade de repositórios. Repositórios são patrimônio técnico. Departamentos são responsabilidades operacionais.

## Departamentos

### 1. COMERCIAL & CASH
Missão: transformar capacidade comprovada em conversa, proposta e receita.
Recebe: produtos/capacidades comprovados, ICP, evidências, preço, mensagens e prospect.
Entrega: contato realizado, resposta, conversa, proposta, PAID, motivo de perda.
Sistemas/fontes: admin-diagnostico-opera, memoriadevendas, jec-economic-lab, canteiro-de-obras-digital.
Gate: nenhum claim comercial sem fonte de capacidade.
North star: PAID.

### 2. OBRAS & OPERAÇÕES
Missão: representar e coordenar o estado real das obras.
Recebe: necessidade, EAP, equipe, cronograma, estoque, evento, progresso.
Entrega: estado, bloqueio, necessidade, missão, evidência operacional.
Sistemas: Copiloto/COD, Atlas, Vision, Direcione, REO.

### 3. SUPRIMENTOS & COMPRAS
Missão: converter necessidade líquida em decisão de compra melhor informada.
Recebe: necessidade validada, estoque, prazo, quantidade, especificação.
Entrega: fornecedores consultados, propostas, negociação, recomendação, compra, entrega, memória.
Sistemas: Smart Cotações, COD/Copiloto, Obra Flow, Inspection.
Gate: recomendação de agente não é autorização de compra.

### 4. EVIDÊNCIA & QUALIDADE
Missão: garantir que fatos importantes tenham prova, contexto, tempo, autoridade e histórico.
Recebe: eventos, documentos, fotos, registros, claims.
Entrega: evidência, QA, não conformidade, classificação de autoridade.
Sistemas: REO, Inspection, BIM Normative Knowledge, Control.

### 5. TERRITÓRIO & MERCADO
Missão: transformar localização e sinais públicos em contexto investigável para decisão.
Recebe: licitações, empresas, obras, fornecedores, zoneamento, eventos públicos.
Entrega: entidade + localização + tempo + fonte + relevância investigável.
Sistemas: Radar Territorial, Radar Urbano, Terra Mapa, PDIC, Cog Move.
Gate: localização é contexto, não causa.

### 6. PESQUISA & CONHECIMENTO
Missão: testar hipóteses, preservar refutações e classificar conhecimento.
Recebe: observações, perguntas, datasets, mecanismos candidatos.
Entrega: protocolo, teste, evidência, refutação, princípio candidato/canônico.
Sistemas: Informodinâmica, TPC Paper, TPC Markets, BIM Knowledge, arqueologia.
Gate: teoria não vence evidência.

### 7. PRODUTO & ENGENHARIA
Missão: implementar gaps comprovados com o menor custo arquitetural defensável.
Recebe: problema real, evidência, prioridade, autorização.
Entrega: código, teste, SHA, release.
Gate: não codar wishlist; `QFD-OS` como padrão reality→backlog.

### 8. GOVERNANÇA & CONTROL TOWER
Missão: saber o estado da fábrica e preservar autoridade.
Recebe: missão, agente, autorização, bloqueio, evidência.
Entrega: estado, claim, preservação, próxima ação, handoff.
Sistemas: opera-control-tower, identity-central.
Gate: execução, autorização e preservação nunca colapsam.

### 9. EMPRESA-LAB / DIRCEU
Missão: fornecer realidade operacional sem transformar prática local em verdade universal.
Recebe: acontecimentos reais da Dirceu.
Entrega: FIELD_EVIDENCE, aprendizado, candidata de prática.
Gate: nada migra automaticamente para OPERA.

### 10. PROJEÇÃO PÚBLICA & MARCA
Missão: explicar a empresa e as ofertas sem exceder o que está comprovado.
Recebe: claims com fonte, maturidade, oferta autorizada.
Entrega: site, perfil, posts, portfolio, peças.
Gate: copy pública não cria maturidade.

## Contratos internos mínimos

### Obras → Suprimentos
Evento: `procurement_need`
Deve levar: obra, item, quantidade pedida, estoque, necessidade líquida, prazo, evidência e owner da compra.

### Suprimentos → Obras
Evento: `purchase_outcome`
Deve levar: item, quantidade, fornecedor, condição final, comprador/NF, status de entrega e evidência.

### Operação → Produto
Evento: `proven_gap`
Deve levar: comportamento observado, impacto, workaround atual, frequência, evidência, sistema afetado e critério de sucesso.

### Pesquisa → Produto
Evento: `validated_mechanism_candidate`
Não autoriza implementação sozinho. Deve informar força da evidência, limitações e baseline.

### Produto → Comercial
Evento: `sellable_capability`
Deve levar: o que existe, o que não existe, prova, estágio, entrega e limites.

### Comercial → Produto
Evento: `market_outcome`
Deve levar: prospect, mensagem/oferta usada, resposta, objeção, perda/conversão e PAID quando houver.

### Território → Comercial/Suprimentos
Evento: `territorial_signal`
Deve levar: entidade, local, data, fonte, sinal e razão da relevância. Nunca entregar inferência como fato.

### Evidência → Todos
Objeto: `evidence_ref`
Deve permitir voltar à fonte sem duplicar dado sensível desnecessariamente.

## Regras organizacionais

1. Departamentos podem compartilhar uma entidade, mas cada atributo tem um dono lógico.
2. Uma tela comum não implica um banco comum.
3. Integração começa por eventos/contratos antes de fusão de sistemas.
4. Todo novo departamento precisa justificar uma responsabilidade que não cabe nos existentes.
5. Cada departamento deve possuir um placar de outcome, não de atividade.
6. Se um agente precisa decidir qual fonte manda, a hierarquia de autoridade deve estar explícita antes.
7. A Control Tower coordena; não vira ERP de tudo.

## Primeiro desenho de conversação entre departamentos

OBRAS & OPERAÇÕES
→ necessidade real
→ SUPRIMENTOS & COMPRAS
→ compra/entrega
→ EVIDÊNCIA & QUALIDADE
→ outcome
→ PESQUISA & CONHECIMENTO (quando há hipótese)
→ PRODUTO & ENGENHARIA (quando há gap comprovado)
→ COMERCIAL & CASH (quando há capacidade vendável)
→ mercado/outcome
→ memória

TERRITÓRIO & MERCADO pode injetar sinais em Comercial, Suprimentos e Obras.
GOVERNANÇA & CONTROL TOWER observa estado, autoridade e preservação em todas as transições.

## Estado

Este é um modelo organizacional de operação, não organograma jurídico nem definição de cargos. Validar pela utilidade: se reduzir perda de contexto, duplicação e construção errada, promover; se adicionar burocracia sem outcome, simplificar.