const reset = document.getElementById('btnReestablecer');
const visitas = document.getElementById('contadorVisitas');

const setContador = () => {
    let count 
    if (localStorage.length == 0) {
        localStorage.setItem('contador', '0')
        
    }
    count = Number(localStorage.contador)
    window.onload = count++;
    localStorage.setItem('contador', count.toString())
    visitas.innerHTML = localStorage.contador;
}   

setContador();


reset.addEventListener('click', () => {
    localStorage.clear();
    visitas.innerHTML = '0';
    console.log(localStorage)
});


