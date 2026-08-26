# SALES-SECTION-PROTOTYPE-001

> **CUSTÓDIA:** materialização fiel de `SALES-SECTION-PROTOTYPE-001`, originalmente aprovado em `READY_FOR_CODEX`.
>
> **SOURCE MISSION:** `SALES-SECTION-PROTOTYPE-001`  
> **SOURCE GATE:** `READY_FOR_CODEX`  
> **MATERIALIZED_AT:** 2026-08-26  
> **APPROVED_IMPLEMENTATION_BASE:** `main` @ `aded1a211ed14dcfc668c18c210fab47749b1993`  
> **STATUS:** handoff/documentação/assets somente; nenhuma implementação foi realizada.
>
> **PRESERVATION:** `ENGINE UNTOUCHED` · `RULESETS UNTOUCHED` · `KUs UNTOUCHED` · `Q-C01 UNTOUCHED`


## Gate

```text
READY_FOR_CODEX
```

Esta especificação descreve uma única seção comercial para ser inserida na landing institucional existente. Ela não cria uma segunda landing, não altera o cockpit existente, não cria backend, não altera engine/rulesets/KUs/semântica, não inventa respostas normativas e não usa Q-C01.

## Posição exata na landing

Inserir a seção imediatamente **depois de `#problema`** e **antes de `#oferta-ativa`**.

- Antes: seção “O problema / Perda de contexto”, com os quatro sintomas atuais: espera, retrabalho, compra emergencial e decisão fragmentada.
- Nova seção: Engenheiro de Bolso, com hero curto, demonstração sintética e limites.
- Depois: seção existente “Oferta ativa / Diagnóstico Operacional de Obra”.

A seção deve herdar a linguagem visual da landing atual: fundo escuro institucional (`#101312`), verde profundo (`#164d48`), lime como sinal (`#d7fa59`), laranja terracota para etiquetas de risco (`#a04416`), linhas finas e tipografia de alto contraste. Reutilizar o padrão de `section-label`, `kicker`, bordas retas, grid editorial e o CTA existente. Não repetir a foto do hero.

## Experiência comercial

### Hero

**Label:** `CONSULTA DE CAMPO`

**Título:** `Travou numa decisão da obra?`

**Subtítulo:** `Informe a pergunta e o contexto que você tem. O Engenheiro de Bolso mostra o que está claro, o que falta confirmar e quando a resposta segura é não concluir ainda.`

**CTA primária:** `Ver uma consulta de exemplo →`

**Apoio:** `Não substitui responsável técnico nem libera trabalho.`

A CTA deve fazer scroll suave para `#engenheiro-de-bolso-demo` e mover o foco para o heading da demonstração. Não abrir modal e não iniciar login.

### Demonstração

**Label:** `DEMONSTRAÇÃO SINTÉTICA`

**Contexto curto:** `Pré-início elétrico · contexto incompleto`

**01 / PERGUNTA**

`Podemos iniciar o serviço elétrico agora?`

**02 / CONTEXTO INFORMADO**

Exibir somente campos compreensíveis:

- `Etapa: pré-início`
- `Serviço: instalação elétrica`
- `Projeto: disponível`
- `Qualificação: informada`
- `Energia: não informado / UNKNOWN`

Não exibir `KU-E01`, `KU-E02`, `claim linkage`, `kernel` ou nomes de classes na superfície comercial.

**03 / LACUNA**

**Título:** `Falta confirmar: estado aplicável da energia.`

**Apoio:** `O contexto ainda não sustenta a decisão.`

**04 / RESULTADO**

**Título:** `Ainda não há informação suficiente para concluir.`

**Apoio:** `O fluxo para em vez de preencher a lacuna.`

O bloco deve parecer um resultado deliberado, não um erro de sistema. Usar `status=blocked` ou equivalente apenas como estado visual interno; a copy humana não deve dizer “erro”, “falha” ou “sistema indisponível”.

**05 / PRÓXIMA AÇÃO**

**Título:** `Confirmar o estado e a verificação aplicável.`

**Apoio:** `A decisão e a liberação continuam humanas.`

**06 / FONTE E LIMITES**

Linha compacta: `Fonte disponível no detalhe técnico · Não é laudo, vistoria, medição, certificação ou autorização de trabalho.`

Link/disclosure: `Detalhes técnicos +`.

### Como funciona

Após a demonstração, no máximo três passos:

1. **Pergunte** — `Descreva a decisão ou dúvida de campo.`
2. **Contextualize** — `Informe os fatos relevantes disponíveis.`
3. **Veja o próximo passo** — `O sistema mostra o que está claro, o que falta e onde a decisão precisa parar.`

### Por que confiar

Quatro conceitos, sem jargão interno:

- **Contexto:** `A orientação considera os fatos informados.`
- **Fonte:** `É possível reconstruir de onde veio a orientação no fluxo demonstrado.`
- **Lacunas:** `Informações ausentes continuam visíveis.`
- **Limites:** `Quando não existe base suficiente, a conclusão pode ser bloqueada.`

### Limites próximos da CTA final

`O Engenheiro de Bolso não é laudo, vistoria, medição, certificação ou autorização de trabalho. Não substitui engenheiro, técnico habilitado ou responsável técnico.`

CTA posterior: `Quero avaliar uma consulta de campo →`.

Microcopy: `A conversa define o escopo e os limites antes de qualquer compromisso.`

## Estados e comportamento

| Evento | Estado/visual | Comportamento |
|---|---|---|
| Entrada na seção | Hero + CTA | Nenhuma execução automática. |
| Clique em `Ver uma consulta de exemplo` | Foco na demo | Scroll para `#engenheiro-de-bolso-demo`, foco no heading; registrar analytics. |
| Demo antes de revelar | Pergunta visível | Mostrar a pergunta imediatamente; não teatralizar com espera longa. |
| Contexto revelado | Tags/campos | Revelar os cinco campos de uma vez em mobile; desktop pode usar entrada sequencial curta. |
| Lacuna | Âmbar discreto | Destacar somente `Energia: não informado / UNKNOWN` e a frase `Falta confirmar`. |
| Resultado | Verde profundo | Exibir bloqueio como característica de segurança, nunca como aprovação. |
| Próxima ação | Fundo claro | Manter decisão/liberação como humanas. |
| Detalhes técnicos fechado | Superfície limpa | O comprador entende o produto sem abrir. |
| Detalhes técnicos aberto | Disclosure | Mostrar snapshot, proveniência, corpus, comportamento UNKNOWN, testes e escopo demonstrado. |
| CTA final | Ação óbvia | Abrir canal de conversa/lead existente; não criar checkout. |

Não adicionar “APROVADO”, “SEGURO”, “CONFORME” ou “LIBERADO” à demo. Não transformar `UNKNOWN` em uma mensagem verde de sucesso.

## Responsividade

### Mobile — 390 × 844, prioridade máxima

- Header compacto, sem navegação extensa dentro da seção.
- Hero com título em duas linhas, subtítulo de no máximo três linhas e CTA de largura total.
- Demonstração em fluxo vertical: pergunta → contexto → lacuna → resultado → próxima ação.
- Campo `Energia: não informado / UNKNOWN` deve aparecer antes da dobra ou imediatamente após a pergunta.
- Resultado e próxima ação devem aparecer antes de qualquer disclosure técnico.
- Limites em uma frase curta junto à demonstração e repetidos antes da CTA final.
- Toque na CTA deve pousar diretamente na pergunta/demo.

### Desktop — 1440 × 1000

- Hero em duas colunas: título/CTA à esquerda e copy de apoio à direita.
- Demonstração em uma faixa editorial de largura máxima, com cinco campos em linha e três blocos inferiores: lacuna, resultado, próxima ação.
- O bloco de resultado deve ter maior peso visual que o disclosure.
- Como funciona e Por que confiar entram abaixo da demonstração, sem competir com a oferta ativa que vem depois.

## Componentes

### Reutilizar

- `.section-label`, `.kicker`, `.button`, `.button.primary`, `.button.ghost`.
- Tokens de cor e tipografia de `css/style.css`.
- Padrão de grids editoriais da landing.
- `active-offer` como seção posterior; não duplicar oferta.

### Alterar

- Navegação: adicionar âncora `Engenheiro de Bolso` somente se houver espaço sem deslocar `Contrate`; caso contrário, manter a seção acessível pelo CTA.
- Folha de estilo: adicionar os estilos da nova seção usando os tokens existentes, sem reestilizar o ecossistema inteiro.
- Footer/CTA da landing: manter o canal atual e atribuir evento de analytics à CTA específica.

### Criar

- `section#engenheiro-de-bolso`.
- `div#engenheiro-de-bolso-demo` ou equivalente.
- Componente visual de `field-demo`, `gap-callout`, `blocked-result`, `next-action` e disclosure técnico, somente se a arquitetura atual exigir componentes separados.
- Nenhum novo backend ou novo modelo de dados.

## Analytics

Usar eventos sem dados pessoais e sem enviar o conteúdo de Q-C01:

| Evento | Quando | Propriedades permitidas |
|---|---|---|
| `ep_section_view` | Seção entrou no viewport | `section_id`, `device_class` |
| `ep_demo_start` | CTA de demonstração acionada | `demo_id`, `device_class` |
| `ep_demo_context_view` | Contexto foi revelado | `demo_id` |
| `ep_demo_gap_view` | Lacuna ficou visível | `demo_id`, `gap_type=critical_unknown` |
| `ep_demo_block_view` | Resultado bloqueado apareceu | `demo_id`, `result_type=not_conclusive` |
| `ep_demo_technical_open` | Disclosure aberto | `demo_id` |
| `ep_field_cta_click` | CTA posterior acionada | `cta_id`, `device_class` |

Não registrar pergunta livre, contexto livre, identificadores de obra, nomes de pessoas, documentos, evidências ou Q-C01.

## Critérios de aceite

1. A landing institucional existente continua sendo a mesma superfície; não há segunda landing.
2. A seção aparece exatamente entre `#problema` e `#oferta-ativa`.
3. Em cinco segundos, um visitante consegue dizer que o produto organiza uma dúvida de obra, mostra o que falta e pode não concluir.
4. A demonstração usa somente o caso sintético de pré-início elétrico permitido.
5. A pergunta, o contexto, a lacuna, o resultado bloqueado, a próxima ação e a fonte aparecem nesta ordem.
6. O resultado nunca contém promessa de aprovação, conformidade, segurança, autorização ou liberação.
7. A seção não usa Q-C01 e não envia seus termos a analytics ou backend.
8. A superfície comercial não contém `KU`, `kernel`, `claim linkage`, `dependency unknown`, `Evidence State Model`, hashes ou nomes de classes fora do disclosure.
9. A frase de limites aparece junto da demonstração e antes da CTA final.
10. O disclosure técnico é opcional; fechado, a proposta continua compreensível.
11. O CTA primário leva à demonstração; o CTA posterior leva ao canal de conversa existente; não existe checkout, preço novo ou assinatura.
12. Mobile 390 × 844 mostra pergunta, lacuna e início do resultado sem rolagem excessiva; desktop 1440 × 1000 mantém a hierarquia sem fragmentação.
13. Eventos de analytics são disparados conforme a tabela e não carregam conteúdo sensível.
14. O texto “O fluxo para em vez de preencher a lacuna” comunica bloqueio deliberado, não falha.
15. A implementação deve usar output real capturado do fluxo aprovado ou marcar qualquer placeholder explicitamente como placeholder; nunca inventar texto normativo.
16. A implementação não altera engine, rulesets, KUs, semântica ou Q-C01.

## Não fazer nesta implementação

Não alterar o cockpit funcional existente. Não abrir Q-C01. Não criar novos casos normativos. Não prometer redução de custo, prazo ou acidentes. Não prometer cobertura geral de engenharia. Não inserir preço do Engenheiro de Bolso. Não criar checkout, assinatura, login, novo backend ou segunda landing.
