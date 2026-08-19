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
