import Link from "next/link";

export default function Manage() {
  return (
    <div className="prose max-w-none">
      <h1>⚙️ Manage</h1>
      <p>
        This will become a page to manage the redirects as if you were an admin.
      </p>
      <div className="text-2xl md:text-4xl rounded-xl bg-neutral-300 p-8 md:p-40 text-center">
        🚧 Under construction.
      </div>

      <p>
        For now, all you can do here is <Link href="/">go back home</Link>.
      </p>
    </div>
  );
}
