import Header from "../components/Header"
import { getTodayDate } from "../utils/getTodayDate"
import { useState } from "react"
import { toast } from "react-toastify"
import api from "../utils/api"
import {
    ResponsiveContainer, BarChart, Bar, XAxis, Label,
    YAxis, CartesianGrid, ReferenceLine, LabelList, Tooltip
} from "recharts"

const GraphicCourseMatriculado = () => {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate())
    const [matriculados, setMatriculados] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    async function handleSubmit() {
        try {
            setLoading(true)
            const response = await api.get('/matriculado/total_by_course', {
                params: { initialDate, finalDate }
            })
            setMatriculados(response.data.matriculados)
            setTotal(response.data.total)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    const props = {
        initialDate, setInitialDate, finalDate,
        setFinalDate, total, handleSubmit, loading
    }
    const separators = ["TIM", "TIN", "ETE", "FIB"] // desenha linha após cada uma
    const dataWithIndex = matriculados.map((m, index) => ({
        ...m, index
    }))
    const separatorPositions = separators.map(sigla => {
        const idx = dataWithIndex.findIndex(m => m.sigla == sigla)
        return idx
    }).filter(idx => idx != -1).map(idx => idx + 0.5)
    return (
        <div className="container">
            <Header {...props} />
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={dataWithIndex}
                        margin={{ top: 15, right: 10, left: 10, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {separatorPositions.map((x, i) => (
                            <ReferenceLine
                                key={i}
                                x={x}
                                stroke="#010101"
                                strokeDasharray="4 4"
                            />
                        ))}
                        <XAxis
                            dataKey="index"
                            type="number"
                            domain={[-0.5, dataWithIndex.length - 0.5]}
                            ticks={dataWithIndex.map(d => d.index)}   
                            interval={0}
                            tick={{ fontSize: 11 }}
                            tickFormatter={(value) => dataWithIndex[value]?.sigla ?? ""}
                        />
                        <YAxis allowDecimals={false}>
                            <Label
                                value="Número de Matrículas"
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

export default GraphicCourseMatriculado