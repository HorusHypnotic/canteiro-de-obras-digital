# CANTEIRO DE OBRAS DIGITAL — CUSTOS DE INFRA, IA E COMPUTE

Data: 2026-09-07
Status: ACTIVE COST LEDGER / BASELINE V0

## Objetivo

Tratar infraestrutura, compute, CI/CD e inteligência artificial como custos operacionais reais da Canteiro de Obras Digital. A métrica não é apenas mensalidade: é custo por trabalho concluído, capacidade disponível, risco de interrupção e custo humano de operação.

## Regra econômica

1. Free tier não é custo zero se exige manutenção humana relevante.
2. Assinatura já paga continua sendo custo, mesmo quando o custo marginal de uma tarefa é zero.
3. Crédito promocional/free tier deve ser separado de capacidade permanente.
4. Compute mecânico e inteligência devem ser medidos separadamente.
5. Não pagar IA para executar trabalho que script/terminal/runner consegue repetir deterministicamente.
6. Quando R$1 de infraestrutura reduzir mais de R$1 de custo total comprovado, a compra vira candidata econômica, não desperdício.
7. Toda estimativa permanece ESTIMATE até existir fatura, dashboard ou medição própria.

## Baseline observado

| Item | Estado | Custo/limite conhecido | Classe | Próxima medição |
|---|---|---:|---|---|
| GitHub Actions | QUOTA_EXHAUSTED | 2.000 min consumidos em ~7 dias | compute/CI | minutos por repo, workflow e job |
| GitHub Actions Linux hosted | FALLBACK_PAGO | referência investigada: US$0,006/min além da franquia | compute/CI | validar pela cobrança real antes de contratar |
| GitHub self-hosted runner | CANDIDATE | não consome minutos hospedados do Actions; máquina/energia/manutenção ficam conosco | compute próprio | benchmark local e isolamento |
| Supabase Free | ACTIVE/RISK_PAUSE | R$0 no plano atual; projeto free pode pausar por inatividade | DB/control plane | disponibilidade e uso real |
| PC local | OWNED_CAPACITY | custo marginal principal = energia + disponibilidade + manutenção | compute próprio | medir CPU/RAM, duração e kWh/job |
| Oracle Always Free A1 | CANDIDATE | investigar/validar disponibilidade real da conta/região e capacidade concedida | compute remoto | provisionar somente após gate humano/conta |
| Cloudflare Builds Free | CANDIDATE | investigar compatibilidade e franquia vigente antes de adoção | build complementar | teste real de workflow |
| Google Free compute/control plane | CANDIDATE | investigar capacidade vigente e adequação | control plane | benchmark mínimo |
| Servidor mensal barato | FALLBACK_CANDIDATE | ainda sem contratação | compute remoto | comparar R$/1.000 min equivalentes |
| Spot/preemptible | RESEARCH | preço variável | compute elástico | medir custo/job + taxa de interrupção |
| Codex/IA paga | INTELLIGENCE | contabilizar assinatura/uso separadamente | inteligência | custo por missão que exigiu raciocínio |

## Demanda de capacidade

Sinal observado: 2.000 minutos de GitHub Actions consumidos em aproximadamente 7 dias.

Projeção linear simples: ~8.000 min/mês para uma carga semelhante à semana observada. Isto NÃO deve ser multiplicado cegamente pelo número de projetos; projetos têm intensidade diferente e otimização muda a demanda. Serve apenas como alerta de ordem de grandeza.

O ecossistema possui dezenas de repositórios/projetos. Portanto o problema é de capacidade de fábrica, não apenas de economia de uma única aplicação.

## Métricas obrigatórias

- R$/mês por provedor
- minutos de compute consumidos
- minutos equivalentes gratuitos
- CPU-horas e RAM-horas quando disponíveis
- jobs concluídos
- jobs falhos/reexecutados
- custo por job concluído
- custo por 1.000 minutos equivalentes
- tempo humano gasto operando infraestrutura
- custo de IA por missão
- percentual de tarefas mecânicas executadas sem IA paga
- disponibilidade e incidentes

## Arquitetura econômica alvo

GitHub = código, PR, governança e gates mínimos.

Control Tower/Supabase = estado, fila, telemetria e orquestração leve.

Pool de runners = PC local + compute gratuito validado + servidor barato/spot quando economicamente defensável.

IA = raciocínio, investigação e decisões; não CPU substituta.

## Gates para contratação

Nenhuma nova mensalidade de infraestrutura deve ser contratada apenas porque um free tier acabou. Antes de pagar:

1. medir demanda real;
2. eliminar reexecução inútil;
3. testar capacidade própria;
4. testar capacidade gratuita defensável;
5. comparar custo total, incluindo manutenção humana;
6. contratar somente se melhorar custo/capacidade/continuidade do sistema como um todo.

## Hipótese operacional atual

A Canteiro deve construir um pool federado de compute capaz de crescer de milhares para dezenas de milhares de minutos equivalentes/mês sem atrelar toda a fábrica a minutos hospedados do GitHub.

Estado epistêmico: HYPOTHESIS_UNDER_TEST. Não é arquitetura de produção autorizada ainda.
