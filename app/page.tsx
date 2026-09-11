import Image from "next/image";

const whatsapp =
  "https://wa.me/447773754138?text=Hello%20GV8%2C%20I%20would%20like%20to%20discuss%20sending%20my%20products%20from%20Ghana%20to%20the%20UK.";

const services = [
  [
    "01",
    "Export readiness",
    "A practical first review of your product, packaging, commercial paperwork and route to the UK.",
  ],
  [
    "02",
    "UK storage & fulfilment",
    "Send stock in one planned consignment. GV8 receives it in the UK, stores it and dispatches approved customer orders.",
  ],
  [
    "03",
    "Marketplace launch",
    "Prepare a stronger route to Amazon and eBay with listing, stock-preparation and fulfilment support.",
  ],
];

const faqs = [
  [
    "Can GV8 ship any product?",
    "No. GV8 assesses products before acceptance. Restricted, regulated, unsafe, counterfeit, perishable or poorly documented goods may not be suitable.",
  ],
  [
    "Do I need a large shipment to begin?",
    "Not necessarily. The sensible starting point is usually a sample or controlled stock batch, followed by a margin and fulfilment review.",
  ],
  [
    "Will GV8 list my product on Amazon or eBay?",
    "GV8 can support marketplace preparation and listing work. Final marketplace eligibility, seller-account responsibility and product compliance remain product-specific.",
  ],
  [
    "Does warehouse space mean my product is automatically accepted?",
    "No. Available capacity is useful, but every client and product must pass the commercial and operational acceptance process first.",
  ],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <header className="nav">
        <a className="brand" href="#top" aria-label="GV8 Global Solutions home">
          <span className="brand-mark">GV</span>
          <span>
            GV8 <b>Global Solutions</b>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#goods">Your goods</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Talk to GV8 <span>↗</span>
        </a>
      </header>

      <section className="hero" id="main-content">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> Ghana → United Kingdom
          </p>
          <h1>
            Your products deserve a <em>UK route.</em>
          </h1>
          <p className="hero-lede">
            GV8 Global Solutions helps Ghanaian businesses prepare approved
            products for export, store stock in the UK and dispatch to customers
            with greater confidence.
          </p>
          <div className="actions">
            <a
              className="button button-primary"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Discuss your product <span>↗</span>
            </a>
            <a className="button button-secondary" href="#process">
              See how it works <span>↓</span>
            </a>
          </div>
          <p className="hero-note">
            UK warehouse capacity · Ghana-first service · Product acceptance
            required
          </p>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-image"
            src="/images/gv8-ghana-exporter.jpg.png"
            alt="Ghanaian business owner preparing unbranded goods for export"
            width={1774}
            height={887}
            priority
            sizes="(max-width: 760px) 100vw, 43vw"
          />
          <div
            className="route-card"
            aria-label="Illustration of a Ghana to UK logistics route"
          >
            <div className="route-head">
              <span>GV8 ROUTE / 01</span>
              <strong>
                Ghana <i>→</i> UK
              </strong>
            </div>
            <div className="route-map">
              <span className="pin pin-ghana">GH</span>
              <span className="route-line" />
              <span className="plane">✦</span>
              <span className="pin pin-uk">UK</span>
            </div>
            <div className="route-stages">
              <span>
                <b>01</b> Prepare
              </span>
              <span>
                <b>02</b> Store
              </span>
              <span>
                <b>03</b> Dispatch
              </span>
            </div>
            <div className="route-foot">
              <span>UK fulfilment base</span>
              <span className="status">
                <i /> Capacity available
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof" aria-label="GV8 service principles">
        <div>
          <b>Ghana-first</b>
          <span>Built around the exporter</span>
        </div>
        <div>
          <b>UK warehouse</b>
          <span>Existing capacity for approved stock</span>
        </div>
        <div>
          <b>One clear route</b>
          <span>Preparation to customer dispatch</span>
        </div>
        <div>
          <b>Human support</b>
          <span>Direct, practical conversations</span>
        </div>
      </section>

      <section className="section intro" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A practical gateway</p>
            <h2>
              More than <em>shipping.</em>
            </h2>
          </div>
          <p>
            Moving a box is one task. Building a route to market is another. GV8
            brings export preparation, UK storage and customer fulfilment into
            one commercially focused service.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, copy]) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                Discuss this service <b>↗</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <Image
          className="process-image"
          src="/images/gv8-uk-fulfilment.jpg.png"
          alt="UK fulfilment professional preparing unbranded parcels for dispatch"
          width={1672}
          height={941}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <div className="process-intro">
          <p className="eyebrow">A disciplined starting point</p>
          <h2>
            From product to <em>UK customer.</em>
          </h2>
          <p>
            We begin small and clear. The first conversation is about whether
            your product, target price and selling route can work — before
            anyone commits to a larger shipment.
          </p>
          <a
            className="text-link"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Start an export-readiness conversation <span>↗</span>
          </a>
        </div>
        <ol className="steps">
          <li>
            <b>01</b>
            <div>
              <h3>Assess</h3>
              <p>
                Review the product, its intended customer, product information,
                packaging and basic economics.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Plan the route</h3>
              <p>
                Agree a suitable shipment, storage, dispatch and marketplace
                approach for approved goods.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Send and receive</h3>
              <p>
                Prepare the consignment for the UK route and receive stock into
                the GV8 fulfilment process.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Sell and fulfil</h3>
              <p>
                Dispatch approved UK customer orders with clear handling,
                reporting and support arrangements.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="section goods" id="goods">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Approved products only</p>
            <h2>
              What could <em>travel well?</em>
            </h2>
          </div>
          <p>
            GV8 is designed for commercially viable, properly prepared products
            — not a promise to export everything. We assess suitability before
            we accept stock.
          </p>
        </div>
        <figure className="goods-image">
          <Image
            src="/images/gv8-export-goods.jpg.png"
            alt="Examples of unbranded artisan goods prepared for an export-ready product range"
            width={1370}
            height={1148}
            sizes="(max-width: 760px) 100vw, 82vw"
          />
          <figcaption>
            Illustrative product categories — all goods remain subject to
            product-specific acceptance and compliance review.
          </figcaption>
        </figure>
        <div className="goods-grid">
          <div className="good-list">
            <span>Fashion, accessories & textiles</span>
            <span>Home décor, crafts & gifts</span>
            <span>Art, books & cultural goods</span>
            <span>Selected electronics & accessories</span>
            <span>Shelf-stable packaged goods*</span>
          </div>
          <aside>
            <p className="eyebrow">The sensible boundary</p>
            <h3>Not every good is a good export product.</h3>
            <p>
              Fresh and perishable goods, regulated products, unsafe items,
              counterfeits and products with unresolved documentation require
              specialist handling or may be declined.
            </p>
            <small>
              *Subject to product-specific import, labelling and compliance
              review.
            </small>
          </aside>
        </div>
      </section>

      <section className="marketplace">
        <div>
          <p className="eyebrow">Your UK sales base</p>
          <h2>
            Store closer.
            <br />
            <em>Sell smarter.</em>
          </h2>
        </div>
        <p>
          For the right product, UK-held stock can support faster dispatch, a
          more credible customer experience and a clearer path to Amazon, eBay,
          independent retailers and diaspora customers.
        </p>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Clear answers first</p>
            <h2>
              Frequently asked <em>questions.</em>
            </h2>
          </div>
        </div>
        <div className="faq-grid">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">Begin with the product</p>
        <h2>
          Ready to test your
          <br />
          <em>UK opportunity?</em>
        </h2>
        <p>
          Tell GV8 what you sell, who you want to reach and how you currently
          ship. We will start with the practical questions.
        </p>
        <a
          className="button button-dark"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Talk to GV8 on WhatsApp <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand" href="#top">
            <span className="brand-mark">GV</span>
            <span>
              GV8 <b>Global Solutions</b>
            </span>
          </a>
          <p>
            The gateway to Europe
            <br />
            and beyond.
          </p>
          <a href="mailto:hello@gv8tech.co.uk">
            hello@gv8tech.co.uk <span>↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GV8 Global Solutions. All rights reserved.</span>
          <span>
            Commercial staging page — product and service acceptance applies.
          </span>
          <a href="https://webarastudio.com" target="_blank" rel="noreferrer">
            Built by Webara <span>↗</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
