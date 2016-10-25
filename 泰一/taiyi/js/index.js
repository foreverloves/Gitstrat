var nav = document.getElementById('nav');
		var nav_img = document.getElementById('nav_img');
		var navLi = nav.getElementsByTagName('li');
		var imgLi= nav_img.getElementsByTagName('li');
		for(var i=0;i<navLi.length;i++){
			navLi[i].setAttribute('it',i);
			navLi[i].onclick =function(){
				for(var j=0;j<imgLi.length;j++){
					navLi[j].className='';
				}
				this.className='nav_check';
				var tmp = this.getAttribute('it');
				for(var j=0;j<imgLi.length;j++){
					imgLi[j].className='';
				}
				imgLi[tmp].className = 'show';
			}


		}
		var n = 0
		function test(){
			n++;
			if(n==5){
				n=0;
			}
			navLi[n].click();
		}
		tId = setInterval(test,3000);
		var prev = document.getElementById('prev');
		prev.onclick = function(){
			clearInterval(tId);
			n--;
			if(n<0){
				n=4;
			}
			navLi[n].click();
			tId = setInterval(test,3000);
		}
		var prec = document.getElementById('prec');
		prec.onclick = function(){
			clearInterval(tId);
			n++;
			if(n>4){
				n=0;
			}
			navLi[n].click();
			tId = setInterval(test,3000);
		}