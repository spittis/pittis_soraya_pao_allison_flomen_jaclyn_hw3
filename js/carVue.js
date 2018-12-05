(() => {
    //init the vue stuff!
    const vm = new Vue({
        el : "#app",

        data : {
            welcomemessage : "Auto App",

            cardata : [],
            singledata : [],

            carcategory : "",
            carheader : "",
            carsubheader : "",
            carbody : "",
            carsource : "",

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
                this.fetchCarData(e.currentTarget.dataset.car);
            },

            loadCar(e) { //use to open lightbox in portfolio
                //debugger;
                e.preventDefault(); //block a page reload (anchor tag default behaviour)
                
                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.cardata.filter(tbl_facts => tbl_facts.facts_img === dataKey);

                this.carcategory = currentData[0].facts_category;
                this.carheader = currentData[0].facts_header;
                this.carsubheader = currentData[0].facts_subheader;
                this.carbody = currentData[0].facts_body;
                this.carsource = dataKey;

                this.showDetails = true;


            },

            fetchCarData(car) {
               let url = car ?`./includes/index.php?car=${car}` : './includes/index.php'; 
                //this is a ternary statement, shorthand if else statement. left of : is true, right is false
            
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (car) {
                        //store data in the single result above
                        this.cardata = data;
                    } else {
                        //initial data grab, store in the videodata array
                        this.cardata = data;
                    }
                })

                .catch(function(error){
                    console.log(error);
                });

            }
        }

    })

})();