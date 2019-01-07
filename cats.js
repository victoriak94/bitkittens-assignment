document.addEventListener('DOMContentLoaded', function() {

  const summonKittiesButton = document.querySelector('button.summon-cats');
  const catBoxes = document.querySelectorAll('.cat-box');

  summonKittiesButton.addEventListener('click', () => {
    console.log('Summon all the cats!')
    axios({
      method: 'GET',
      url: 'http://bitkittens.herokuapp.com/cats' + '.json',
      responseType: 'json'
    }).then((response) => {
      console.log(response.data)

      catBoxes.forEach((box, index) => {
        box.innerHTML = '';
        const catImage = document.createElement('img');
        catImage.src = response.data.cats[index].photo;
        catImage.alt = `Photo of ${response.data.cats[index].name}`;
        box.appendChild(catImage);
      });
    });
  });

});
