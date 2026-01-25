import { categories } from "../data/categories"
import { courses } from "../data/courses"

const SelectsCategoryCourse = ({category, setCategory, course, setCourse}) => {
    const filteredCourses = courses.filter(c => c[0] === category)
    function handleCategoryChange(e){
        setCategory(Number(e.target.value))
        setCourse('')
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <label className="mb-1">Categoria:</label>
                <select className="form-control text-center mb-4"
                    value={category} onChange={handleCategoryChange}
                >
                    <option value={-1} disabled>Selecione</option>
                    {categories.map((c, index) => (
                        <option key={index} value={index}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-md-6">
                {/* só mostra o select de cursos após selecionar uma categoria */}
                {category != -1 && (
                    <>
                        <label className="mb-1">Curso:</label>
                        <select className="form-control text-center mb-4" 
                            value={course} onChange={e => setCourse(e.target.value)} 
                            disabled={category === -1}
                        >
                            <option value="" disabled>Selecione</option>
                            {filteredCourses.map((c, index) => (
                                <option key={index} value={c[1]}>
                                    {/* retira o ead no final ao mostrar a option */}
                                    {category == 2 ? c[1].slice(0, -4) : c[1]}
                                </option>
                            ))}
                        </select>
                    </>
                )}
            </div>
        </div>
    )
}

export default SelectsCategoryCourse