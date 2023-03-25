import React from 'react';

/** const painPointsData = [
  {
    name: 'Lost revenue:',
    description:
      'Delays in getting permits approved can lead to lost revenue, as developers may have to delay the start of their projects. This can result in missed opportunities and lost income.',
  },
  {
    name: 'Increased costs:',
    description:
      'Delays in permitting can also increase the cost of a project, as developers may have to spend more money on permits, fees, and legal costs associated with navigating the complex regulatory environment.',
  },
  {
    name: 'Reduced investor confidence:',
    description:
      'When projects are delayed due to permitting issues, investors may become wary of working with developers who have a track record of delays. This can make it harder for developers to secure funding for future projects.',
  },
  {
    name: 'Disruption of project timelines:',
    description:
      'Permitting delays can cause major disruptions to project timelines, as developers may have to adjust construction schedules and rework project plans. This can lead to additional costs and lost revenue, as well as damage to the developer\'s reputation.',
  },
  {
    name: 'Increased stress and frustration:',
    description:
      'Finally, permitting delays can be a major source of stress and frustration for developers, as they may feel helpless in the face of a bureaucratic process that seems out of their control. This can take a toll on their mental health and well-being, as well as their ability to work effectively on future projects.',
  },
]; */

const painPointsData = [
    {
      name: 'Financial losses:',
      description:
        'Permitting delays can cost developers significant amounts of money. In the US, delays can cost developers up to $100 billion annually. For example, in Los Angeles, delays can add up to $6,000 per unit per month for a multifamily housing project.',
    },
    {
      name: 'Increased costs:',
      description:
        'Delays can increase the overall cost of a project, including additional fees for permits, legal costs, and financing charges. For example, a study by the National Association of Home Builders found that regulatory costs can account for up to 25% of the cost of a new home.',
    },
    {
      name: 'Schedule disruptions:',
      description:
        'Permitting delays can cause significant disruptions to project timelines, resulting in lost revenue and increased costs. For example, a project that is delayed by six months may lose up to 9% of its expected revenue.',
    },
    {
      name: 'Reduced investor confidence:',
      description:
        'Delays in obtaining permits can reduce investor confidence, making it harder for developers to secure financing for future projects. For example, a study by the Urban Land Institute found that delays in obtaining permits can lead to higher financing costs and lower property values.',
    },
    {
      name: 'Increased stress and frustration:',
      description:
        'Permitting delays can be a major source of stress and frustration for developers, leading to decreased productivity and potential delays in future projects. For example, a survey by the National Association of Home Builders found that regulatory compliance is the second-highest source of frustration for builders, after the cost of land.',
    },
  ];

const PainPoints = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Pain Points</h3>
      <ul className="text-lg sm:text-xl lg:text-2xl text-gray-700">
        {painPointsData.map((point, index) => (
          <li key={index} className="mb-4">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br to-blue-300 via-purple-400 from-indigo-400">
              {point.name}
            </span>{" "}
            {point.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PainPoints;
