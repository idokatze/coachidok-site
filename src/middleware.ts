// Runs on every page as it is built. One job: hyphenated Hebrew words (איש-ברזל, חצי-איש-ברזל) never break across two lines.
// Browsers may break a line after a hyphen, so each such word is wrapped in <span class="nowrap"> (global.css).
// The copy stays plain text, and so does what search engines read: the hyphen is an ordinary hyphen.
// Only the visible text in <body> is touched — not <head> (title, meta), attributes, scripts, styles, or dropdowns (<select>: its options can only hold plain text).
import { defineMiddleware } from 'astro:middleware';

const HYPHENATED_HEBREW = /[\u05D0-\u05EA]+(?:-[\u05D0-\u05EA]+)+/g;

const wrap = (text: string) => text.replace(HYPHENATED_HEBREW, '<span class="nowrap">$&</span>');

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.text();
  const bodyStart = html.indexOf('<body');
  if (bodyStart === -1) return new Response(html, response);
  const head = html.slice(0, bodyStart);
  // split the body into script/style/select blocks (left alone) and everything else; in the rest, change only text between tags
  const body = html.slice(bodyStart).split(/(<(?:script|style|select)\b[\s\S]*?<\/(?:script|style|select)>)/).map((part) =>
    /^<(script|style|select)\b/.test(part) ? part : part.replace(/>([^<]+)</g, (_m, text: string) => `>${wrap(text)}<`)
  ).join('');
  return new Response(head + body, response);
});
