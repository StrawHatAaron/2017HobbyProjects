using UnityEngine;
using System.Collections;

public class moveIfClicked : MonoBehaviour {

		private float currentFloor = 1f;
		private float downOneFloor = -1f;
		private float upOneFloor = 1f;
		

	IEnumerator Wait() {
		print(Time.time);
		yield return new WaitForSeconds(500);
		print(Time.time);
	}

		void Update(){

			if (currentFloor == upOneFloor) {
				currentFloor = downOneFloor;
			transform.Translate (0f, upOneFloor * 10f * Time.deltaTime, 0f);
			}
			else{
				currentFloor = upOneFloor;
			transform.Translate (0f, downOneFloor * 10f * Time.deltaTime, 0f);
			}
		Wait ();

		}




}
