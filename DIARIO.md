# DIARIO.md — Diário Operacional Canônico

**Regra permanente:** toda missão futura que produzir alteração material, decisão, experimento, venda, validação, refutação, mudança de maturidade ou mudança de direção deverá acrescentar UMA entrada curta ao DIARIO.md, no formato abaixo. O diário registra acontecimentos. Não explica acontecimentos. Máximo recomendado: 3–5 bullets por dia. Append-only: não reescrever entradas históricas silenciosamente. Documentação detalhada continua nos artefatos próprios.

```
## YYYY-MM-DD
- acontecimento;
- decisão;
- evidência/resultado;
- próximo estado relevante, quando houver.
```

---

## 2026-08-19
- Operação Sangue-Suga concluída.
- Patrimônio principal reinterpretado como capacidades transferíveis, não quantidade de softwares.
- Diagnóstico Operacional de Obra priorizado comercialmente: Índice Sangue-Suga 85/100, maturidade M3.
- Decisão: priorizar extração, venda e validação antes de nova construção.
- Página reconfigurada: oferta principal passa a ser o Diagnóstico Operacional de Obra (R$ 1.297); R$ 197 permanece apenas como triagem separada; ecossistema reposicionado como infraestrutura.
- Próximo gate: segunda aplicação independente com critérios de sucesso definidos previamente.

## 2026-08-19 — Missão P0.1
- Problema reportado: divergência aparente entre commit 64fbe3c (R$ 1.297) e URL pública (R$ 197 como oferta principal).
- Causa: nenhuma divergência existe. O último build do GitHub Pages (build 1161633048, 19/08 15:46:41Z) usa exatamente o SHA 64fbe3c; HTML servido é byte-idêntico ao do commit e ao local. O R$ 197 que aparece no HTML pertence a uma seção histórica oculta (display:none) e à seção de triagem — nunca como oferta principal.
- Verificação: 3 fetches independentes (local, público, público com cache-busting e Pragma no-cache), ETag idêntica ("6a85cfe1-7613"), Last-Modified 19/08 15:46:41 GMT coincidindo com o fim do build, diff vazio entre git show 64fbe3c:index.html e o HTML público.
- Correção executada: nenhuma (deploy já estava no estado canônico). Nenhuma alteração no repositório.
- Estado público final (FACT): oferta principal "Diagnóstico Operacional de Obra" com R$ 1.297; "Triagem Diagnóstica — R$ 197" separada; CTA principal aponta para WhatsApp 55 94 99219-3129. Gate REPOSITÓRIO=ARTEFATO=DEPLOY=HTML PÚBLICO: PASS.
- Registro de aprendizado: alegações de divergência pública devem ser verificadas por fetch HTTP com cache-busting contra o SHA do build antes de qualquer intervenção.

## 19/08/2026 — Kit Comercial v1 (Missão P1)

- CRIADO kit comercial do Diagnóstico Operacional de Obra fora do repo do site (não altera site, oferta, preço ou copy; nada no repo mudou exceto esta entrada).
- 5 peças finais em `kit/` (anexo externo): Instagram Feed (01, 1080×1350), Instagram Stories (02, 1080×1920), WhatsApp Status (03, 1080×1920 com conteúdo essencial dentro das áreas seguras de ~250px), LinkedIn (04, 1080×1350) e Threads (05, 1080×1080). Todas: preço R$ 1.297 preço fixo, CTA "Solicite seu diagnóstico" → WhatsApp 55 94 99219-3129, URL canônica no rodapé das peças 01/04. Identidade herdada do site (ink/lime/laranja, estética de investigação).
- Guia Operacional em PDF (8 páginas, `guias/GUIA_OPERACIONAL.pdf` anexo): 12 seções cobrindo o que se vende, fluxo de venda com checklist, perguntas iniciais, dados e evidências, protocolo de execução (COLETAR→ORGANIZAR→DESVIOS→CAUSAS→CLASSIFICAR FACT/INFERENCE/UNKNOWN→PRIORIZAR→RECOMENDAR), checklist de entrega, devolutiva, protocolo de travamento (48h), limites do serviço e checklist pré-publicação.
- Copies por canal aprovadas: sem promessa de economia, triagem R$ 197 apenas como entrada distinta, sem resultados inventados, sem laudo prometido.
- Auditoria de qualidade: PASS — dimensões exatas verificadas programaticamente, preço e CTA consistentes, URL canônica correta, identidade visual consistente, PDF dentro de 6–10 páginas.
- REGRA APLICADA: publicar peças é experimento M3→M4; cada publicação deve ser registrada no PIPELINE/DIARIO com data e canal antes de publicar.

## 2026-08-24 — CASH-EVIDENCE-001

- Catálogo de três ofertas preparado para revisão: Diagnóstico Operacional R$ 1.297, Triagem Diagnóstica R$ 197 e Evidence Check Piloto R$ 490.
- Implantação e acompanhamento permanecem como etapas posteriores; nenhuma faixa histórica foi convertida silenciosamente em produto.
- Evidence Check identificado explicitamente como piloto experimental, com limites técnicos e contato direto pelo WhatsApp canônico.
- Sem deploy: publicação permanece bloqueada pelo HUMAN_GATE final da issue HorusHypnotic/opera-control-tower#10.

## 2026-09-07 — INFRA-COST-LEDGER-001
- Infraestrutura, compute, CI/CD e IA passam a integrar explicitamente o custo operacional da Canteiro de Obras Digital.
- Criado `docs/CUSTOS-INFRA-IA-COMPUTE-2026-09-07.md` com baseline, métricas e gates econômicos.
- Sinal observado: 2.000 minutos de GitHub Actions consumidos em aproximadamente 7 dias; escala do ecossistema exige tratar capacidade como problema de fábrica.
- Hipótese em teste: pool federado de compute próprio/gratuito/barato, preservando GitHub como código/governança e IA paga para raciocínio.
