var thisPrefab : ParticleEmitter;

function OnCollisionEnter (col : Collision) {

	if (col.gameObject.name == "Missile(Clone)"){
		Destroy(gameObject.Find("Flatguy"),0);
		Instantiate(thisPrefab, transform.position, transform.rotation);

	}	
}