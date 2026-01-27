import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Perfil from "./pages/Perfil"
import NotFound from "./pages/NotFound"
import Layout from "./utils/Layout"
import Private from "./utils/Private"
import AddMatriculado from "./pages/AddMatriculado"
import AddInteressado from "./pages/AddInteressado"
import SearchInteressado from "./pages/SearchInteressado"
import SearchMatriculado from "./pages/SearchMatriculado"
import EditInteressado from "./pages/EditInteressadoModal"
import GraphicTotalsInteressado from "./pages/GraphicTotalsInteressado"
import GraphicSourceInteressado from "./pages/GraphicSourceInteressado"
import GraphicTotalsMatriculado from "./pages/GraphicTotalsMatriculado"
import GraphicCourseMatriculado from "./pages/GraphicCourseMatriculado"

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={
        <Private>
          <Layout>
            <Home />
          </Layout>
        </Private>
      } 
      />
      <Route path="/perfil" element={
        <Private>
          <Layout>
            <Perfil />
          </Layout>
        </Private>
      } 
      />
      <Route path="/add_matriculado" element={
        <Private>
          <Layout>
            <AddMatriculado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/add_interessado" element={
        <Private>
          <Layout>
            <AddInteressado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/consultar_matriculado" element={
        <Private>
          <Layout>
            <SearchMatriculado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/consultar_interessado" element={
        <Private>
          <Layout>
            <SearchInteressado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/editar_interessado/:id" element={
        <Private>
          <Layout>
            <EditInteressado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/grafico_total_interessado" element={
        <Private>
          <Layout>
            <GraphicTotalsInteressado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/grafico_canal_interessado" element={
        <Private>
          <Layout>
            <GraphicSourceInteressado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/grafico_total_matriculado" element={
        <Private>
          <Layout>
            <GraphicTotalsMatriculado />
          </Layout>
        </Private>
      } 
      />
      <Route path="/grafico_curso_matriculado" element={
        <Private>
          <Layout>
            <GraphicCourseMatriculado />
          </Layout>
        </Private>
      } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes> 
  )
}

export default RoutesApp