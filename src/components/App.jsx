import { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';
import { Wrapper } from './wrapper/wrapper';
import { Background } from './background/background';
import Loader from './loader/loader';
import data from '../data/data.json';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onProvideFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    const total = totalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedbackCount = totalFeedback();
  const totalPercentageCount = positiveFeedback();

  return (
    <>
      <Loader />
      <Background
        videoSrc={data.video}
        poster={data.poster}
      />
      <Wrapper
        logoSrc={data.logo}
        title={data.title}
        subTitle={data.subTitle}
      >
        <FeedbackOptions
            onProvideFeedback={onProvideFeedback}
            options={options}
        />
          {totalFeedbackCount !== 0 ? (
            <Statistics
              title={data.statisticsTitle}
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positivePercentage={totalPercentageCount}
            />
          ) : (
            <Notification message={data.message} />
          )}
      </Wrapper>
    </>
  )
}