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
        <h2>Testable links</h2>
        <p>Middle-click to open links in a new tab.</p>
        <table className="prose-th:text-left">
          <thead>
            <tr>
              <th>Link</th>
              <th>Expected Status</th>
              <th>Expected target</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href="/">/</Link>
              </td>
              <td>200 ✅</td>
              <td>/</td>
              <td>No redirects involved</td>
            </tr>
            <tr>
              <td>
                <Link href="/manage">/manage</Link>
              </td>
              <td>200 ✅</td>
              <td>/manage</td>
              <td>No redirects involved</td>
            </tr>
            <tr>
              <td>
                <Link href="/about">/about</Link>
              </td>
              <td>200 ✅</td>
              <td>/about</td>
              <td>No redirects involved</td>
            </tr>
            <tr>
              <td>
                <Link href="/bad-link">/bad-link</Link>
              </td>
              <td>404 ❌</td>
              <td>/bad-link</td>
              <td>No redirects involved but link is dead</td>
            </tr>
            <tr>
              <td>
                <Link href="/some/deep/bad-link">/some/deep/bad-link</Link>
              </td>
              <td>404 ❌</td>
              <td>/some/deep/bad-link</td>
              <td>No redirects involved but link is dead</td>
            </tr>
            <tr>
              <td>
                <Link href="/nextjs-default-redirection-example-1">
                  /nextjs-default-redirection-example-1
                </Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/</td>
              <td>Redirect in next.config.mjs</td>
            </tr>
            <tr>
              <td>
                <Link href="/nextjs-default-redirection-example-2">
                  /nextjs-default-redirection-example-2
                </Link>
              </td>
              <td>307 ⏩ 404 ❌</td>
              <td>/some-bad-url</td>
              <td>Redirect in next.config.mjs</td>
            </tr>
            <tr>
              <td>
                <Link href="/legacy-manage-link">/legacy-manage-link</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/manage</td>
              <td>Redirect from configuration and cache</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/mng">/s/mng</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/manage</td>
              <td>Redirect from configuration and cache</td>
            </tr>
            <tr>
              <td>
                <Link href="/s/home">/s/home</Link>
              </td>
              <td>307 ⏩ 200 ✅</td>
              <td>/</td>
              <td>Redirect from configuration and cache</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
