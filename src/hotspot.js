/**
 * (C)  Julius Peinelt
 *      Anna Neovesky
 */

/**
 * Describes a clickable object in a location that shows a popup with information.
 * @param parameters Object which should have fields: ...
 * @constructor
 */
Hotspot = function (parameters) {

    if (parameters === undefined) parameters = {};

    this.infoContent = parameters.hasOwnProperty('content') ? parameters['content'] : "No content";
    this.infoTitle = parameters.hasOwnProperty('title') ? parameters['title'] : "Bernward macht irgendwas in der Kirche im Jahr 1022";


    //sets audio
    if (parameters.hasOwnProperty('audio')) {
        var audioSource = document.getElementById('audioSource');
        var s = parameters['audio'];
        audioSource.src = s;
    }

    this.tooltip = parameters.hasOwnProperty('tooltip') ? parameters['tooltip'] : null;

    /*
    load content via
     this.infoContent.load(parameters['content'], function (response, status, xhr) {
        content.html(response);
     });
     */

    //TODO: was amcht das hier?
    var geometry = new THREE.PlaneGeometry(16, 16);
    var material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture("resources/icons/information.png"),
        transparent: true,

    });
    THREE.Mesh.call(this, geometry, material);
    this.position.set(parameters.position.x, parameters.position.y, parameters.position.z);

};

Hotspot.prototype = Object.create(THREE.Mesh.prototype);

/**
 * Renders Pop Up Window
 */
Hotspot.prototype.onClick = function () {
    //init info view
    var infoView = document.getElementById('infoView');
    // position of pop up

    infoView.style.display = "block";
    // TODO: set proportionally
    // infoView.style.left = 400 + "px"; // (windowX - popUpY) / 2
    // infoView.style.top = 200 + "px"; // (windowY - popUpY) / 2

    //set title
    var infoTitle = document.getElementById('infoTitle');
    infoTitle.innerHTML = this.infoTitle;
    //set text content
    var infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = this.infoContent;

};


