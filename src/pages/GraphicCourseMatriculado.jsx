import Header from "../components/Graphic/Header"
import { getTodayDate } from "../utils/getTodayDate"
import { useState } from "react"
import { graphic_course_matriculado } from "../dummy_data/graphic_course_matriculado"
import {
    ResponsiveContainer, BarChart, Bar, XAxis, Label,
    YAxis, CartesianGrid, ReferenceArea, LabelList, Tooltip
} from "recharts"

const GraphicCourseMatriculado = () => {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate)
    const props = { initialDate, setInitialDate, finalDate, setFinalDate }
    const separadores = [  // posição das linhas traçejadas
        { left: "TI", right: "TR" },
        { left: "TE", right: "TI" },
        { left: "ETE", right: "MMC" },
        { left: "FIB", right: "ROB" }
    ]
    return (
        <div className="container">
            <Header {...props} />
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={graphic_course_matriculado}
                        margin={{ top: 15, right: 10, left: 10, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="code" tick={{ fontSize: 11 }} interval={0} />
                        <YAxis allowDecimals={false}>
                            <Label
                                value="Número de Matrículas"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            />
                        </YAxis>
                        <Tooltip />
                        {separadores.map((s, i) => (
                            <ReferenceArea
                                key={i}
                                x1={s.left}
                                x2={s.right}
                                stroke="#444"
                                strokeDasharray="5 5"
                                strokeWidth={1}
                                fillOpacity={0} 
                            />
                        ))}
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

export default GraphicCourseMatriculado