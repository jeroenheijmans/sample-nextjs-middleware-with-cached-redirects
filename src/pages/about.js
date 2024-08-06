import Link from "next/link";

export default function Manage() {
  return (
    <div className="prose max-w-none">
      <h1>💡 About</h1>
      <p>Some more info about this app to be added here.</p>
      <div className="text-2xl md:text-4xl rounded-xl bg-neutral-300 p-8 md:p-40 text-center">
        🚧 Under construction.
      </div>

      <p>
        For now, all you can do here is <Link href="/">go back home</Link>.
      </p>
    </div>
  );
}
