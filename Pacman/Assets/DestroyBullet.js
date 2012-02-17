var impactEffect : ParticleEmitter;
function OnCollisionEnter(collision : Collision){
	
	if (!(collision.gameObject.name == "Bullet(Clone)" || collision.gameObject.name == "Missile(Clone)"))
	{
		Instantiate(impactEffect, transform.position, transform.rotation);
    	Destroy(gameObject);
	}

}