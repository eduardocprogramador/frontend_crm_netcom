import Header from "../components/Graphic/Header"
import { getTodayDate } from "../utils/getTodayDate"
import { useState } from "react"
import { graphic_source_interessado } from "../dummy_data/graphic_source_interessado"
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, LabelList, Label
} from "recharts"

const GraphicSourceInteressado = () => {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate)
    const props = { initialDate, setInitialDate, finalDate, setFinalDate }
    return (
        <div className="container">
            <Header {...props} />
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={graphic_source_interessado}
                        margin={{ top: 15, right: 10, left: 10, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="source" />
                        <YAxis allowDecimals={false}>
                            <Label
                                value="Número de Atendimentos"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            />
                        </YAxis>
                        <Tooltip />
                        <Bar
                            dataKey="total"
                            fill="rgba(13, 110, 253, 0.18)" 
                            stroke="#0d6efd"
                            strokeWidth={1}
                            radius={[6, 6, 0, 0]}
                        >
                            <LabelList dataKey="total" position="top" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraphicSourceInteressado