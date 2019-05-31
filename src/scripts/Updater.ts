// Set the current game version, Must be a string of 3 seperated numbers eg: '1.2.34'
window.version = '1.0.0';

function playerVersionOlderThan(checkVersion){
  checkVersion = checkVersion.split('.').map(Number);

  if (typeof player === 'undefined'){
    player = JSON.parse(localStorage.player);
  }
  const playerVersion = (player.version || '0.0.0').split('.').map(Number);

  return checkVersion.some((v,i)=>v > playerVersion[i]);
}

// Run the version checks
((version) => {
  // Get the saved player object
  if (typeof player === 'undefined'){
    if (!localStorage.player || localStorage.player == 'null'){
      return;
    }
    player = JSON.parse(localStorage.player);
  }

  if (playerVersionOlderThan('1.0.0')){
    // Refer PR #302
    player._oakItemsEquipped = [];
  }

  // Update the save version
  player.version = version;
  localStorage.setItem('player', JSON.stringify(player));
})(window.version);
