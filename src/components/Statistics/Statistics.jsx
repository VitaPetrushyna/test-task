import { TextTweet, TextFollower, StatisticInfo } from './Statistics.styled';

const Statistics = ({ follower }) => {
  return (
    <StatisticInfo>
      <TextTweet>777 TWEETS</TextTweet>
      <TextFollower>{follower} FOLLOWERS</TextFollower>
    </StatisticInfo>
  );
};

export default Statistics;
