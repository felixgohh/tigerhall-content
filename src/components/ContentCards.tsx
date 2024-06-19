import IonIcon from '@reacticons/ionicons';
import { ContentCardEdge } from '../shared/content.type';

interface ContentCardsProps {
  cards: ContentCardEdge[];
}

const ContentCards: React.FC<ContentCardsProps> = ({ cards }) => {
  const convertMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-[24px]">
      {cards.map((card) => (
        <article key={card.name} className="w-full rounded-[10px] bg-white">
          <div className="relative border-b-2 border-b-grey-400">
            <div className="flex flex-row items-center gap-[5px] absolute left-0 top-0 bg-orange-50 p-[8px] rounded-br-[10px] rounded-tl-[10px]">
              <IonIcon
                name="pie-chart"
                className="text-orange-400 text-sm"
              ></IonIcon>
              <p className="text-sm font-bold text-black">0% Completed</p>
            </div>
            <div className="flex w-[24px] h-[24px] bg-orange-600 p-[5px] rounded-full absolute left-[5px] bottom-[5px]">
              <IonIcon name="headset" className="text-white"></IonIcon>
            </div>
            <div className="flex flex-row items-center gap-[5px] text-sm absolute right-[5px] bottom-[5px] py-[4px] px-[8px] rounded-[100px] bg-black text-white font-bold">
              <IonIcon name="time-outline"></IonIcon>
              <p>{convertMinutesToHours(card.length)}</p>
            </div>
            <figure className="w-full h-[120px]">
              <img
                src={card.image.uri}
                alt={card.name}
                className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]"
              />
            </figure>
          </div>
          <div className="p-[10px] flex flex-col">
            <p className="text-sm text-grey-700 font-semibold uppercase">
              {card.categories[0].name}
            </p>
            <h3 className="text-md font-bold mt-[3px] text-black capitalize leading-tight">
              {card.name}
            </h3>
            <div className="text-sm capitalize leading-tight mt-[8px]">
              <p className="text-grey-800">
                {card.experts[0].firstName} {card.experts[0].lastName}
              </p>
              <p className="text-grey-700 font-bold">
                {card.experts[0].company
                  ? card.experts[0].company
                  : 'Lorem Ipsum'}
              </p>
            </div>
            <div className="flex flex-row ml-auto gap-[10px] text-md text-orange-600">
              <button className="flex" type="button">
                <IonIcon name="share-social-outline"></IonIcon>
              </button>
              <button className="flex" type="button">
                <IonIcon name="bookmark-outline"></IonIcon>
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ContentCards;
