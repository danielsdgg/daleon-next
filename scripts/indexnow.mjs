// scripts/indexnow.mjs
// Usage:
//   node scripts/indexnow.mjs                                            -> submits every URL in your sitemap
//   node scripts/indexnow.mjs https://daleondynamics.com/blog/new-post   -> submits only that URL
const HOST = 'daleondynamics.com';
const KEY = '4131e6db49e9469bbe4cf25e4358ffae';

async function getSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not load sitemap (${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length ? args : await getSitemapUrls();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`Submitted ${urlList.length} URL(s). Response: ${res.status} ${res.statusText}`);
// 200 = accepted. 202 = accepted, key check pending (normal on the first run).
// 400/422 = bad request or URLs that don't match the host. 403 = key file not found or key mismatch.
// 429 = too many requests, so wait and try later.