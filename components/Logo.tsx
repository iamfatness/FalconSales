export default function Logo() {
  return (
    <a href="/" className="brand">
      <svg className="mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#8B0000"/>
        <path fill="#F3F0EA" d="M35.5 8.4c-8.4-2.2-16.6.4-20.4 6-1.2 1.5-1.9 3.1-2.1 4.7-2.8.2-5 2.4-4.8 6.8.2 2 1.3 3.3 2.6 3.3-.5-2.4.7-4 3.5-4.2l2.4.2c.4 4 2.2 7.4 5.4 9.8l-1.6 5.6c5.6.4 10.4-.2 13.4-1.6C42 31 41.4 17.6 35.5 8.4z"/>
        <path fill="#8B0000" d="M21.4 17.4c1.7.2 3.2 1.3 3.9 3-1.7 1.7-3.2 4.1-3.5 7.9-1.9-1.9-2.8-4.7-2.5-7.7.2-1.5.9-2.6 2.1-3.2z"/>
        <circle cx="21" cy="14.4" r="2.2" fill="#8B0000"/><circle cx="20.4" cy="13.8" r=".8" fill="#F3F0EA"/>
        <path fill="#8B0000" d="M15.4 13.4c2.4-2.9 6-4.3 10-4.3-3.2 1-5.6 2.4-7.8 4.7z"/>
      </svg>
      <span className="wordmark">FALCON SALES</span>
    </a>
  );
}
