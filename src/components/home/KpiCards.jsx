import { Card, Metric, Text, Flex, ProgressBar, Grid } from "@tremor/react";
import { useSelector } from "react-redux";

export default function KpiCards() {
  const { sales, purchases } = useSelector((state) => state.home);

  const totalSales = sales?.reduce((acc, item) => acc + item.amount, 0);
  const totalPurchases = purchases?.reduce((acc, item) => acc + item.amount, 0);

  const cash = totalSales - totalPurchases;

  const categories = [
    {
      title: "Sales",
      metric: `€ ${totalSales}`,
      value: `${((totalSales / 2000000) * 100).toFixed(2)}`,
      target: "€ 2,000,000",
      color: "lime",
    },
    {
      title: "Cash",
      metric: `€ ${cash}`,
      value: `${((cash / 500000) * 100).toFixed(2)}`,
      target: "€ 500,000",
      color: "amber",
    },
    {
      title: "Purchases",
      metric: `€ ${totalPurchases}`,
      value: `${((totalPurchases / 1000000) * 100).toFixed(2)}`,
      target: "1,000,000",
      color: "rose",
    },
  ];

  return (
    <Grid className=" flex justify-center items-center flex-wrap gap-6 mt-3">
      {categories.map((item) => (
        <Card
          key={item.title}
          decoration="top"
          decorationColor={item.color}
          className="w-full flex-grow lg:w-5/12 xl:w-[32%]"
        >
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Flex className="mt-4">
            <Text className="truncate">{`${item.value}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar color={item.color} value={item.value} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}
