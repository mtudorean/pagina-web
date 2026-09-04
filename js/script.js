document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jurnal-form');
    const lista = document.getElementById('jurnal-lista');
    const mesajGol = document.getElementById('jurnal-gol');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // oprim reîncărcarea paginii

        const titluInput = document.getElementById('titlu-obs');
        const descriereInput = document.getElementById('descriere-obs');

        const titlu = titluInput.value.trim();
        const descriere = descriereInput.value.trim();

        if (titlu === '' || descriere === '') {
            return;
        }

        // ascundem mesajul "nicio observatie" la prima adaugare
        mesajGol.style.display = 'none';

        // construim cardul nou
        const card = document.createElement('div');
        card.className = 'card';

        const titluEl = document.createElement('h3');
        titluEl.textContent = titlu;

        const descriereEl = document.createElement('p');
        descriereEl.textContent = descriere;

        const dataEl = document.createElement('span');
        dataEl.className = 'tag electric';
        const acum = new Date();
        dataEl.textContent = 'Adăugat: ' + acum.toLocaleDateString('ro-RO') + ' ' + acum.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });

        const btnSterge = document.createElement('button');
        btnSterge.type = 'button';
        btnSterge.className = 'btn-sterge-card';
        btnSterge.textContent = 'Șterge';
        btnSterge.addEventListener('click', function () {
            card.remove();
            if (lista.children.length === 0) {
                mesajGol.style.display = 'block';
            }
        });

        card.appendChild(titluEl);
        card.appendChild(descriereEl);
        card.appendChild(dataEl);
        card.appendChild(btnSterge);

        // adaugam cardul nou la inceputul listei
        lista.prepend(card);

        // golim campurile formularului
        form.reset();
        titluInput.focus();
    });
});

