import { pageLinks } from '../data';
import PageLink from './PageLink';

function PageLinks({ parentClassname, childClassname }) {
  return (
    <ul className={parentClassname} id={parentClassname}>
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} childClassname={childClassname} {...link} />
        );
      })}
    </ul>
  );
}
export default PageLinks;
