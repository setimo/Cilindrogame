var projectile : GameObject;
var lifespan = 2;
var projectileSpeed : float = 200;
var fireRate : float = 2.0;
var cooldown : float;
shotInterval = fireRate;
var losRange : Vector2;
private var hit : RaycastHit;

function Update () {
	
	if (cooldown > 0){
		cooldown -=Time.deltaTime;
	}
	else if (cooldown <= 0){
		AttackonSight();
		
	}
}

function TurretShoot(){

	var shootLeft : GameObject = Instantiate(projectile, transform.position, transform.rotation);
	shootLeft.transform.position.x -= 0.8;
	shootLeft.rigidbody.AddForce(Vector3(-(projectileSpeed),0,0));
	Destroy(shootLeft, lifespan);
}

function AttackonSight(){

losRange = Vector2(-2.0, 1.6);

    if (Physics.Linecast(losRange, transform.position, hit)) {
        print ("Blocked by " + hit.collider.name);
       	if (hit.collider.name == "Flatguy"){
       		TurretShoot();
       		cooldown = fireRate;
       	}
    }
}