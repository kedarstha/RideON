// <Icon name="phone" /> renders a symbol from the sprite below (rendered once in App).
export function Icon({ name, className = "" }) {
  return (
    <svg className={`i ${className}`.trim()} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

// Motorbike illustration used on motorbike cards until real photos are added
export function MotoArt({ color, label }) {
  return (
    <svg viewBox="0 0 400 240" style={{ color }} role="img" aria-label={label}>
      <use href="#art-moto" />
    </svg>
  );
}

const SPRITE = `
<symbol id="i-phone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></g></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></g></symbol>
<symbol id="i-fb" viewBox="0 0 24 24"><path fill="currentColor" d="M14 8h3V4h-3a5 5 0 0 0-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1z"/></symbol>
<symbol id="i-ig" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></g></symbol>
<symbol id="i-tt" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></symbol>
<symbol id="i-chev" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></symbol>
<symbol id="i-bike" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="16" r="3.5"/><circle cx="19" cy="16" r="3.5"/><path d="M5 16h5l3-5h4l2 5M14 6h3l1 5M8 11h5"/></g></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 2 4 14h7l-1 8 9-12h-7z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></g></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></g></symbol>
<symbol id="i-helmet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15a9 9 0 0 1 18-2v4H9l-2 2H4a1 1 0 0 1-1-1z"/><path d="M13 13h8M12 6c-2 2-3 4-3 7"/></g></symbol>
<symbol id="i-truck" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4h14v12H1zM15 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></g></symbol>
<symbol id="i-support" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2zM18 17v1a3 3 0 0 1-3 3h-3"/></g></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></g></symbol>
<symbol id="i-mountain" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 20 7-12 4 6 3-4 6 10z"/><path d="m7.5 10.5 1.5 1.5 1.5-1.5"/></g></symbol>
<symbol id="i-map" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m1 6 7-3 8 3 7-3v15l-7 3-8-3-7 3z"/><path d="M8 3v15M16 6v15"/></g></symbol>
<symbol id="i-gauge" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/></g></symbol>
<symbol id="i-road" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 21 8 3M20 21 16 3M12 4v2M12 10v3M12 17v3"/></g></symbol>
<symbol id="i-engine" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2h5v2h3l2 3v5h-3l-2 2H8l-2-3H4z"/><path d="M1 11v4"/></g></symbol>
<symbol id="i-battery" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M10 9l-2 3h4l-2 3"/></g></symbol>
<symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></symbol>
<symbol id="art-moto" viewBox="0 0 400 240">
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="92" cy="172" r="46" stroke="#141B4D" stroke-width="12"/>
    <circle cx="312" cy="172" r="46" stroke="#141B4D" stroke-width="12"/>
    <circle cx="92" cy="172" r="9" fill="#141B4D"/>
    <circle cx="312" cy="172" r="9" fill="#141B4D"/>
    <path d="M92 172 186 160" stroke="#141B4D" stroke-width="9"/>
    <path d="M312 172 272 82" stroke="#141B4D" stroke-width="10"/>
    <path d="M206 186q-50 16-104 6" stroke="#9AA3C7" stroke-width="9"/>
  </g>
  <path d="M168 124h70l14 26-10 34h-62l-16-28z" fill="#2B2F4A"/>
  <path d="M176 110q30-34 82-22l12 26q-46 8-92 10z" fill="currentColor"/>
  <path d="M104 114q34-18 76-8l-2 18q-40-2-76 6z" fill="#141B4D"/>
  <path d="M86 116 106 110v18l-18 4z" fill="currentColor"/>
  <path d="M256 112l18-20" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
  <path d="M262 74l32-8" stroke="#141B4D" stroke-width="7" stroke-linecap="round"/>
  <circle cx="296" cy="98" r="13" fill="#FFC24B" stroke="#141B4D" stroke-width="5"/>
  <path d="M296 128q22-10 40 10" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
</symbol>`;

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs dangerouslySetInnerHTML={{ __html: SPRITE }} />
    </svg>
  );
}
