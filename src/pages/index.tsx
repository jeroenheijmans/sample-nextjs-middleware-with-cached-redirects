import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="prose max-w-none hover:prose-a:text-blue-500">
        <h1>🏠 NextJS with Caching, Middleware, and Redirects</h1>
        <p>
          This application is a sandbox and sample for how middleware can be
          used to steer NextJS redirects. The middleware uses a cached list of
          redirects, to simulate them coming from some upstream server.
        </p>
        <table
          className="
          prose-th:border-neutral-400 prose-th:border prose-th:px-2 prose-th:text-left 
          prose-td:border-neutral-400 prose-td:border prose-td:px-2"
        >
          <thead className="bg-neutral-300">
            <tr>
              <th>Link</th>
              <th>Expected Status</th>
              <th>Expected target</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bg-neutral-300/50 text-lg pt-2" colSpan={4}>
                Plain links, no redirects expected
              </th>
            </tr>
            <tr>
              <td>
                <Link href="/">/</Link>
              </td>
              <td>200 ✅</td>
              <td>/</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/manage">/manage</Link>
              </td>
              <td>200 ✅</td>
              <td>/manage</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/about">/about</Link>
              </td>
              <td>200 ✅</td>
              <td>/about</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/bad-link">/bad-link</Link>
              </td>
              <td>404 ❌</td>
              <td>/bad-link</td>
              <td>Target link is dead (will 404)</td>
            </tr>
            <tr>
              <td>
                <Link href="/some/deep/bad-link">/some/deep/bad-link</Link>
              </td>
              <td>404 ❌</td>
              <td>/some/deep/bad-link</td>
              <td>Target link is dead (will 404)</td>
            </tr>
            <tr>
              <td>
                <Link href="https://example.com">https://example.com</Link>
              </td>
              <td>200 ✅</td>
              <td>⚠️ https://example.com</td>
              <td>Links to external website with full URL.</td>
            </tr>
            <tr>
              <th className="bg-neutral-300/50 text-lg pt-2" colSpan={4}>
                Redirects in next.config.mjs
              </th>
            </tr>
            <tr>
              <td>
                <Link href="/nextjs-config-mjs-1">/nextjs-config-mjs-1</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/nextjs-config-mjs-2">/nextjs-config-mjs-2</Link>
              </td>
              <td>307 ⏩ 404 ❌</td>
              <td>/some-bad-url</td>
              <td>Target link is dead (will 404)</td>
            </tr>
            <tr>
              <td>
                <Link href="/nextjs-config-mjs-3">/nextjs-config-mjs-3</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>⚠️ https://example.com</td>
              <td>Links to external website with full URL.</td>
            </tr>
            <tr>
              <th className="bg-neutral-300/50 text-lg pt-2" colSpan={4}>
                Middleware will redirect with hardcoded list
              </th>
            </tr>
            <tr>
              <td>
                <Link href="/middleware-hard-coded-1">
                  /middleware-hard-coded-1
                </Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/manage</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/middleware-hard-coded-2">
                  /middleware-hard-coded-2
                </Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/about</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link href="/middleware-hard-coded-3">
                  /middleware-hard-coded-3
                </Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>⚠️ https://example.com</td>
              <td>Links to external website with full URL.</td>
            </tr>
            <tr>
              <th className="bg-neutral-300/50 text-lg pt-2" colSpan={4}>
                Middleware will redirect with cached configuration from upstream
              </th>
            </tr>
            <tr>
              <td>
                <Link href="/legacy-manage-link">/legacy-manage-link</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/manage</td>
              <td>Redirect in middleware via cached list</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/home">/s/home</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/</td>
              <td>Redirect in middleware via cached list</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/mng">/s/mng</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/manage</td>
              <td>Redirect in middleware via cached list</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/some/deep/example-link">
                  /s/some/deep/example-link
                </Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/about</td>
              <td>Redirect in middleware via cached list</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/some/bad/link">/s/some/bad/link</Link>
              </td>
              <td>307 ⏩ 404 ❌</td>
              <td>/non-existent/target</td>
              <td>Target link is dead (will 404)</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/to-external-site">/s/to-external-site</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>⚠️ https://example.com</td>
              <td>Links to external website with full URL.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
