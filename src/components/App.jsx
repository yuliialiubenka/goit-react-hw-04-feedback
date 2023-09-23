import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';
import { Wrapper } from './wrapper/wrapper';
import { Background } from './background/background';
import Loader from './loader/loader';
import data from '../data/data.json';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onProvideFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbackCount = this.totalFeedback();
    const totalPercentageCount = this.positiveFeedback();
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
              onProvideFeedback={this.onProvideFeedback}
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
}