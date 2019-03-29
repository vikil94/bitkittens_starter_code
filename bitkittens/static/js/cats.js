document.addEventListener("DOMContentLoaded", function() {

    const summonBtn = document.querySelector('.summon-cats');
    const catBoxes = document.querySelectorAll('.cat-box');


    summonBtn.addEventListener('click', () => {
        console.log('Summon Kittens button was clicked')
        axios.get('http://bitkittens.herokuapp.com/cats.json')
            .then((response) => {

                catBoxes.forEach((box, i) => {
                    box.innerHTML = '';
                    const cat = document.createElement('img');
                    cat.src = response.data.cats[i].photo;
                    cat.alt = `Photo of ${ response.data.cats[i].name }`;
                    box.appendChild(cat);

                });
            });

    });

});