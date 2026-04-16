import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Align",
  description: "How Align handles your data and protects your privacy.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 px-6">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Last updated: April 15, 2026
        </p>

        <div className="space-y-8 text-base leading-7" style={{ color: "var(--text-secondary)" }}>
          <p>
            Align (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the Align
            mobile application. This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our app.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">Data We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Account Information</strong> &mdash; Name, email
                address, and phone number, used to create and manage your account.
              </li>
              <li>
                <strong className="text-white">User ID</strong> &mdash; A unique identifier assigned
                to your account.
              </li>
              <li>
                <strong className="text-white">Contacts</strong> &mdash; Accessed only when you
                choose to sync contacts for friend discovery. Contact data is used for matching only
                and is not stored on our servers.
              </li>
              <li>
                <strong className="text-white">Group Chat Messages</strong> &mdash; Messages you
                send in group chats are stored to enable the group messaging feature.
              </li>
              <li>
                <strong className="text-white">Usage Data</strong> &mdash; Session history,
                challenge results, and streaks, used to display your progress and leaderboard
                rankings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">
              Data That Stays on Your Device
            </h2>
            <p>
              Screen time data is processed entirely on your device using Apple&apos;s
              DeviceActivityReport framework. We never collect, transmit, or store your screen time
              or app usage data on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">How We Use Your Data</h2>
            <p>
              All data collected is used solely for app functionality &mdash; enabling your account,
              social features (groups, challenges, leaderboard), and session tracking. We do not sell
              your data to third parties. We do not use your data for advertising or cross-app
              tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">Data Storage</h2>
            <p>
              Account and app data is stored securely using Supabase with row-level security
              policies that restrict access to your own data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">Data Deletion</h2>
            <p>
              You can delete your account and all associated data from the Profile Settings screen
              within the app. Account deletion is permanent and cannot be undone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">Contact Us</h2>
            <p>
              If you have questions about this privacy policy, contact us at:{" "}
              <a
                href="mailto:support@myalign.app"
                className="underline hover:text-white transition-colors"
              >
                support@myalign.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with
              an updated revision date.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
