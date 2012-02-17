var speed : float = 2.5;
var jumpSpeed : float = 5;
var gravity : float = 10.0;
var moveDirection : Vector2 = Vector2.zero;
var facing = "right";

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
        moveDirection = Vector2(Input.GetAxis("Horizontal"), 0);
        //moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump")) {
        	moveDirection.y = jumpSpeed;
            animation.Play("jump_pose");
        }
      
    }
        
    if (Input.GetKeyDown("right"))
    {
    	if (facing != "right"){
    		facing = "right";
    	}
   		if (transform.rotation.y != 0)
   		{
    		transform.rotation.y = 0;
    		animation.Play("Action");
    		//transform.LookAt(transform.position-transform.forward); <-- outra resolução
   		}	
    }
    if (Input.GetKeyDown("left"))
    {
    	if (facing != "left"){
    		facing = "left";
    	}
    	if (transform.rotation.y != 180)
    	{
    		transform.rotation.y = 180;
    		animation.Play("Action");
    		//transform.LookAt(transform.position-transform.forward); <-- outra resolução
    	}
    }
    
    moveDirection.y -= gravity * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
   
   
}