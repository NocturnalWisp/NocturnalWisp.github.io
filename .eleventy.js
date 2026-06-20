const fs = require("fs");
const path = require("path");

const metadata = JSON.parse(
  fs.readFileSync(path.join(__dirname, "blog/src/_data/metadata.json"), "utf8"),
);

const internalHostnames = new Set(
  [metadata.siteUrl, metadata.blogUrl].flatMap((url) => {
    try {
      return [new URL(url).hostname.toLowerCase()];
    } catch (_) {
      return [];
    }
  }),
);

function isExternalHref(href) {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    return !internalHostnames.has(new URL(href).hostname.toLowerCase());
  } catch (_) {
    return false;
  }
}

module.exports = async function (eleventyConfig) {
  const { default: rssPlugin } = await import("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy({ "blog/src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "blog/src/js": "js" });
  eleventyConfig.addPassthroughCopy(
    { "blog/src/posts": "posts" },
    {
      filter: ["**/*.{png,jpg,jpeg,gif,webp,svg}"],
    },
  );

  eleventyConfig.addFilter("readingTime", (content) => {
    const text = String(content).replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  });

  eleventyConfig.addFilter("externalLinks", (content) => {
    return String(content).replace(/<a\s([^>]+)>/gi, (match, attrs) => {
      const hrefMatch = attrs.match(/\bhref=(["'])([^"']+)\1/i);
      if (!hrefMatch || !isExternalHref(hrefMatch[2])) return match;
      if (/\btarget\s*=/.test(attrs)) return match;

      const relMatch = attrs.match(/\brel=(["'])([^"']*)\1/i);
      if (relMatch) {
        const relValues = relMatch[2].split(/\s+/).filter(Boolean);
        if (!relValues.includes("noopener")) relValues.push("noopener");
        if (!relValues.includes("noreferrer")) relValues.push("noreferrer");
        const updatedAttrs = attrs.replace(
          relMatch[0],
          `rel="${relValues.join(" ")}"`,
        );
        return `<a ${updatedAttrs} target="_blank">`;
      }

      return `<a ${attrs} target="_blank" rel="noopener noreferrer">`;
    });
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("postDateIso", (dateObj) => {
    const date = new Date(dateObj);
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("escapeXml", (value) => {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  });

  eleventyConfig.addFilter("ogTitleLines", (title) => {
    const words = String(title).split(/\s+/);
    const lines = [];
    let current = "";

    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (next.length > 28 && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }

    if (current) lines.push(current);
    return lines.slice(0, 3);
  });

  // Relative paths so the blog works via file:// and on GitHub Pages.
  eleventyConfig.addFilter("rootPath", (url) => {
    const parts = String(url).replace(/^\/|\/$/g, "").split("/").filter(Boolean);
    return "../".repeat(parts.length + 1);
  });

  eleventyConfig.addFilter("blogPath", (url) => {
    const parts = String(url).replace(/^\/|\/$/g, "").split("/").filter(Boolean);
    return parts.length === 0 ? "" : "../".repeat(parts.length);
  });

  eleventyConfig.addFilter("tagLink", (tag, pageUrl) => {
    const url = String(pageUrl);
    if (/^\/tags\//.test(url)) {
      return `../${tag}/`;
    }
    const parts = url.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
    const prefix = parts.length === 0 ? "" : "../".repeat(parts.length);
    return `${prefix}tags/${tag}/`;
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("blog/src/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (!item.data.tags) return;
      item.data.tags
        .filter((tag) => !["all", "posts", "post"].includes(tag))
        .forEach((tag) => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: "blog/src",
      output: "blog",
      includes: "_includes",
    },
    pathPrefix: "",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
