# Acme Dashboard — Application Documentation

## Overview

Acme Dashboard is an internal operations dashboard built with **React 18**, **Vite**, **React Router v6**, and **Tailwind CSS**. It serves as a central hub for monitoring key business metrics, managing billing and invoices, team access, third-party integrations, and workspace settings. All data displayed is currently hardcoded (no live API connections).

## Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Framework    | React 18                |
| Bundler      | Vite 5                  |
| Routing      | React Router v6         |
| Styling      | Tailwind CSS 3 + inline styles |
| Language     | JavaScript (JSX)        |

## Routes

| Path              | Page Component        | Description                                      |
|-------------------|-----------------------|--------------------------------------------------|
| `/`               | —                     | Redirects to `/dashboard`                        |
| `/login`          | —                     | Redirects to `/dashboard` (no auth implemented)  |
| `/dashboard`      | `Dashboard`           | Main overview with KPI cards and accounts table  |
| `/billing`        | `BillingInvoices`     | Invoice list with payment recording              |
| `/billing/aging`  | `BillingAgingReport`  | Accounts receivable aging buckets                |
| `/team`           | `TeamMembersScreen`   | Team member list with roles and invite action    |
| `/integrations`   | `IntegrationsPage`    | Connected third-party services overview          |
| `/settings`       | `SettingsScreen`      | Workspace configuration (name, toggles, region)  |
| `/empty`          | `EmptyThing`          | Empty state placeholder for the "Reports" section|

## Pages

### Dashboard (`/dashboard`)

The landing page for the application. Displays:

- **KPI stat cards** — Users (12,480), Revenue ($842k), Tickets (37 open), Uptime (99.98%)
- **Recent accounts table** — Five hardcoded customer rows showing Customer, Plan, MRR, and Status
- **Quick links** — Navigation to Billing, Team, and Integrations pages

### Billing & Invoices (`/billing`)

Finance-oriented page showing:

- **Invoice table** — Three hardcoded invoices (INV-2401 through INV-2403) with customer, amount, and payment status
- **"Record payment" button** — Present but not wired to any action
- **Link to AR aging report** — Navigates to `/billing/aging`
- **Cross-links** — To Team (for cost center assignment) and Integrations (for QuickBooks)

### AR Aging Report (`/billing/aging`)

A sub-page of Billing displaying accounts receivable broken into aging buckets:

- **Current** — $18,400 (green)
- **1-30 days** — $3,200 (blue)
- **31-60 days** — $890 (gray)
- **61+ days** — $120 (red)

Includes breadcrumb navigation back to the Billing page. Data is a static snapshot, not connected to a live ledger.

### Team & Access (`/team`)

Displays a list of four hardcoded team members with their roles (Admin, Editor, Viewer):

- Alex Rivera (Admin)
- Jordan Lee (Editor)
- Sam Patel (Viewer)
- Riley Chen (Editor)

Actions include an "Invite user" button (not wired) and a link to open billing for seat management.

### Integrations & Webhooks (`/integrations`)

Shows the status of three connected services:

- **Slack** — Connected, posting to #ops-alerts
- **Zapier** — 2 zaps active, last run 1 hour ago
- **Segment** — Paused, needs API key

Includes buttons to view the report pipeline (links to the empty reports page) and to pick a notification channel (links to Team). Notes that API tokens are managed in Settings.

### Workspace Settings (`/settings`)

A form-based settings page with local React state (changes are not persisted). Controls include:

- **Workspace name** — Text input, defaults to "Acme Ops"
- **Email notifications** — Toggle switch, on by default
- **Beta features** — Toggle switch, off by default
- **Data region** — Dropdown select (US East, EU West, APAC)
- **Save changes button** — Present but not wired to any backend

### Reports / Empty State (`/empty`)

A placeholder page with a dashed-border illustration area and a message prompting the user to connect a data source or import a CSV. Links back to the dashboard.

## Shared Components

### NavBar

Global navigation header rendered on every page. Displays the brand name ("Acme") linking to the dashboard and six navigation links: Dashboard, Billing, Team, Integrations, Reports, and Settings.

### BigButton

A styled button component with three variants:

- **`primary`** — Blue background, white text
- **`ghost`** — Transparent with blue border and text
- **`danger`** — Red background, white text

Accepts an `extraStyle` prop for inline style overrides.

### CardThing

A metric display card used on the Dashboard and Integrations pages. Props: `stat` (title/label), `subtext` (main value), and `footerNote` (secondary info).

### TableV2

A simple table component that accepts `headers` (array of strings) and `dataRows` (array of `{ cells: string[] }` objects). Used on Dashboard and Billing pages. Uses row index as React key.

### InputField

A labeled text input. Props: `labelText`, `id`, `value`, `onChange`, `placeholder`. Used on the Settings page.

### ToggleSwitch

A boolean toggle button with accessible `role="switch"` and `aria-checked`. Props use non-standard names: `isOn` (instead of `checked`) and `whenToggle` (instead of `onChange`). Used on the Settings page.

## Project Structure

```
src/
  App.jsx              # Route definitions
  main.jsx             # React root mount
  index.css            # Global styles (Tailwind directives)
  components/
    BigButton.jsx      # Button with primary/ghost/danger variants
    CardThing.jsx      # Metric stat card
    InputField.jsx     # Labeled text input
    NavBar.jsx         # Global navigation header
    TableV2.jsx        # Simple data table
    ToggleSwitch.jsx   # Boolean toggle switch
  pages/
    BillingAgingReport.jsx   # AR aging buckets
    BillingInvoices.jsx      # Invoice list
    Dashboard.jsx            # Main overview page
    EmptyThing.jsx           # Empty state for Reports
    IntegrationsPage.jsx     # Third-party services
    SettingsScreen.jsx       # Workspace config form
    TeamMembersScreen.jsx    # Team member list
```

## Running Locally

```bash
npm install
npm run dev
```

The Vite dev server starts on the default port (5173). To use a custom port:

```bash
npx vite --port 3333
```

## Notes

- All data is hardcoded — there are no API calls or backend services
- The `/login` route has no authentication; it redirects straight to the dashboard
- The "Save changes" button on Settings and "Record payment" on Billing are non-functional
- Styling mixes Tailwind utility classes with inline styles and one CSS module (`Dashboard.module.css`)
