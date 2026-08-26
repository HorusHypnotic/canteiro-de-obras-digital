const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.querySelector('[data-year]').textContent = new Date().getFullYear();

// Engenheiro de Bolso: eventos locais, sem conteúdo livre ou dados pessoais.
const pocketDeviceClass = () => window.matchMedia('(max-width: 520px)').matches ? 'mobile' : 'desktop';
const trackPocketEvent = (event, properties = {}) => {
  const detail = { event, ...properties };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(detail);
  window.dispatchEvent(new CustomEvent('cod:analytics', { detail }));
};

const observePocketEvent = (selector, event, properties) => {
  const target = document.querySelector(selector);
  if (!target) return;
  const eventObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    trackPocketEvent(event, typeof properties === 'function' ? properties() : properties);
    eventObserver.disconnect();
  }, { threshold: 0.08 });
  eventObserver.observe(target);
};

observePocketEvent('[data-ep-section]', 'ep_section_view', () => ({ section_id: 'engenheiro-de-bolso', device_class: pocketDeviceClass() }));
observePocketEvent('[data-ep-context]', 'ep_demo_context_view', { demo_id: 'pre-inicio-eletrico' });
observePocketEvent('[data-ep-gap]', 'ep_demo_gap_view', { demo_id: 'pre-inicio-eletrico', gap_type: 'critical_unknown' });
observePocketEvent('[data-ep-block]', 'ep_demo_block_view', { demo_id: 'pre-inicio-eletrico', result_type: 'not_conclusive' });

document.querySelector('[data-ep-demo-start]')?.addEventListener('click', (event) => {
  event.preventDefault();
  const demo = document.querySelector('#engenheiro-de-bolso-demo');
  const heading = demo?.querySelector('[data-ep-demo-heading]');
  trackPocketEvent('ep_demo_start', { demo_id: 'pre-inicio-eletrico', device_class: pocketDeviceClass() });
  demo?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => heading?.focus({ preventScroll: true }), 450);
});

document.querySelector('[data-ep-technical]')?.addEventListener('toggle', (event) => {
  if (event.currentTarget.open) trackPocketEvent('ep_demo_technical_open', { demo_id: 'pre-inicio-eletrico' });
});

document.querySelector('[data-ep-field-cta]')?.addEventListener('click', () => {
  trackPocketEvent('ep_field_cta_click', { cta_id: 'evaluate-field-query', device_class: pocketDeviceClass() });
});

const portfolioConfig = window.PORTFOLIO_CONFIG || {};
const sessionId = sessionStorage.getItem('portfolio_session_id') || crypto.randomUUID();
sessionStorage.setItem('portfolio_session_id', sessionId);
let diagnosisPayload = null;
let turnstileToken = '';

const diagnosisForm = document.querySelector('[data-diagnosis-form]');
const diagnosisResult = document.querySelector('[data-diagnosis-result]');

diagnosisForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(diagnosisForm);
  const axes = ['custo', 'prazo', 'execucao', 'controle', 'risco'];
  const scores = Object.fromEntries(axes.map((axis) => [axis, Number(data.get(axis))]));
  const score = axes.reduce((total, axis) => total + scores[axis], 0);
  const range = score <= 3
    ? { level: 'Baixo', setup: 'R$ 3.000', monthly: 'R$ 1.500/mês', copy: 'A obra apresenta uma base de controle organizada. A implantação indicada busca consolidar rotinas e preservar a qualidade dos registros.' }
    : score <= 6
      ? { level: 'Médio', setup: 'R$ 4.000 a R$ 6.000', monthly: 'R$ 2.000 a R$ 2.800/mês', copy: 'Existem lacunas relevantes de controle. A prioridade é estruturar dados, responsabilidades e acompanhamento antes que os desvios se acumulem.' }
      : { level: 'Alto', setup: 'R$ 6.000 a R$ 8.000', monthly: 'R$ 3.000 a R$ 3.500/mês', copy: 'A obra apresenta exposição elevada a desvios. Recomenda-se implantação estruturada e acompanhamento frequente para recuperar previsibilidade.' };

  diagnosisPayload = {
    ...scores,
    resultado: `Nível de controle ${range.level.toLowerCase()}; pontuação ${score}/10.`,
    recomendacao: `Implantação ${range.setup}; acompanhamento ${range.monthly}.`,
    respostas: {
      valor_obra: String(data.get('valor_obra') || '').slice(0, 40),
      tipo_obra: String(data.get('tipo_obra') || '').slice(0, 40),
      fase: String(data.get('fase') || '').slice(0, 40),
      frentes: String(data.get('frentes') || '').slice(0, 3),
    },
  };
  diagnosisResult.querySelector('[data-diagnosis-score]').textContent = `${score} / 10`;
  diagnosisResult.querySelector('[data-diagnosis-level]').textContent = range.level;
  diagnosisResult.querySelector('[data-diagnosis-setup]').textContent = range.setup;
  diagnosisResult.querySelector('[data-diagnosis-monthly]').textContent = range.monthly;
  diagnosisResult.querySelector('[data-diagnosis-copy]').textContent = range.copy;
  diagnosisResult.hidden = false;
  diagnosisResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelector('[data-request-diagnosis]')?.addEventListener('click', () => {
  window.open('https://wa.me/5594992193129?text=Ol%C3%A1%2C%20fiz%20o%20autoteste%20de%20diagn%C3%B3stico%20na%20p%C3%A1gina%20COD%20e%20quero%20solicitar%20o%20Diagn%C3%B3stico%20Operacional%20de%20Obra.', '_blank', 'noopener');
});

// COD MONEY PATH V0 (16/08/2026): formulário de manifestação removido da página;
// canal de contato agora é conversa direta (WhatsApp + e-mail). Blocos abaixo
// permanecem no código como histórico versionado e serão reativados SOMENTE
// se uma infraestrutura real (chave Turnstile + endpoint) existir.
const interestForm = document.querySelector('[data-interest-form]');
const interestStatus = document.querySelector('[data-interest-status]');
const interestSubmit = document.querySelector('[data-interest-submit]');

// 19/08/2026 Missão P0: fetch do endpoint morto removido do caminho de carregamento;
// indicadores da página histórica permanecem no markup apenas como registro versionado.
const loadMetrics = async () => {
  if (!portfolioConfig.apiUrl) return;
};
loadMetrics();

const enableTurnstile = () => {
  const siteKey = portfolioConfig.turnstileSiteKey;
  if (!siteKey || siteKey.startsWith('__')) {
    interestStatus.textContent = 'A verificação de segurança ainda precisa ser configurada.';
    return;
  }
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  script.async = true;
  script.defer = true;
  script.onload = () => window.turnstile.render(document.querySelector('[data-turnstile]'), {
    sitekey: siteKey,
    callback: (token) => {
      turnstileToken = token;
      interestSubmit.disabled = false;
      interestStatus.textContent = 'Verificação concluída. Revise os dados e envie.';
    },
    'expired-callback': () => {
      turnstileToken = '';
      interestSubmit.disabled = true;
      interestStatus.textContent = 'A verificação expirou. Faça-a novamente.';
    },
  });
  document.head.appendChild(script);
};
if (interestForm) enableTurnstile();

interestForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(interestForm);
  const products = data.getAll('produtos');
  if (!products.length) {
    interestStatus.textContent = 'Selecione ao menos um produto.';
    return;
  }
  if (!turnstileToken) {
    interestStatus.textContent = 'Conclua a verificação de segurança.';
    return;
  }
  const mode = String(data.get('modalidade') || '');
  const payload = {
    nome: data.get('nome'), email: data.get('email'), telefone: data.get('telefone'),
    empresa: data.get('empresa'), cidade: data.get('cidade'), uf: data.get('uf'),
    mensagem: data.get('mensagem'), modalidade: mode, produtos: products,
    consentimento: data.get('consentimento') === 'on', origem: 'portfolio_github_pages',
    session_id: sessionId, page_path: location.pathname, turnstile_token: turnstileToken,
    diagnostico: mode === 'solicitacao_diagnostico' ? diagnosisPayload : null,
  };
  interestSubmit.disabled = true;
  interestStatus.textContent = 'Enviando sua manifestação…';
  try {
    const response = await fetch(portfolioConfig.apiUrl, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Falha no envio.');
    interestForm.reset();
    diagnosisPayload = null;
    turnstileToken = '';
    interestStatus.textContent = `Recebido com sucesso. Protocolo: ${result.protocolo}`;
    window.turnstile?.reset();
    await loadMetrics();
  } catch (error) {
    interestStatus.textContent = error instanceof Error ? error.message : 'Não foi possível enviar agora.';
    interestSubmit.disabled = false;
  }
});
