document.addEventListener('click' ,function (){
	let first = document.getElementById('user_input1').value;
	let second = document.getElementById('user_input2').value;
	let third = document.getElementById('user_input3').value; 
	let fourth = document.getElementById('user_input4').value;
	let fifth = document.getElementById('user_input5').value;
	
	if (first && second && third && fourth && fifth!= 0){
		let testCount= 0;
		if(localStorage.getItem('test-count') == null){
			localStorage .setItem('test-count' ,0);
			testCount = 0;
		}
		else{
			testCount = localStorage.getItem('test-count');
		}
	
		localStorage.setItem('test-'+((testCount*1)+1),first);
		localStorage.setItem('test-'+((testCount*1)+2),second);
		localStorage.setItem('test-'+((testCount*1)+3),third);
		localStorage.setItem('test-'+((testCount*1)+4),fourth);
		localStorage.setItem('test-'+((testCount*1)+5),fifth);
		
		localStorage.setItem('test-count',((testCount*1)+5));
		console.log('proceed');
		

		let testCountNumber = (testCount*1)+5;
		let content = "";
		for(let a = 1; a<= testCountNumber; a++){
			content += "<li>" + localStorage.getItem('test-'+a)+"</li>";
		}
		document.getElementById('display_list').innerHTML = content;
		document.getElementById('user_input1').value = "";
		document.getElementById('user_input2').value = "";
		document.getElementById('user_input3').value = "";
		document.getElementById('user_input4').value = "";
		document.getElementById('user_input5').value = "";		
	}
});