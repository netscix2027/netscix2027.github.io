// Redirect stub for the old /abstracts URL.
//
// The page was renamed to /submissions for consistency and design reasons:
// the nav entry, the page title and the section headings all say
// "Submission", so the URL now matches what the site calls it everywhere
// else. /abstracts was published before the rename, so this stub keeps
// existing bookmarks and external links working.
//
// GitHub Pages serves a static export and cannot issue a 301, so the
// redirect is a meta refresh (works without JavaScript) plus a visible
// link for anyone it doesn't carry across. Safe to delete once the old
// URL has stopped receiving traffic.

const TARGET = "/submissions/";

export const metadata = {
  title: "Submission | NetSciX 2027",
  robots: { index: false, follow: true },
};

export default function AbstractsRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-serif text-2xl font-bold text-ink">This page has moved</h1>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The submission guidelines now live at{" "}
            <a href={TARGET} className="font-medium text-brand hover:underline">
              {TARGET}
            </a>
            . You should be redirected automatically.
          </p>
        </div>
      </section>
    </>
  );
}
