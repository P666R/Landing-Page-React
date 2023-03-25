import Title from './Title';
import { toursInfo } from '../data';
import Tour from './Tour';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title header="featured" span="tours" />
      <div className="section-center featured-center">
        {toursInfo.map((info) => {
          return <Tour key={info.id} {...info} />;
        })}
      </div>
    </section>
  );
}
export default Tours;
