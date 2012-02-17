var thePrefab : GameObject;
var lifespan = 2;
var projectileSpeed : float = 200;
var moveball : MoveBall;
moveball = GetComponent(MoveBall);

function Update () {
	
	if (Input.GetButtonDown("Fire1")){

	
		var shootLeft : GameObject = Instantiate(thePrefab, transform.position, transform.rotation);
		var right : Vector3 = transform.TransformDirection(Vector3.right);
		shootLeft.transform.TransformDirection(right);
		//var newvector3 : Vector3(0,0,0);
		//right = right.transform.y + 0.3;	
				
		if (shootLeft.transform.position.x > 0)
		{
			shootLeft.transform.position.x +=0.3;
		}
		else
		{
			shootLeft.transform.position.x -= 0.3;
		}
		shootLeft.transform.position.y +=0.3;
		
		shootLeft.rigidbody.AddForce(transform.right * projectileSpeed);
		//shootLeft.rigidbody.AddForce(Vector3((projectileSpeed),0,0));
	}
	
	
	Destroy(shootLeft, lifespan);
}
