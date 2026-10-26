export default function Logo() {
  return (
    <a href="/" className="brand">
      <svg className="mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#8B0000" />
        <path
          fill="#F3F0EA"
          d="M13 32c2.4-8.2 8.6-13.6 15.4-14.6.2 2.8 1.2 4.6 3.8 5.4 2.6-2.2 6.4-2.4 9.2-.4l4.2-1.4-5.2 3.6c2.2 1.6 3.4 4 2.6 6.6-2.6-.4-5 .2-6.8 1.8.6 2.6 0 4.8-2 6.4-3.6-1.6-7.2-1.8-10.4-.2-2-2.8-4.2-5.4-6.4-7.4-1.8.4-3.6-.2-4.4-1.8z"
        />
        <circle cx="30.4" cy="20.6" r="1.15" fill="#8B0000" />
      </svg>
      <span className="wordmark">FALCON SALES</span>
    </a>
  );
}
