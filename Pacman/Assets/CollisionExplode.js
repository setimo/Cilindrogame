var effect : ParticleEmitter;

function OnCollisionEnter (theCollision : Collision) {

	if (theCollision.gameObject.name == "Bullet(Clone)"){
		//Destroy(gameObject.Find("Bullet(Clone)"),0);
		Destroy(gameObject.Find("Wall"),0);
		Destroy(gameObject.Find("Cannon"),0);
		//var particle : ParticleEmitter = gameObject.Find("ParticleEmitter").GetComponent(ParticleEmitter);
		//particle.enabled = true;		
		Instantiate(effect, transform.position, transform.rotation);

	}
		

	
	
}