document.addEventListener('DOMContentLoaded', () => {
    const formNota = document.getElementById('form-nota');
    const inputTitulo = document.getElementById('titulo');
    const inputContenido = document.getElementById('contenido');
    const listaNotas = document.getElementById('lista-notas');
    const notificacion = document.getElementById('notificacion');
    const mensajeNotificacion = document.getElementById('mensaje-notificacion');
    const btnDeshacer = document.getElementById('btn-deshacer');

    let notas = [];
    let ultimaNotaEliminada = null;
    let timerNotificacion = null;

    formNota.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = inputTitulo.value.trim();
        const contenido = inputContenido.value.trim();

        if (!titulo || !contenido) {
            mostrarNotificacion('No se puede agregar una nota vacía', false);
            return;
        }

        notas.push({ id: Date.now(), titulo, contenido });
        renderizarNotas();
        formNota.reset();
        mostrarNotificacion('Nota agregada exitosamente', false);
    });

    function renderizarNotas() {
        listaNotas.innerHTML = '';
        if (notas.length === 0) {
            listaNotas.innerHTML = '<p>No hay notas registradas.</p>';
            return;
        }

        notas.forEach(nota => {
            const div = document.createElement('div');
            div.className = 'tarjeta-nota';
            div.innerHTML = `
                <h3>${escapeHTML(nota.titulo)}</h3>
                <p>${escapeHTML(nota.contenido)}</p>
                <button class="btn-eliminar" data-id="${nota.id}">Eliminar</button>
            `;
            listaNotas.appendChild(div);
        });
    }

    listaNotas.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const id = Number(e.target.dataset.id);
            const indice = notas.findIndex(n => n.id === id);

            if (indice !== -1) {
                ultimaNotaEliminada = { nota: notas[indice], posicion: indice };
                notas.splice(indice, 1);
                renderizarNotas();
                mostrarNotificacion('Nota eliminada', true);
            }
        }
    });

    btnDeshacer.addEventListener('click', () => {
        if (ultimaNotaEliminada) {
            notas.splice(ultimaNotaEliminada.posicion, 0, ultimaNotaEliminada.nota);
            ultimaNotaEliminada = null;
            renderizarNotas();
            ocultarNotificacion();
        }
    });

    function mostrarNotificacion(mensaje, permitirDeshacer) {
        clearTimeout(timerNotificacion);
        mensajeNotificacion.textContent = mensaje;
        btnDeshacer.classList.toggle('oculta', !permitirDeshacer);
        notificacion.classList.remove('oculta');

        timerNotificacion = setTimeout(ocultarNotificacion, 4000);
    }

    function ocultarNotificacion() {
        notificacion.classList.add('oculta');
        ultimaNotaEliminada = null;
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
    }
});