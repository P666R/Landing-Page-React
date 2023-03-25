import Title from './Title';
import { servicesInfo } from '../data';

function Services() {
  return (
    <section className="section services" id="services">
      <Title header="our" span="services" />
      <div className="section-center services-center">
        {servicesInfo.map((info) => {
          const { id, icon, text, title } = info;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Services;
