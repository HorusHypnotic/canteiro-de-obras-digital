# Experimento M3 → M4 — Diagnóstico Operacional de Obra

Registrado em 2026-08-19, derivado da Operação Sangue-Suga (19/08/2026). Este documento define os critérios da segunda aplicação independente **antes** de qualquer execução.

## Objetivo

Promover o Diagnóstico Operacional de Obra de **M3 (aplicada)** para **M4 (repetida)**: segunda aplicação independente com mesmo protocolo e critérios de sucesso definidos antes da execução.

## Critérios de sucesso (definidos antes da execução)

1. **Critério mínimo:** identificar pelo menos 2 desvios operacionalmente relevantes e quantificáveis na obra do cliente, quando os dados disponíveis permitirem.
2. Entregar o relatório completo (raio-x, desvios, problemas priorizados, causas sustentadas por evidência, riscos, plano de ação, próxima decisão) dentro do prazo prometido.
3. Coletar métrica de economia identificada (antes vs. depois) quando mensurável — **sem prometer economia antes de medi-la**.
4. Coletar feedback do cliente por escrito ao final da entrega.

## Classificação de evidência

Toda afirmação de resultado será marcada como **FACT** (evidência direta: documento assinado, registro de pagamento, mensagem do cliente), **INFERENCE** (conclusão derivada) ou **UNKNOWN** (sem evidência suficiente). Nunca converter UNKNOWN em narrativa.

## Registro mínimo do pipeline (append-only)

Registro em `docs/PIPELINE-VENDA-V1.md`. Não construir CRM novo; solução existente (WhatsApp + este arquivo) resolve. Campos por lead:

| Campo | Momento |
|---|---|
| Lead (nome, empresa, contato, origem) | primeiro contato |
| Proposta (data, valor ofertado, canal) | envio da proposta |
| Aceite (data, valor aceito) | fechamento |
| Diagnóstico iniciado (data, escopo combinado) | início |
| Diagnóstico entregue (data, relatório) | entrega |
| Valor pago (data, valor, comprovante) | pagamento |
| Problemas encontrados | resultado |
| Valor econômico identificado (quando mensurável) | resultado |
| Feedback do cliente | pós-entrega |

## Regras do experimento

O critério mínimo exige dados; se os dados do cliente forem insuficientes, o relatório **deve concluir isso explicitamente** (não inventar classificação). Qualquer mudança de preço, escopo ou critério deste documento é uma decisão registrada no DIARIO.md, não uma alteração silenciosa.
