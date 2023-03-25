import Title from './Title';
import { servicesInfo } from '../data';
import Service from './Service';

function Services() {
  return (
    <section className="section services" id="services">
      <Title header="our" span="services" />
      <div className="section-center services-center">
        {servicesInfo.map((info) => {
          return <Service key={info.id} {...info} />;
        })}
      </div>
    </section>
  );
}
export default Services;
