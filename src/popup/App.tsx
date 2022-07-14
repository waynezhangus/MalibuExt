import * as React from 'react';
import TweetComponent from './components/Tweet';

export default function App() {
  const tweets = [
    {
      _id: '0',
      createdAt: '2021-06-30T20:14:41.778+00:00',
      updatedAt: '2021-12-06T19:54:18.865+00:00',
      text: 'Omicron may not be more dangerous than other variants, early hospital report suggests.',
      username: 'Popular Science',
      screenName: 'PopSci',
      userURL: 'https://twitter.com/PopSci',
      profileImg:
        'http://pbs.twimg.com/profile_images/1029084163780079616/KL96wS4C_normal.jpg',
      image:
        'https://www.popsci.com/uploads/2020/03/25/Y5VQ2BU4WBGYJHKS3SNFWEBBKA.jpg',
    },
    {
      _id: '1',
      createdAt: '2021-06-30T20:14:41.778+00:00',
      updatedAt: '2021-12-06T19:54:18.865+00:00',
      text: "Although Omicron is highly transmissible, cases so far don't show an increase in severity.",
      username: 'Hannah Seo',
      screenName: 'ahannahseo',
      userURL: 'https://twitter.com/ahannahseo',
      profileImg:
        'http://pbs.twimg.com/profile_images/1409649060726902785/eJiZUtLQ_normal.jpg',
    },
  ];

  return (
    <main>
      {tweets.map((tweet) => (
        <TweetComponent key={tweet._id} tweet={tweet} />
      ))}
      <div className=""></div>
    </main>
  );
}
