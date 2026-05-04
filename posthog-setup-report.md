<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Skild registry — a TanStack Start application with Clerk authentication. The integration covers client-side event tracking, user identification, automatic session replay and error tracking, and a reverse proxy for reliable ingestion.

## Changes made

| File | Change |
|------|--------|
| `package.json` | Added `posthog-js` and `posthog-node` dependencies |
| `.env` | Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` |
| `vite.config.ts` | Added `/ingest`, `/ingest/static`, `/ingest/array` reverse proxy rules |
| `src/utils/posthog-server.ts` | Created server-side PostHog singleton client (new file) |
| `src/routes/__root.tsx` | Enabled `PostHogProvider` wrapping the app; wired `PostHogUserIdentifier` to identify/reset on Clerk auth state |
| `src/components/Navbar.tsx` | Enabled `sign_in_clicked` capture on Sign In button |
| `src/components/SkillCard.tsx` | Enabled `install_command_copied` and `skill_opened` captures |

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `install_command_copied` | User copies a skill's install command | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks Open on a skill card | `src/components/SkillCard.tsx` |
| `sign_in_clicked` | Unauthenticated user clicks Sign In | `src/components/Navbar.tsx` |
| `user_signed_in` | User completes Clerk sign-in (also triggers `posthog.identify()`) | `src/routes/__root.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/391419/dashboard/1534096
- **Install command copies over time**: https://us.posthog.com/project/391419/insights/SquwzQ25
- **Top skills by install copies**: https://us.posthog.com/project/391419/insights/UGm94Vcw
- **Skill opens over time**: https://us.posthog.com/project/391419/insights/62sV23PP
- **Sign-in conversion funnel**: https://us.posthog.com/project/391419/insights/keQtCNiw
- **New user sign-ins over time**: https://us.posthog.com/project/391419/insights/55C1JSMg

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
