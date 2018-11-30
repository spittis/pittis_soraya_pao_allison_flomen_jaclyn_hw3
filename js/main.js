//JS
(() => {
    //init the vue stuff!
    const vm = new Vue({
        el : "#app",

        data : {
            message : "Welcome to our AV app!",

            cardata : [],
            singledata : [],

            cartitle : "",
            cardescription : "",
            carsource : "",

            showDetails : false 
        },

        created : function() {
            //get all of the car data ib the oage load
            this.fetchCarData(null); //this is where we would fetch PHP stuff
        },

        methods : {
            login() {
                //stub
                console.log('login functionality');
            },

            fetchSingle(e) {
                //debugger;
                this.fetchCarData(e.currentTarget.dataset.fact);
            },

            loadCar(e) { //use to open lightbox in portfolio
                //debugger;
                e.preventDefault(); //block a page reload (anchor tag default behaviour)
                
                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.cardata.filter(fact => fact.mov_path === dataKey);

                this.cartitle = currentData[0].title;
                this.cardescription = currentData[0].info;
                this.carsource = dataKey;

                this.showDetails = true;

                setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
            },

            fetchCarData(fact) {
               let url = fact ?`./includes/index.php?tbl_features=${fact}` : './includes/index.php'; 
                //this is a ternary statement, shorthand if else statement. left of : is true, right is false
            
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (fact) {
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