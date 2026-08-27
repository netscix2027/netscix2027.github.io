import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#fafafa] text-gray-700 border-t border-gray-200">
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center text-center">
          <Image
            src="/images/logo_1_svg.png"
            alt="NetSciX 2027 — Hong Kong"
            width={5536}
            height={2888}
            className="h-28 md:h-36 w-auto"
          />
          <p className="mt-5 text-gray-600">
            We are looking forward to seeing you in Hong Kong for the NetSciX 2027.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col gap-12 md:flex-row md:justify-around md:items-start">
        <FooterCol title="EVENT">
          <FooterLink href="/key-dates">Key Dates</FooterLink>
          <FooterLink href="/speakers">Speakers</FooterLink>
          <FooterLink href="/abstracts">Submission</FooterLink>
          <FooterLink href="/registration">Registration</FooterLink>
          <FooterLink href="/more-info">More Info</FooterLink>
          {/*
            Program footer link removed while /program is stubbed. Restore
            alongside the Header NAV entry and the page file's commented block.

            <FooterLink href="/program">Program</FooterLink>
          */}
        </FooterCol>

        <FooterCol title="ABOUT">
          <FooterLink href="/about">Organizing Committee</FooterLink>
          {/*
            About sub-sections removed while only the Organizing Committee
            is finalized. Restore alongside the page sections:

            <FooterLink href="/about#venue">Venue</FooterLink>
            <FooterLink href="/about#accommodation">Accommodation</FooterLink>
            <FooterLink href="/about#committee">Organizing Committee</FooterLink>
            <FooterLink href="/about#sponsors">Sponsors</FooterLink>
          */}
        </FooterCol>

        <FooterCol title="QUICK LINKS">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/#contact">Contact</FooterLink>
        </FooterCol>

        {/*
          FOLLOW column temporarily removed — no dedicated social
          accounts for NetSciX 2027 yet. Restore the block below (and
          consider switching the wrapper grid to md:grid-cols-3 while
          this column is hidden) once accounts are set up.

          <FooterCol title="FOLLOW">
            <li>
              <a
                href="https://x.com/NetSciConf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-ink transition-colors"
              >
                X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/netsciconf.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-ink transition-colors"
              >
                Bluesky
              </a>
            </li>
          </FooterCol>
        */}
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-5 text-sm text-gray-500 text-center">
          © Copyright 2027 NetsciX
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.25em] text-gray-500 mb-5">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-700 hover:text-ink transition-colors">
        {children}
      </Link>
    </li>
  );
}
