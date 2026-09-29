import type { MockId } from "@/lib/content";

const bars = [42, 48, 45, 52, 58, 55, 61, 57, 63, 68, 64, 70, 74, 71, 77, 73, 80, 84, 79, 88];

function LedgerMock() {
  return (
    <div className="mock m-ledger">
      <aside className="ml-side">
        <p className="ml-logo">
          <span aria-hidden="true" />
          Product
        </p>
        <ul>
          <li className="on">Overview</li>
          <li>Accounts</li>
          <li>Payments</li>
          <li>Forecast</li>
          <li>Reports</li>
        </ul>
      </aside>
      <div className="ml-main">
        <div className="ml-top">
          <div>
            <p className="ml-crumb">Treasury</p>
            <p className="ml-h">Cash position</p>
          </div>
          <p className="ml-seg">
            <span>1W</span>
            <span className="on">1M</span>
            <span>1Q</span>
          </p>
        </div>
        <div className="ml-kpis">
          <div>
            <p>Total cash</p>
            <strong>$48.20M</strong>
            <em>+2.4%</em>
          </div>
          <div>
            <p>Available today</p>
            <strong>$31.75M</strong>
          </div>
          <div>
            <p>Pending out</p>
            <strong>$4.08M</strong>
          </div>
        </div>
        <div className="ml-chart">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className={i === bars.length - 1 ? "on" : undefined} />
          ))}
        </div>
        <div className="ml-table">
          {[
            ["Operating", "First Atlantic", "$18.42M"],
            ["Payroll", "Meridian", "$6.10M"],
            ["Reserve", "First Atlantic", "$15.00M"],
            ["FX, EUR", "Nordbank", "€7.93M"],
          ].map(([a, b, c]) => (
            <p key={a}>
              <span>{a}</span>
              <span>{b}</span>
              <span>{c}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const appts: { d: number; s: number; l: number; who: string; st: "ok" | "wait" | "gone"; drag?: boolean }[] = [
  { d: 1, s: 1, l: 2, who: "K. Mensah", st: "ok" },
  { d: 1, s: 4, l: 1, who: "J. Alade", st: "wait" },
  { d: 2, s: 2, l: 2, who: "R. Diallo", st: "ok" },
  { d: 2, s: 6, l: 2, who: "T. Obi", st: "gone" },
  { d: 3, s: 1, l: 1, who: "S. Bello", st: "ok" },
  { d: 3, s: 3, l: 2, who: "M. Eze", st: "wait" },
  { d: 4, s: 5, l: 2, who: "A. Nwosu", st: "ok", drag: true },
  { d: 4, s: 2, l: 1, who: "L. Okoro", st: "ok" },
  { d: 5, s: 1, l: 2, who: "F. Sow", st: "wait" },
  { d: 5, s: 5, l: 1, who: "D. Kalu", st: "ok" },
];

function TidewaterMock() {
  return (
    <div className="mock m-tide">
      <div className="mt-top">
        <p className="mt-h">Week of 12 Oct</p>
        <p className="mt-legend">
          <span><i className="st st--ok" />Confirmed</span>
          <span><i className="st st--wait" />Pending</span>
          <span><i className="st st--gone" />Cancelled</span>
        </p>
      </div>
      <div className="mt-grid">
        <span className="mt-corner" />
        {["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16"].map((d, i) => (
          <span key={d} className={`mt-day${i === 0 ? " on" : ""}`} style={{ gridColumn: i + 2 }}>
            {d}
          </span>
        ))}
        {["09", "10", "11", "12", "13", "14", "15"].map((t, i) => (
          <span key={t} className="mt-time" style={{ gridRow: i + 2 }}>
            {t}:00
          </span>
        ))}
        {appts.map((a) => (
          <span
            key={a.who}
            className={`mt-appt mt-appt--${a.st}${a.drag ? " is-drag" : ""}`}
            style={{ gridColumn: a.d + 1, gridRow: `${a.s + 1} / span ${a.l}` }}
          >
            <i className={`st st--${a.st}`} />
            {a.who}
          </span>
        ))}
      </div>
      <p className="mt-toast">
        Rebooked A. Nwosu to Thu 13:00 <b>Undo</b>
      </p>
    </div>
  );
}

function NorthstarMock() {
  return (
    <div className="mock m-north">
      <div className="mn-col">
        <p className="mn-h">Colour</p>
        {[
          ["ink/900", "#111217"],
          ["ink/500", "#5d6070"],
          ["violet/500", "#7b6cff"],
          ["mint/400", "#57d9a3"],
          ["amber/400", "#ffb547"],
        ].map(([n, c]) => (
          <p key={n} className="mn-swatch">
            <span style={{ background: c }} />
            {n}
            <em>{c}</em>
          </p>
        ))}
        <p className="mn-h mn-h--gap">Spacing</p>
        <div className="mn-space">
          {[4, 8, 12, 16, 24, 32, 48].map((s) => (
            <span key={s} style={{ width: `${s / 4.8}em` }}>
              <em>{s}</em>
            </span>
          ))}
        </div>
      </div>
      <div className="mn-col">
        <p className="mn-h">Type</p>
        <p className="mn-type mn-type--xl">Display 48</p>
        <p className="mn-type mn-type--l">Heading 32</p>
        <p className="mn-type mn-type--m">Title 20</p>
        <p className="mn-type mn-type--s">Body 16, for reading at length.</p>
        <p className="mn-type mn-type--xs">Caption 12 / 16</p>
      </div>
      <div className="mn-col">
        <p className="mn-h">Components</p>
        <p className="mn-btns">
          <span className="mn-btn mn-btn--primary">Continue</span>
          <span className="mn-btn">Cancel</span>
        </p>
        <p className="mn-input is-focus">
          <span>Email</span>
          name@company.com
        </p>
        <p className="mn-row">
          <span className="mn-toggle" />
          Notifications
        </p>
        <p className="mn-row">
          <span className="mn-check" />
          Remember device
        </p>
        <p className="mn-tags">
          <span>Draft</span>
          <span className="on">In review</span>
          <span>Shipped</span>
        </p>
      </div>
    </div>
  );
}

function TransitMock() {
  return (
    <div className="mock m-field">
      <div className="mf-phone">
        <div className="mf-screen mf-screen--map">
          <p className="mf-status">9:41</p>
          <svg className="mf-map" viewBox="0 0 200 220" aria-hidden="true">
            <path d="M0 60h200M0 140h200M60 0v220M150 0v220M0 200L200 20" stroke="#e4ddd0" strokeWidth="6" fill="none" />
            <path d="M40 190 C 60 150, 70 150, 90 120 S 130 80, 160 40" stroke="#1d1a16" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="40" cy="190" r="7" fill="#1d1a16" />
            <circle cx="160" cy="40" r="7" fill="#d9542b" />
          </svg>
          <div className="mf-card mf-card--eta">
            <p className="mf-h">6 min</p>
            <p className="mf-sub">Pickup point · Stop A</p>
            <span className="mf-btn">Track trip</span>
          </div>
        </div>
      </div>
      <div className="mf-phone mf-phone--b">
        <div className="mf-screen">
          <p className="mf-status">9:41</p>
          <p className="mf-h">Trips</p>
          {[
            ["Stop A → Stop B", "Today · 08:10", "Active"],
            ["Stop C → Stop A", "Yesterday · 18:40", "Done"],
            ["Stop B → Stop D", "Mon · 07:55", "Done"],
          ].map(([route, when, status]) => (
            <div key={route} className="mf-card">
              <p>{route}</p>
              <p className="mf-meta">
                {when}
                <span>{status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const listings = [
  { title: "3-bed apartment", place: "Lagos, Nigeria", tag: "For rent", tone: "a" },
  { title: "Family house", place: "Nairobi, Kenya", tag: "For sale", tone: "b" },
  { title: "2-bed flat", place: "Mogadishu, Somalia", tag: "For rent", tone: "c" },
  { title: "Studio", place: "Abuja, Nigeria", tag: "For rent", tone: "d" },
];

function PropertyMock() {
  return (
    <div className="mock m-prop">
      <div className="mp-top">
        <p className="mp-logo">
          <span aria-hidden="true" />
          Marketplace
        </p>
        <p className="mp-search">
          <span>Location</span>
          <span>Property type</span>
          <span>Budget</span>
          <b>Search</b>
        </p>
      </div>
      <p className="mp-chips">
        <span className="on">All</span>
        <span>Nigeria</span>
        <span>Somalia</span>
        <span>Kenya</span>
      </p>
      <div className="mp-body">
        <div className="mp-grid">
          {listings.map((l) => (
            <div key={l.title} className="mp-card">
              <span className={`mp-img mp-img--${l.tone}`}>
                <i>{l.tag}</i>
              </span>
              <p className="mp-title">{l.title}</p>
              <p className="mp-place">{l.place}</p>
            </div>
          ))}
        </div>
        <div className="mp-map" aria-hidden="true">
          <svg viewBox="0 0 200 260">
            <path d="M0 70h200M0 170h200M70 0v260M140 0v260M0 240L200 30" stroke="#dfe6dc" strokeWidth="6" fill="none" />
          </svg>
          <span className="mp-pin" style={{ left: "30%", top: "30%" }} />
          <span className="mp-pin on" style={{ left: "62%", top: "52%" }} />
          <span className="mp-pin" style={{ left: "44%", top: "74%" }} />
        </div>
      </div>
    </div>
  );
}

export function Mock({ id }: { id: MockId }) {
  switch (id) {
    case "property":
      return <PropertyMock />;
    case "dashboard":
      return <LedgerMock />;
    case "health":
      return <TidewaterMock />;
    case "system":
      return <NorthstarMock />;
    case "transit":
      return <TransitMock />;
  }
}
