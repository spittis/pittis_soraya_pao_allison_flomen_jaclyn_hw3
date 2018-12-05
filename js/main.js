(() => {
    const facts = document.querySelectorAll('.SVG');
    
    function getData(){
            console.log(this);
            let targetURL = `includes/connect.php?features_ID=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query
            fetch (targetURL) // go get the data and bring it back! good doggy
            .then(res => res.json()) //turn the result into a plain JS object
            .then(data => {
                console.log(data);
                //run a function to parse our data
                showData(data[0]);
            }) //lets see what we got
            .catch(function(error) {
                console.log(error); //if anything broke, log it to the console
            });

            function showData(data) {
                //debugger;
                //parse the DB info and put it where it needs to go
                const { features_title, features_info } = data; //destructuring assignment => MDN JS destructuring
                //grab the elements we need, and populate them with data
                document.querySelector('.title1').textContent = features_title;
                document.querySelector('.info1').textContent = features_info;
            }
        };

        facts.forEach(facts => facts.addEventListener("click", getData));
    
        //getData(); //trigger the getData function

    })();
    
