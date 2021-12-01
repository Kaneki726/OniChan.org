let titels=[ 'Death Note', 'Attack on Titan', 'Akame ga Kill', 'Sword Art Online', 'Kyoukai no Kanata', 'Shokugeki no Soma', 'Re:Zero', 'Darling in the Franxx', 'Assasination Classroom', 'One Pice', 'Seven deadly sins', 'The Seraph of the End ', 'Bungou Stray Dogs']
let ages=['2000-2010', '2000-2010', '2014', '2012', '2013', '2015','2016', '2018', '2013', '1999', '2014','2015', '2016' ]
let pictures=['pictures/6797636b433b90809af67231c90e0244.jpg', 'pictures/attack-on-titan-poster-02.png']
let genre=['мистика', 'драма' ]


function changeYear(argument) {
	console.log(document.getElementById('changeYear').value);
	document.getElementById('intro2').innerHTML='';
	for(let i=0; i<ages.length; i++){
		if (ages[i]==document.getElementById('changeYear').value) {
			console.log(titels[i])
			let h2=document.createElement('h2');
			h2.innerHTML=titels[i]
			//document.getElementById('intro2').appendChild(h2);

			let img=document.createElement('img');
			img.src=pictures[i]
			//document.getElementById('intro2').appendChild(div);

			let div=document.createElement('div')
			div.appendChild(h2)
			div.appendChild(img)
			document.getElementById('intro2').appendChild(div);



		}
	}
}

function changeGenre (argument) {
	document.getElementById('intro2').innerHTML='';
	for(let i=0; i<genre.length; i++){
		console.log(genre[i])
		if (genre[i]==document.getElementById('changeGenre').value) {
			console.log(titels[i])
			let h2=document.createElement('h2');
			h2.innerHTML=titels[i]
			//document.getElementById('intro2').appendChild(h2);

			let img=document.createElement('img');
			img.src=pictures[i]
			//document.getElementById('intro2').appendChild(div);

			let div=document.createElement('div')
			div.appendChild(h2)
			div.appendChild(img)
			document.getElementById('intro2').appendChild(div);
		}
	}
}	