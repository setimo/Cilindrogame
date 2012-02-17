var losRange : Vector2;
private var hit : RaycastHit;

function Update () {
	
	losRange = Vector2(-2.0, 1.6);

    if (Physics.Linecast(losRange, transform.position, hit)) {
        print ("Blocked by " + hit.collider.name);
       	if (hit.collider.name == "Cilindromar"){
       		
       	}
    }
}