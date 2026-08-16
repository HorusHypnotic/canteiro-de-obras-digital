// COD MONEY PATH V0 (16/08/2026):
// - apiUrl: mantida no estado anterior (endpoint 404); não é mais usada após a remoção do formulário morto.
// - turnstileSiteKey: placeholder — formulário morto removido; reativar somente com chave real.
// - Analytics: DEFERRED (Plausible/GA4 requerem conta externa; decisão de instrumentação fica com o owner).
window.PORTFOLIO_CONFIG = {
  apiUrl: "https://aiyluolhojdszqitusum.supabase.co/functions/v1/portfolio-interest",
  turnstileSiteKey: "__TURNSTILE_SITE_KEY__"
};
