<div id="arjs-container">
  <a-scene embedded arjs="sourceType: webcam;">
    <a-box position="0 0.5 -1" material="color: yellow;"></a-box>
    <a-marker preset="hiro">
      <a-box position="0 0.5 0" material="color: red;"></a-box>
    </a-marker>
    <a-camera-static></a-camera-static>
  </a-scene>
</div>
const arjsContainer = document.getElementById('arjs-container');

const arjsScene = `
  <a-scene embedded arjs="sourceType: webcam;">
    <a-box position="0 0.5 -1" material="color: yellow;"></a-box>
    <a-marker preset="hiro">
      <
