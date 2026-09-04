import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Calculator & Tools Privacy Policy",
  description:
    "Privacy Policy for the Electrical Calculator & Tools Android app published by ByteBlitz Tech.",
};

export default function ElectricalCalculatorPrivacyPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB47A]">
            Electrical Calculator &amp; Tools
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            This policy explains how the Electrical Calculator &amp; Tools Android app handles user information.
          </p>
        </div>
      </section>

      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-xl border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/10 sm:p-10">
          <p className="text-sm font-semibold text-[#071B3A]/55">
            Effective date: 5 September 2026
          </p>

          <div className="mt-8 space-y-9 text-base leading-8 text-[#071B3A]/75">
            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Overview</h2>
              <p className="mt-3">
                Electrical Calculator &amp; Tools is an electrical engineering calculation utility published by ByteBlitz Tech. The current version is designed to perform calculations locally on your device and does not require an account or sign-in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Information we collect</h2>
              <p className="mt-3">
                The current version of Electrical Calculator &amp; Tools does not collect, transmit, sell, rent, or share personal information or sensitive user data with ByteBlitz Tech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Local app data</h2>
              <p className="mt-3">
                App preferences, settings, and calculation history may be stored locally on your device so the app can remember your choices and recent calculations. This information remains on your device and is not sent to ByteBlitz Tech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Permissions</h2>
              <p className="mt-3">
                The current release does not request dangerous or sensitive Android permissions for its calculator features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Advertising, analytics, and tracking</h2>
              <p className="mt-3">
                The current release does not include production advertising, analytics, or tracking services. If a future version introduces advertising, analytics, or other third-party services that collect or process user data, this privacy policy and the app&apos;s Google Play disclosures will be updated before that version is released.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Children&apos;s privacy</h2>
              <p className="mt-3">
                Electrical Calculator &amp; Tools is a general-purpose technical utility and is not specifically directed to children. The current version does not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Data security and deletion</h2>
              <p className="mt-3">
                User-entered calculation values, history, and settings remain on the device as part of normal local app use. Users can remove locally stored app data through Android app settings, by clearing the app&apos;s data, or by uninstalling the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Changes to this policy</h2>
              <p className="mt-3">
                This policy may be updated when Electrical Calculator &amp; Tools features or data practices change. The effective date shown on this page will be revised when material changes are made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#071B3A]">Contact</h2>
              <p className="mt-3">
                If you have questions about this privacy policy or Electrical Calculator &amp; Tools, contact ByteBlitz Tech at{" "}
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
