# Relatório de Remanufatura — Método RDS e Ecossistema GLP

**Data:** 26/09/2026  
**Cliente-laboratório:** Bezerrão Gás/Água/Gelo/Bebidas  
**Status:** CANDIDATE  
**Documento relacionado:** `2026-09-26-opera-revenda-intelligence-v0.md`

## 1. Objetivo

Investigar capacidades úteis presentes no problema de gestão de uma revenda de GLP e remanufaturá-las para o OPERA Revenda Intelligence, sem copiar conteúdo proprietário, sem atribuir ao Método RDS componentes que não estejam publicamente comprovados e sem construir um ERP por reflexo.

A pergunta operacional é:

> Que capacidades uma revenda precisa para transformar operação, clientes, território, divulgação e atendimento em decisões melhores e aprendizado contínuo?

## 2. Limite de evidência sobre o Método RDS

O Método RDS / Revendedor de Sucesso é usado como **benchmark de problema e mercado**.

A evidência pública disponível até esta investigação é insuficiente para declarar como fatos:
- módulos internos;
- sequência pedagógica completa;
- planilhas;
- scripts;
- ferramentas proprietárias;
- regras de decisão;
- automações;
- duração/preço/estrutura interna não confirmados.

Esses itens permanecem **UNKNOWN**.

Não copiar ou reconstruir conteúdo proprietário. A remanufatura deve partir de problemas observáveis, fontes públicas independentes, operação real do Bezerrão e testes próprios.

## 3. Capacidades observadas no ecossistema GLP

### 3.1 Diagnóstico da revenda
**Problema:** operar sem marco zero impede saber se uma intervenção melhorou algo.

**Remanufatura OPERA:** T0 antes da intervenção, preservando canais, atendimento, clientes, pontos, métricas e limitações conhecidas.

### 3.2 Controle operacional
**Problema:** venda, pedido, estoque, caixa e atendimento produzem rastros que se perdem quando não há estrutura.

**Remanufatura OPERA:** Event Ledger mínimo e integração futura com sistemas existentes.

### 3.3 Inteligência de clientes
**Problema:** saber apenas que houve venda não informa frequência, recorrência ou comportamento.

**Remanufatura OPERA:**
`cliente -> compra -> produto -> intervalo -> recompra -> resultado`

RFM-Lite pode ser testado como andaime explicável, nunca como score mágico.

### 3.4 Inteligência territorial
**Problema:** divulgação e distribuição acontecem no território, mas normalmente o resultado não volta ligado ao local.

**Remanufatura OPERA:**
`território -> ação/ponto -> contato -> pedido -> venda -> recompra -> aprendizado`

A Base Territorial Bezerrão V0 já define T01–T09 como unidades operacionais, sem inventar limites geográficos.

### 3.5 Financeiro
**Problema:** volume sem margem e custo pode produzir falsa sensação de desempenho.

**Remanufatura candidata:** conectar, quando houver dados confiáveis, produto, valor, margem/custo, campanha e resultado. Não calcular ROI quando atribuição ou custos estiverem incompletos.

### 3.6 Vendas e conversão
**Problema:** conversas que não fecham normalmente desaparecem.

**Remanufatura OPERA:**
`conversa -> pedido -> venda/não venda -> motivo -> ação posterior`

Motivos de perda tipados tornam o vazamento observável.

### 3.7 Logística
**Problema:** entrega faz parte da experiência e da economia da venda.

**Remanufatura OPERA:** preservar entrega necessária, promessa, realização e zona quando viável. Otimização de rota somente após volume e qualidade de dados justificarem.

### 3.8 Marketing mensurável
**Problema:** publicação, carro de som, ponto, panfleto ou campanha podem gerar movimento sem prova de venda.

**Remanufatura OPERA:**
`campanha -> território/canal -> contato -> pedido -> venda -> recompra`

Regra: não fazer divulgação no escuro.

### 3.9 Implantação gradual
**Problema:** tentar digitalizar toda a revenda de uma vez aumenta atrito e risco.

**Remanufatura OPERA:** instrumentar primeiro, medir, aprender e só depois automatizar.

## 4. O que estamos construindo

O alvo não é reproduzir um curso de gestão de revenda.

O candidato é:

# OPERA Revenda Intelligence

Loop central:

`OPERAÇÃO REAL -> CAPTURA -> MEMÓRIA -> PADRÃO -> DECISÃO -> AÇÃO -> RESULTADO -> APRENDIZADO -> NOVA REGRA`

A diferença essencial é a retroalimentação. Uma recomendação só ganha valor quando seu resultado retorna ao sistema e altera, confirma ou rejeita a regra usada anteriormente.

## 5. Andaimes cognitivos

### Atendente
`RECEBEU -> ENTENDEU -> OFERECEU -> CONFIRMOU -> FECHOU/NÃO FECHOU -> ANOTOU`

Objetivo: captura mínima sem transformar o atendente em analista.

### Gestor
`FATO -> PROBLEMA/SINAL -> AÇÃO -> RESULTADO`

Objetivo: reduzir decisões baseadas apenas em impressão.

### Território
`ONDE -> AÇÃO -> RESPOSTA -> VENDA -> RECOMPRA`

Objetivo: aprender onde presença, mídia e distribuição produzem resposta comercial.

### Cliente
`ÚLTIMA COMPRA -> FREQUÊNCIA -> COMPORTAMENTO OBSERVADO -> PRÓXIMA AÇÃO TESTÁVEL`

Não prever recompra individual sem histórico suficiente.

### Torre
`EVIDÊNCIA -> HIPÓTESE -> EXPERIMENTO -> MEDIÇÃO -> APRENDIZADO -> REGRA`

Nenhuma hipótese vira fato por repetição narrativa.

## 6. Caso concreto — carro de som

O carro de som pode funcionar como primeiro experimento territorial rastreável.

Exemplo:

`CARROSOM-T06-01 -> rota real -> janela -> atendimentos atribuíveis -> pedidos -> vendas -> recompra`

Antes:
- território selecionado;
- rota real;
- data/janela/duração;
- custo conhecido;
- código;
- mecanismo simples para identificar origem.

Depois:
- contatos atribuíveis;
- pedidos;
- vendas;
- custo quando conhecido;
- recompra observável;
- qualidade da atribuição;
- aprendizado.

Sem atribuição suficiente: **UNKNOWN**, não ROI estimado.

## 7. ERP como fonte, não concorrente automático

Existe reunião futura com contato que possivelmente trabalha com ERP comercial. A função, empresa, produto e capacidades ainda estão **UNKNOWN** até confirmação.

Hipótese a testar:

`ERP EXISTENTE -> RASTROS OPERACIONAIS -> OPERA INTELLIGENCE -> DECISÃO`

Perguntas para descoberta:
1. quais eventos o ERP já registra?;
2. existe identificação de cliente?;
3. itens, quantidade, valor e horário são estruturados?;
4. registra entrega?;
5. existe API/exportação/webhook?;
6. quais campos comerciais não existem?;
7. como evitar dupla digitação?;
8. quais permissões e limites de acesso existem?

Princípio: se o dado já existe com qualidade no sistema operacional, não pedir ao atendente que o registre novamente.

## 8. Arquitetura candidata em camadas

**Camada 1 — Sistema transacional existente**  
ERP/caixa/fiscal/estoque, quando existir.

**Camada 2 — OPERA Event Ledger**  
Normaliza os eventos úteis e acrescenta contexto que o transacional não possui.

**Camada 3 — Inteligência**  
Conversão, perdas, recorrência, território, campanha, entrega e qualidade de dados.

**Camada 4 — Andaimes de decisão**  
Briefs e recomendações explicáveis.

**Camada 5 — Feedback**  
Resultado da ação retorna ao ledger e recalibra a regra.

## 9. Remanufatura com retroalimentação

Pipeline obrigatório para capacidade externa:

`EVIDÊNCIA -> DECOMPOSIÇÃO -> PROBLEMA -> CAPACIDADE ISOLADA -> PROTÓTIPO -> TESTE -> GANHO MEDIDO -> COMPATIBILIDADE -> HUMAN GATE -> CANONIZAÇÃO/PARKED`

Uma ideia não entra no método porque parece sofisticada.

Ela entra quando:
- resolve problema real;
- pode ser testada isoladamente;
- produz evidência;
- não cria atrito desnecessário;
- respeita arquitetura e operação;
- melhora resultado ou ganho de informação;
- sobrevive ao gate humano.

## 10. Fontes públicas usadas na investigação

As fontes abaixo servem para observar classes de problemas e capacidades do ecossistema. Não provam que o Método RDS contenha cada capacidade.

- Ultragaz Revendas — conteúdos públicos sobre gestão, clientes, planejamento e divulgação:
  https://www.ultragazrevendas.com.br/
- VenderGás — software/gestão para revendas:
  https://vendergas.com.br/
- RevGás — gestão e planejamento financeiro:
  https://revgas.com/
- Prêmio GLP / transformação digital do parque revendedor:
  https://www.gasescombustiveis.com.br/premioglp/
- Pesquisa acadêmica sobre estratégias de marketing e desempenho de vendas em empresa de GLP:
  https://www.researchgate.net/publication/277569853_Estrategias_de_Marketing_e_Desempenho_de_Vendas_Um_Estudo_de_Caso_Sobre_a_Eficiencia_de_Acoes_Continuadas_Numa_Empresa_de_GLP

## 11. O que já existe no Bezerrão para testar

- cliente real em ciclo de 90 dias;
- T0 preservado;
- WhatsApp, Instagram, Google e Vitrine;
- pontos/freezers conhecidos com diferentes graus de confirmação;
- NFC em recuperação;
- atendimento real;
- Base Territorial V0 T01–T09;
- carro de som planejado como ação territorial;
- Event Ledger V0 desenhado;
- Capture Loop definido como próxima unidade técnica.

Isso permite testar o método sobre operação real em vez de construir uma arquitetura teórica.

## 12. Próxima unidade

**ERI-V0-01 — Capture Loop**

Escopo:
1. confirmar quais dados já existem nos sistemas do Bezerrão;
2. eliminar duplicidade de captura;
3. definir schema mínimo;
4. capturar eventos com baixo atrito;
5. medir cobertura/qualidade;
6. produzir brief read-only;
7. executar primeira ação orientada por dado;
8. registrar resultado;
9. recalibrar regra.

Não incluir no mesmo lote:
- previsão avançada;
- IA comercial autônoma;
- roteirização avançada;
- substituição do ERP;
- automação fiscal;
- score opaco.

## 13. Estado

- Método RDS como benchmark: **CANDIDATE / evidência interna limitada**.
- Classes de capacidade do ecossistema GLP: **OBSERVED em fontes públicas**.
- OPERA Revenda Intelligence: **CANDIDATE**.
- Event Ledger V0: **DESENHADO, não validado em produção**.
- Base Territorial T01–T09: **PASS como decisão operacional; limites geográficos pendentes**.
- Integração com ERP: **HYPOTHESIS / descoberta pendente**.
- Carro de som territorial: **PLANEJADO / resultado ainda UNKNOWN**.

## Fechamento

O princípio da remanufatura é simples:

> Não copiar a solução externa. Descobrir o problema que ela resolve, isolar a capacidade, reconstruí-la dentro da nossa arquitetura, testá-la no Bezerrão, medir o resultado e deixar o aprendizado alterar a próxima rodada.

O Bezerrão funciona como laboratório operacional do método, mas somente evidência observada pode promover uma hipótese para regra canônica.
