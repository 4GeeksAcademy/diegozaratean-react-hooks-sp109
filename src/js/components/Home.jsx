import React , { useState } from "react";

const Home = () => {

	// useState
	const [contador, setContador] = useState(0) // retorna un array [variable, una funcion]
	const [totalClicks, setTotalClicks] = useState(0)
	//[nombre de la variable, funcion que modifica esta variable]

	function incrementar(){
		console.log('incrementar')		
		// contador = contador + 1
		// setContador(5) ====> contador = 5
		// setContador(x) ====> contador = x
		// contador++ =====> condatodr = contador + 1
		// setContador(contador++ ) ====> contador = contador++ 
		// setContador(contador++ ) ====> contador = condatodr = contador + 1
		setContador(contador + 1)
		setTotalClicks(totalClicks + 1)
	}

	function disminuir(){
		setContador(contador-1)
		setTotalClicks( totalClicks +1)
	}


	return (
		<div className="text-center">            
			<h1 className="text-center mt-5">Bienvenidos a React HOOKS! 🪝</h1>
			<button onClick={()=>disminuir()}>disminuir</button>
			<p>Contador: {contador}</p>
			<button onClick={incrementar}>incrementar</button>
			<p>utilizaste la app {totalClicks} veces</p>
		</div>
	);
};

export default Home;