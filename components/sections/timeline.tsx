import { getJourney } from "../../lib/life-journey";

type TimelineType = {
  year: number;
  activities: Array<{
    milestone: string;
    description?: string;
  }>;
};

const Timeline: React.FC = ({}) => {
  const timeline = getJourney();

  return (
    <section>
      <h3 className="mb-8">My Timeline</h3>
      <div className="flex flex-col">
        {timeline.map((timelineItem: TimelineType, timelineIndex) => (
          <div key={`timeline-${timelineItem.year}`}>
            <div className="flex flex-col items-center">
              <h6 className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 w-max rounded-md text-white mb-4">
                {timelineItem.year}
              </h6>
              <ul className="flex flex-col gap-12">
                {timelineItem.activities.map((activity, index) => (
                  <li
                    key={`activity_${timelineItem.year}_${index}`}
                    className="flex flex-col gap-2"
                  >
                    <h4>{activity.milestone}</h4>
                    {activity.description && <p>{activity.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
            {timelineIndex < timeline.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
