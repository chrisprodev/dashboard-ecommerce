import React from "react";
import styled from "styled-components";
import {
  Flex,
  FlexBetween,
  FlexColumn,
  MarginTop10,
} from "../../../../styled-components/Alignment";
import {
  Text16Gray300,
  Text16SemiBold,
} from "../../../../styled-components/Typography";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    active: 55,
    inactive: 12,
  },
  {
    name: "Feb",
    active: 70,
    inactive: 16,
  },
  {
    name: "Mar",
    active: 84,
    inactive: 18,
  },
  {
    name: "Apr",
    active: 78,
    inactive: 12,
  },
  {
    name: "May",
    active: 96,
    inactive: 20,
  },
  {
    name: "Jun",
    active: 114,
    inactive: 5,
  },
];

export const Stats: React.FC = () => {
  return (
    <Container>
      <StatsDetails>
        <HeaderDetails>
          <h5>New subscribers</h5>
          <Flex>
            <h3>824</h3>
            <Badge>32%</Badge>
          </Flex>
          <Text16Gray300>
            From Dec 18, 2021 to Jan 2, 2022
          </Text16Gray300>
        </HeaderDetails>
        <FlexBetween>
          <FlexColumn>
            <Flex>
              <BadgeColor color="var(--blue-700)" />
              <Text16SemiBold>452</Text16SemiBold>
            </Flex>
            <MarginTop10>
              <Text16Gray300>Active</Text16Gray300>
            </MarginTop10>
          </FlexColumn>
          <FlexColumn>
            <Flex>
              <BadgeColor />
              <Text16SemiBold>124</Text16SemiBold>
            </Flex>
            <MarginTop10>
              <Text16Gray300>Inactive</Text16Gray300>
            </MarginTop10>
          </FlexColumn>
        </FlexBetween>
      </StatsDetails>
      <BarChart
        width={960}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 100,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="active"
          stackId="a"
          fill="var(--blue-700)"
          barSize={50}
        />
        <Bar
          dataKey="inactive"
          stackId="a"
          fill="var(--gray-300)"
          barSize={50}
        />
      </BarChart>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  height: 300px;

  line {
    stroke: var(--gray-200);
  }
  tspan {
    stroke: var(--gray-200);
  }

  text[orientation="bottom"] {
    font-weight: 300;
    tspan {
      stroke: var(--gray-300);
    }
  }
`;

const StatsDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const HeaderDetails = styled.div`
  h5 {
    font-size: 16px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 32px;
    margin-right: 10px;
  }
`;

const Badge = styled.span`
  padding: 2px 10px;
  border-radius: 10px;
  background: var(--green-400);
  color: var(--green-800);
  font-size: 12px;
  font-weight: 500;
`;

const BadgeColor = styled.span<{ color?: string }>`
  background: ${({ color }) => (color ? color : "var(--gray-300)")};
  height: 18px;
  width: 18px;
  border-radius: 5px;
  margin-right: 10px;
`;
