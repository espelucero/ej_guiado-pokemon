
function Pokemon(nombre,color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + ' y soy de color: ' + this.color)
	};

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	};

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	};
}

/*const Pikachu = new Pokemon('Pikachu', 'amarillo', 100)
const Charmander = new Pokemon('Charmander', 'rojo' , 20)
const Balbasaur = new Pokemon('Balbasaur','verde', 60)
const Squirtle = new Pokemon('Squirtle', 'azul', 70)
*/

function botonPelear(){
	var ataque1 = document.getElementById('pokemon1').value;
	var ataque2 = document.getElementById('pokemon2').value;

	var opcion1 = new Pokemon(ataque1, 170);
	var opcion2 = new Pokemon(ataque2, 60);

	var parrafo = document.getElementById('pelear');

	if(ataque1 == ataque2){
		return alert("NO puedes atacar al mismo Pokemon ");
	}

	var resultAtaque = ('<br>' + ataque1 + 
	' atacó a ' + ataque2 + ' y ' + ataque2 + ' tiene ' + opcion2.vida + ' de vida restante' );
	parrafo.innerHTML = resultAtaque
}


//Pikachu.atacar(Charmander)

//console.log(Charmander.vida)