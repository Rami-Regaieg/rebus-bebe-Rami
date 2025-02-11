function verifierReponse(reponse) {
  if (reponse === 'a') {
    document.getElementById('etape1').style.display = 'none';
    document.getElementById('etape2').style.display = 'block';
  } else {
    alert("Mauvaise réponse, essayez encore !");
  }
}

function afficherEtape3() {
  document.getElementById('etape2').style.display = 'none';
  document.getElementById('etape3').style.display = 'block';
}

function afficherRevelation() {
  document.getElementById('etape3').style.display = 'none';
  document.getElementById('revelation').style.display = 'block';
}
