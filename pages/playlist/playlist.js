document.addEventListener('DOMContentLoaded', function () {
    const playlistElement = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
  
    /*const playlist = [
      { title: 'Canción 1', src: './assets/Alton Ellis Girl I ve Got A Date-.mp3' },
      { title: 'Canción 2', src: './assets/Alton Ellis Rocksteady.mp3' },

    ];*/
  
    playlist.forEach((song, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${song.title}`;
      listItem.classList.add('list-group-item');
      listItem.addEventListener('click', () => playSong(index));
      playlistElement.appendChild(listItem);
    });
  
    function playSong(index) {
      const selectedSong = playlist[index];
      audioPlayer.src = selectedSong.src;
      audioPlayer.play();
    }
  });