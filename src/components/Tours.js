import Title from './Title';
import { toursInfo } from '../data';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title header="featured" span="tours" />
      <div className="section-center featured-center">
        {toursInfo.map((info) => {
          const { id, img, date, title, text, country, days, price } = info;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tours;
