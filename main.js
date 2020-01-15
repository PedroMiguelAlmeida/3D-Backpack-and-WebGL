var mixer = new THREE.AnimationMixer(scene)

var clock = new THREE.Clock()

var objects = [];

var colors = [
    new THREE.Color('black'),
    new THREE.Color('blue'),
    new THREE.Color('yellow'),
    new THREE.Color('brown'),
    new THREE.Color('white')
]

var materials = []

materials.flipY = false;

var axis = new THREE.AxesHelper()
var taget = null
var previousColor = null
var previousMaterial = null
var defaultColor = new THREE.Color('black')
var action = []

var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera( 70, 800 / 600, 0.1, 500 )
camera.position.set(5,5,-5)
camera.lookAt( 0, 0, 0 )

var myCanvas = document.getElementById('myCanvas')

var renderer = new THREE.WebGLRenderer( {canvas: myCanvas, alpha: true } );
renderer.setSize( 1200, 1020 )
renderer.shadowMap.enabled = true


var loader = new THREE.GLTFLoader()
loader.load(
    'mochilaMat.gltf',
    function ( gltf ) {
        scene.add( gltf.scene)

        scene.traverse(function(x){
            if(x.isMesh){
                x.castShadow = true
                x.receiveShadow = true
                objects.push(x);
            }
        }
        )

    }
)

lights(scene)

function lights(scene) {
	var AmbientLight = new THREE.AmbientLight( "white" );
	scene.add(AmbientLight);

	var light = [];
	light[1] = new THREE.PointLight( "white" );
    light[1].position.set( 5, 10, 5 );
    light[1].intensity = 8;
	
	light[2] = new THREE.PointLight( "white" );
    light[2].position.set( -3, 0, 10 );
    light[2].intensity = 8;

	light[3] = new THREE.PointLight( "white" );
	light[3].position.set( 5, 1, 5 );
	light[3].intensity = 8;

	light[4] = new THREE.PointLight( "white" );
	light[4].position.set( -5, 1, -5 );
	light[4].intensity = 8;

	light[1].castShadow = false;
	scene.add( light[1] );
	
	light[2].castShadow = false;
	scene.add( light[2] );
	
	light[3].castShadow = false;
	scene.add( light[3] );
	
	light[4].castShadow = false;
	scene.add( light[4] );
}

var controls = new THREE.OrbitControls( camera, renderer.domElement )
controls.enableDamping = true

function animation() {
    requestAnimationFrame( animation )
    mixer.update(clock.getDelta())
    renderer.render( scene, camera )
}
animation()

document.getElementById('btn_color_handle').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[0].material.color = colors[previousColor];	
}

document.getElementById('btn_color_zip').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[1].material.color = colors[previousColor];
	objects[2].material.color = colors[previousColor];
	objects[3].material.color = colors[previousColor];
	objects[4].material.color = colors[previousColor];
	objects[11].material.color = colors[previousColor];
		
}

document.getElementById('btn_color_pads').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[5].material.color = colors[previousColor];
	objects[6].material.color = colors[previousColor];
	objects[7].material.color = colors[previousColor];
		
}

document.getElementById('btn_color_sides').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[8].material.color = colors[previousColor];
	objects[12].material.color = colors[previousColor];
		
}

document.getElementById('btn_color_back').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[9].material.color = colors[previousColor];	
}

document.getElementById('btn_color_front').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[10].material.color = colors[previousColor];	
}

document.getElementById('btn_color_top').onclick = function() {
		
	if(objects == null)
		return
		
	previousColor++;
	if(previousColor >= colors.length)
	previousColor = 0;

	objects[13].material.color = colors[previousColor];	
}



//Animation


/*
document.getElementById('btn_animate').onclick = function(){

	mainCamera.position.set(0,2,0);
	camera

}
*/