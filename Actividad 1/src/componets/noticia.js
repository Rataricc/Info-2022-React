{/*Esto es un componente*/}
function Noticia(){ 
    const noticia = {
        titulo : "Informatorio 2022 - Materia: React",
        descripcion : "Tarea: Crear un componente para ir practicando y subir a un repo" 
    }
    {/*Desestructuración Básica de Objetos */}
    const {titulo, descripcion} = noticia 

    return(
        <div className="component">
            <h1 className="titulo">Noticia del dia: {titulo}</h1>
            <p>
                {descripcion}
            </p>
        </div>
    )
}
export default Noticia