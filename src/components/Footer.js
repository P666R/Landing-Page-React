import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClassname="footer-links" childClassname="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} iconClass="footer-icon" {...link} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
