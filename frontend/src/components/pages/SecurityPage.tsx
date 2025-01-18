import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as Highcharts from "highcharts";
import { useLoaderData } from "@tanstack/react-router";
import { HighchartsReact } from "highcharts-react-official";
import { Price } from "@/types/securities";

export const SecurityPage = () => {
  const security = useLoaderData({ from: `/securities/$ticker` });

  const priceData = security.prices.map((entry: Price) => [entry.date, entry.close]);

  const volumeData = security.prices.map((entry: Price) => {
    const volumeMillions = entry.volume / 1000000;
    const fixedVolume = Math.round(volumeMillions * 100) / 100;

    return [entry.date, fixedVolume];
  });

  const options: Highcharts.Options = {
    title: {
      text: "Price/Volume History",
      style: {
        color: "#64748b",
      },
    },

    xAxis: {
      type: "datetime",
    },

    yAxis: [
      {
        title: {
          text: "Price",
        },
      },
      {
        title: {
          text: "Volume (Millions)",
        },
        opposite: true,
        labels: {
          format: "{value}M",
        },
      },
    ],

    series: [
      {
        type: "line",
        name: "Price",
        data: priceData,
      },
      {
        type: "line",
        name: "Volume",
        data: volumeData,
        yAxis: 1,
        tooltip: {
          valueSuffix: "M",
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeader component="header" title={`${security.ticker} - ${security.securityName}`} />

      <CardContent>
        <Box component="section" sx={{ marginBlockEnd: "2rem" }}>
          {["sector", "country"].map((key) => {
            return (
              <Typography key={key}>
                <Typography
                  component="span"
                  sx={{ fontWeight: "bold", marginInlineEnd: "0.5em", textTransform: "capitalize" }}
                >
                  {key}:
                </Typography>
                {security[key]}
              </Typography>
            );
          })}
        </Box>

        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
};
