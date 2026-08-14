import { readFile } from 'node:fs/promises';

const contract = JSON.parse(await readFile(new URL('../data/active-offer.json', import.meta.url), 'utf8'));
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../css/style.css', import.meta.url), 'utf8');
const active = contract.offers.filter((offer) => offer.status === 'ACTIVE');
const failures = [];

if (active.length !== 1) failures.push(`expected 1 ACTIVE offer, found ${active.length}`);
const offer = active[0];
if (!offer) failures.push('ACTIVE offer missing');
if (offer) {
  if (offer.price.amount !== 197 || offer.price.currency !== 'BRL') failures.push('price is not BRL 197');
  if (offer.order_enabled !== false) failures.push('order must remain disabled in MM-01');
  for (const value of [offer.offer_id, offer.offer_version, offer.public_name, 'R$ 197', offer.cta.label]) {
    if (!html.includes(value)) failures.push(`public HTML does not contain: ${value}`);
  }
}
for (const required of ['Para quem é', 'Você fornece', 'Você recebe', 'Como funciona', 'Limites claros', 'data-future-action="CREATE_ORDER"']) {
  if (!html.includes(required)) failures.push(`required offer content missing: ${required}`);
}
for (const forbidden of [/chave\s+pix/i, /pix\s+copia/i, /qr\s*code\s+pix/i]) {
  if (forbidden.test(html)) failures.push(`forbidden payment pattern found: ${forbidden}`);
}
if (!css.includes('@media(max-width:520px)') || !css.includes('.active-offer')) failures.push('responsive offer CSS missing');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('MM-01 active offer validation: PASS');
