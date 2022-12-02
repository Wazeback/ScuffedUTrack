import React from "react";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <div className="border-2 border-[#406380] h-[100%] w-[100%]">
    <ResponsiveLine
        theme={{
            axis: {
                ticks: {
                    text: {
                        fill: "white"
                    }
                }
            }
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: true
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'set1' }}
        lineWidth={3}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="xFormatted"
        pointLabelYOffset={-12}
        areaOpacity={0}
        enableSlices="x"
        crosshairType="top-right"
        useMesh={true}
        // legends={[
        //     {
        //         anchor: 'top-right',
        //         direction: 'row',
        //         justify: false,
        //         translateX: -98,
        //         translateY: 0,
        //         itemsSpacing: 0,
        //         Color: 'white',
        //         borderColor: 'white',
        //         itemDirection: 'left-to-right',
        //         itemWidth: 82,
        //         itemHeight: 20,
        //         itemOpacity: 1,
        //         symbolSize: 11,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(255,0,0,0.5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgb(255,255,255)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        motionConfig="slow"
    />
    </div>
)

export default MyResponsiveLine;

