import { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryTooltip, VictoryContainer, VictoryTheme } from 'victory';


export default function Graph ({assignmentData, filter}) {
  
    const data = assignmentData.map((assignment) => ({
        assignment: assignment.assignment,
        difficulty: assignment.difficulty,
        fun: assignment.fun,
        label: 
        `assignment ${assignment.assignment}, 
         'difficulty: ${assignment.difficulty.toFixed(1)},
         fun: ${assignment.fun.toFixed(1)}`
    }))
    
    return (
      <>
        {filter === "both" &&
        <>
          <VictoryChart
            theme={VictoryTheme.material}
            width={720}
            height={200}
            domain={{x: [0, 55]}}
            containerComponent={
            <VictoryContainer width={700} height={250} />
            }
          >
            <VictoryAxis
              style={{
              ticks: { stroke: "grey", size: 2 },
              tickLabels: {
                  fontSize: 6,
                  padding: 2,
                  angle: -60,
                  textAnchor: "end",
              },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                ticks: {stroke: "grey", size: 2 },
                tickLabels: { fontSize: 7, padding: 3 },
                }}
            />
            <VictoryGroup   
              offset={5}
              colorScale={["red", "green" ]}
            >
              <VictoryBar
                labelComponent=
                {<VictoryTooltip
                  style={[{ fontSize: 5}]}
                />}
                data={data} 
                x="assignment" 
                y="difficulty"
                barWidth={3}
              />
              <VictoryBar
                labelComponent=
                {<VictoryTooltip
                  style={[{ fontSize: 5}]}
                />}
                data={data} 
                x="assignment" 
                y="fun"
                barWidth={3}
              />
            </VictoryGroup>
          </VictoryChart>
        </>
        }

        {filter === "diff" &&
        <>
          <VictoryChart
            theme={VictoryTheme.material}
            width={720}
            height={200}
            domain={{x: [0, 55]}}
            containerComponent={
            <VictoryContainer width={700} height={250} />
            }
          >
            <VictoryAxis
              style={{
              ticks: { stroke: "grey", size: 2 },
              tickLabels: {
                  fontSize: 6,
                  padding: 2,
                  angle: -60,
                  textAnchor: "end",
              },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                ticks: {stroke: "grey", size: 2 },
                tickLabels: { fontSize: 7, padding: 3 },
                }}
            />
            <VictoryGroup   
              offset={5}
              colorScale={["red"]}
            >
              <VictoryBar
                labelComponent=
                {<VictoryTooltip
                  style={[{ fontSize: 5}]}
                />}
                data={data} 
                x="assignment" 
                y="difficulty"
                barWidth={3}
              />
            </VictoryGroup>
          </VictoryChart>
        </>
        }

        {filter === "fun" &&
        <>
          <VictoryChart
            theme={VictoryTheme.material}
            width={720}
            height={200}
            domain={{x: [0, 55]}}
            containerComponent={
            <VictoryContainer width={700} height={250} />
            }
          >
            <VictoryAxis
              style={{
              ticks: { stroke: "grey", size: 2 },
              tickLabels: {
                  fontSize: 6,
                  padding: 2,
                  angle: -60,
                  textAnchor: "end",
              },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                ticks: {stroke: "grey", size: 2 },
                tickLabels: { fontSize: 7, padding: 3 },
                }}
            />
            <VictoryGroup   
              offset={5}
              colorScale={["green"]}
            >
              <VictoryBar
                labelComponent=
                {<VictoryTooltip
                  style={[{ fontSize: 5}]}
                />}
                data={data} 
                x="assignment" 
                y="fun"
                barWidth={3}
              />
            </VictoryGroup>
          </VictoryChart>
        </>
        }
      </>
      )
}