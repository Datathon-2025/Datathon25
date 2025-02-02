import { useState, useEffect } from "react"

export default function StatsCard() {
  const [clicks, setClicks] = useState(0)
  const [impressions, setImpressions] = useState(0)
  const [cpc, setCpc] = useState(728)
  const [cpa, setCpa] = useState(0)

  useEffect(() => {
    fetch('http://13.61.152.203:5000/get_all_stats')
      .then((response) => response.text())
      .then((data) => {
        const jsonData = JSON.parse(data)
        console.log(jsonData)
        setClicks(jsonData.number_of_clicks)
        setImpressions(jsonData.number_of_impressions)
        setCpc(jsonData.average_cpc)
        setCpa(jsonData.cost)
        console.log(jsonData.number_of_clicks)
        console.log(jsonData.number_of_impressions)
        console.log(jsonData.average_cpc)
        console.log(jsonData.cost)
      })
  }, [])

  const stats = [
    { name: 'Number of clicks', value: clicks },
    { name: 'Average CPC', value: cpc },
    { name: 'Cost', value: cpa },
    { name: 'Impressions', value: impressions },
  ]

  return (
    <div className="bg-gray-900 rounded-lg shadow-md">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="p-4">
              <p className="text-sm font-medium text-gray-400">{stat.name}</p>
              <p className="mt-1 text-3xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}