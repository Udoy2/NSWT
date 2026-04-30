const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-accent-foreground">
      <div className="container-site px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold">NSWT</h3>
            <p className="mt-3 text-sm text-accent-foreground/60 max-w-[40ch]">
              Nesar-Shahin Welfare Trust. Established 2010. Bagerhat, Bangladesh.
            </p>
          </div>

          {/* Contact Dhaka */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/50">Contact // Dhaka</span>
            <p className="mt-3 text-sm text-accent-foreground/80">
              AKM Anwar Hossain<br />
              Hoda Vasi Chowdhury & Co.<br />
              BTMC Bhaban, Karwan Bazar<br />
              Dhaka – 1215, Bangladesh
            </p>
            <p className="mt-2 text-sm text-accent-foreground/80">
              +880 1711 261 343<br />
              anwar@hodavasi.com
            </p>
          </div>

          {/* Contact Bagerhat */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/50">Contact // Bagerhat</span>
            <p className="mt-3 text-sm text-accent-foreground/80">
              Mahafuzul Alam<br />
              Village: Kashimpur<br />
              Bagerhat Sadar, Bagerhat<br />
              Bangladesh
            </p>
            <p className="mt-2 text-sm text-accent-foreground/80">
              +880 1716 935 779<br />
              mahalam.alam@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-accent-foreground/40">
            © 2025 Nesar-Shahin Welfare Trust. All rights reserved.
          </span>
          <a
            href="https://maps.app.goo.gl/xkwGZUwDpKcRkvkb6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground/50 hover:text-accent-foreground transition-colors"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
