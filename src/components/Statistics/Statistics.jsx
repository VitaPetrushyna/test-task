import { TextTweet, TextFollower, StatisticInfo } from './Statistics.styled';

const Statistics = ({ tweet, follower }) => {
  return (
    <StatisticInfo>
      <TextTweet>{tweet} TWEETS</TextTweet>
      <TextFollower>{follower} FOLLOWERS</TextFollower>
    </StatisticInfo>
  );
};

export default Statistics;
