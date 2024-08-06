import Link from "next/link";

export default function My404() {
  return (
    <div className="prose">
      <h1>❌ 404 Not Found</h1>
      <p>The page you are looking for does not currently exist.</p>
      <p>
        For now, all you can do here is <Link href="/">go back home</Link>.
      </p>
    </div>
  );
}
