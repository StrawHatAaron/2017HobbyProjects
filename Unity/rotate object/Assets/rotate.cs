using UnityEngine;
using System.Collections;

public class rotate : MonoBehaviour {
	public bool active;
	public float speed;

	void Start () {
		speed = 5;
	}

	void FixedUpdate () {
		if (active)
			transform.RotateAround (transform.position, Vector3.right, Time.deltaTime * speed);
	}

	void Update () {
		if (Input.GetKeyDown ("a"))
			active = !active;
	}
}
