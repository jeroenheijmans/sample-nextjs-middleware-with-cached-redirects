import NodeCache from "node-cache";

interface RedirectEntry {
  source: string;
  destination: string;
}

interface RedirectsConfig {
  entries: RedirectEntry[];
}

const redirectsCacheKey = "redirects";

class Redirections {
  // TODO: Consider using "useClones" set to false for better performance
  // This might require some better immutability handling (perhaps use a
  // library or Object.freeze?)
  private cache = new NodeCache();

  constructor() {
    this.cache.set(redirectsCacheKey, {
      entries: [
        {
          source: "/legacy-manage-link",
          destination: "/manage",
        },
        {
          source: "/s/home",
          destination: "/",
        },
        {
          source: "/s/mng",
          destination: "/manage",
        },
        {
          source: "/s/some/deep/example-link",
          destination: "/about",
        },
        {
          source: "/s/some/bad/link",
          destination: "/non-existent/target",
        },
        {
          source: "/s/to-external-site",
          destination: "https://example.com",
        },
      ],
    });
  }

  getRedirects() {
    return this.cache.get<RedirectsConfig>(redirectsCacheKey)?.entries || [];
  }
}

const dynamicRedirects = new Redirections();

export default dynamicRedirects;
