import Header from "../components/Graphic/Header"
import { getTodayDate } from "../utils/getTodayDate"
import { useState } from "react"
import { toast } from "react-toastify"
import api from "../utils/api"
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, LabelList, Label
} from "recharts"

const GraphicTotalsMatriculado = () => {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate())
    const [matriculados, setMatriculados] = useState([])
    const [total, setTotal] = useState(0)
    async function handleSubmit() {
        try {
            const response = await api.get('/matriculado/total_by_month', {
                params: { initialDate, finalDate }
            })
            setMatriculados(response.data.matriculados)
            setTotal(response.data.total)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = {
        initialDate, setInitialDate, finalDate, setFinalDate, total, handleSubmit
    }
    return (
        <div className="container">
            <Header {...props} />
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={matriculados}
                        margin={{ top: 15, right: 10, left: 10, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" tick={{ fontSize: 11 }} />
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

export default GraphicTotalsMatriculado