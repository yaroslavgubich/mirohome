// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* This is the main product name displayed on the page. 
        It's styled as an H1 for prominence.
      */}
      <h1 className="text-4xl font-bold mb-8">Colado</h1>

      {/* This is the Link component directing to the instructions page.
        - href: The URL path in your Next.js application.
        - The content inside the Link tag is the display text (Colado Instructions).
      */}
      <Link
        href="/collado/instructions"
        className="text-lg text-blue-600 hover:text-blue-800 underline"
      >
        Colado Instructions
      </Link>
    </main>
  );
}
