import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Calculator Privacy Policy",
  description:
    "Privacy Policy for the Site Calculator Android app published by ByteBlitz Tech.",
};

export default function SiteCalculatorPrivacyPolicyPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB47A]">
            Site Calculator
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            This policy explains how the Site Calculator Android app handles user information.
          </p>
        </div>
      </section>

      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-xl border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/10 sm:p-10">
          <p className="text-sm font-semibold text-[#071B3A]/55">
            Effective date: 3 September 2026
          </p>

          <div className="mt-8 space-y-9 text-base leading-8 text-[#071B3A]/75">
            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Overview</h2>
              <p className="mt-3">
                Site Calculator is a construction calculation utility published by ByteBlitz Tech. The current version is designed to work locally on your device and does not require an account or sign-in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Information we collect</h2>
              <p className="mt-3">
                The current version of Site Calculator does not collect, transmit, sell, rent, or share personal information or sensitive user data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Local app data</h2>
              <p className="mt-3">
                App preferences, settings, and calculation history may be stored locally on your device so the app can remember your choices and recent calculations. This information stays on your device and is not sent to ByteBlitz Tech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Permissions and internet access</h2>
              <p className="mt-3">
                The current release does not request sensitive device permissions and does not require internet access for its calculation features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Third-party services</h2>
              <p className="mt-3">
                The current release does not include advertising, analytics, or other third-party services that collect user data. If a future version introduces such services, this privacy policy and the app&apos;s Google Play disclosures will be updated before that version is released.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Children&apos;s privacy</h2>
              <p className="mt-3">
                Site Calculator is a general construction utility and is not specifically directed to children. Because the current version does not collect personal information, it does not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Data security</h2>
              <p className="mt-3">
                Because the current version does not transmit personal data to ByteBlitz Tech, user-entered calculation values remain on the device as part of normal local app use. Users can remove locally stored app data through Android app settings or by uninstalling the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Changes to this policy</h2>
              <p className="mt-3">
                This policy may be updated when Site Calculator features or data practices change. The effective date shown on this page will be revised when material changes are made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Contact</h2>
              <p className="mt-3">
                If you have questions about this privacy policy or Site Calculator, contact ByteBlitz Tech at{" "}
                <a
                  href="mailto:byteblitzpk@gmail.com"
                  className="font-bold text-[#007BFF] underline decoration-[#007BFF]/30 underline-offset-4 hover:decoration-[#007BFF]"
                >
                  byteblitzpk@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
