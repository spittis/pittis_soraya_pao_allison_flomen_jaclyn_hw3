//JS
(() => {

    //AJAX call
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




//Vue 

const vm = new Vue({
    el : "#app",
    data : {
        cardata : [],
        singledata : [],

        categoryTitle : "",
        sectionTitle : "",
        subHeading : "",
        sectionBody : "",

        showDetails : false 
    },

    created : function() {
        //get all of the movie data ib the oage load
        this.fetchCarData(null); //this is where we would fetch PHP stuff
    },

    methods : {
        login() {
            //stub
            console.log('login functionality');
        },

        fetchSingle(e) {
            //debugger;
            this.fetchCarData(e.currentTarget.dataset.tbl_facts);
        },

        loadCar(e) { //use to open lightbox in portfolio
            //debugger;
            e.preventDefault(); //block a page reload (anchor tag default behaviour)
            
            dataKey = e.currentTarget.getAttribute('href');
            currentData = this.cardata.filter(tbl_facts => tbl_facts.facts_img === dataKey);

            this.categoryTitle = currentData[0].facts_category;
            this.sectionTitle = currentData[0].facts_header;
            this.subHeading = currentData[0].facts_subheader;
            this.sectionBody = currentData[0].facts_body;
            this.facts_img = dataKey;

            this.showDetails = true;

            setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
        },

        fetchCarData(details) {
           let url = details ?`./includes/index.php?facts_header=${details}` : './includes/index.php'; 
            //this is a ternary statement, shorthand if else statement. left of : is true, right is false
        
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (details) {
                    //store data in the single result above
                    this.singledata = data;
                } else {
                    //initial data grab, store in the videodata array
                    this.cardata = data;
                }
            })

                 
            .catch(function(error){
                console.log(error);
            })

        }
    }

})






})();