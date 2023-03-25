function PageLink({ childClassname, href, text }) {
  return (
    <li>
      <a href={href} className={childClassname}>
        {text}
      </a>
    </li>
  );
}
export default PageLink;
