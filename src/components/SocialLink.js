function SocialLink({ iconClass, href, icon }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={iconClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default SocialLink;
