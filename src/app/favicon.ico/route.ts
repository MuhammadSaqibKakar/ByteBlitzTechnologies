const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="96" y1="48" x2="416" y2="464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#071B3A" />
      <stop offset="0.58" stop-color="#0B3269" />
      <stop offset="1" stop-color="#007BFF" />
    </linearGradient>
    <linearGradient id="bolt" x1="314" y1="132" x2="424" y2="320" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF6A00" />
      <stop offset="1" stop-color="#FF9D2E" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <path d="M405 74c24 0 43 19 43 43v278c0 24-19 43-43 43H107c-24 0-43-19-43-43V117c0-24 19-43 43-43h298Z" fill="#071B3A" opacity="0.72" />
  <path d="M360 118 254 279h73l-30 115 111-169h-75l27-107Z" fill="url(#bolt)" />
  <text x="94" y="312" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="150" font-weight="900" letter-spacing="-10">BB</text>
  <path d="M95 356h186" stroke="#00AEEF" stroke-width="22" stroke-linecap="round" />
</svg>`;

export const dynamic = "force-static";

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
