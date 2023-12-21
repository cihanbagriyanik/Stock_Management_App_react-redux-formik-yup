import { Grid } from "@mui/material";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";

// const chartdata = [
//   {
//     date: "Jan 22",
//     SemiAnalysis: 2890,
//     "The Pragmatic Engineer": 2338,
//   },
//   {
//     date: "Feb 22",
//     SemiAnalysis: 2756,
//     "The Pragmatic Engineer": 2103,
//   },
//   {
//     date: "Mar 22",
//     SemiAnalysis: 3322,
//     "The Pragmatic Engineer": 2194,
//   },
//   {
//     date: "Apr 22",
//     SemiAnalysis: 3470,
//     "The Pragmatic Engineer": 2108,
//   },
//   {
//     date: "May 22",
//     SemiAnalysis: 3475,
//     "The Pragmatic Engineer": 1812,
//   },
//   {
//     date: "Jun 22",
//     SemiAnalysis: 3129,
//     "The Pragmatic Engineer": 1726,
//   },
// ];

const valueFormatter = function (number) {
  return "€" + new Intl.NumberFormat("de").format(number).toString();
};

const Charts = () => {
  const { purchases, sales } = useSelector((state) => state.home);

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleString("de-DE"),
    purchase: item.amount,
  }));

  const salesData = sales?.map((item) => {
    return {
      date: new Date(item.createdAt).toLocaleString("de-DE"),
      sale: item.amount,
    };
  });

  return (
    <Grid container mt={3} spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Sales</Title>
          <AreaChart
            className="h-72 mt-4"
            data={salesData}
            index="date"
            categories={["sale"]}
            colors={["lime"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Purchases</Title>
          <AreaChart
            className="h-72 mt-4"
            data={purchasesData}
            index="date"
            categories={["purchase"]}
            colors={["amber"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Charts;
