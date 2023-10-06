let num=prompt("enter your number");

let reverse=()=>{
	let c=0;
	for(i=0; i<=num; i++){
		b=num%10;
		num=parseInt(num/10);
		c=c*10+b;
	}
		console.log(`it was reverse ${c}`);

}
reverse()
