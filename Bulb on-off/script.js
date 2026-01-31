let bulbOn = document.getElementById('on');
let bulbOff = document.getElementById('off');
let buttonOnOrOff = document.getElementById('onOrOff');
let bulb = document.getElementById('bulb');
let state = 0;

bulbOn.onclick = function () {
  document.getElementById('bulb').src = './pic_bulbon.gif';
  state = 1;
};

bulbOff.onclick = function () {
  document.getElementById('bulb').src = './pic_bulboff.gif';
  state = 0;
};

buttonOnOrOff.onclick = function () {
  if (state == 0) {
    document.getElementById('onOrOff').innerText = 'Turn On';
    document.getElementById('bulb').src = './pic_bulbon.gif';
    state = 1;
  } else if (state == 1) {
    document.getElementById('onOrOff').innerText = 'Turn Off';
    document.getElementById('bulb').src = './pic_bulboff.gif';
    state = 0;
  }
};
