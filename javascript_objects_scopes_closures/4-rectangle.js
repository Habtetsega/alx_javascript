class Rectangle{
        w;
        h;
        constructor(w,h){
                this.width = w;
                this.height = h;
                if (h<=0 && w<=0){
                        const sth = new object{};
                }
        }
        print(){
                let w = this.width;
                let h = this.height;
                for(let j=0; j<h; j++){
                        for(let i=0; i<w; i++){
                                console.log("x")
                        }
                        console.log("\n")
                }
        }
	rotate(){
		let h = this.width;
                let w = this.height;
		for(let j=0; j<h; j++){
                        for(let i=0; i<w; i++){
                                console.log("x")
                        }
                        console.log("\n")
                }
	}
	double(){
		let w = this.width*2;
                let h = this.height*2;
                for(let j=0; j<h; j++){
                        for(let i=0; i<w; i++){
                                console.log("x")
                        }
                        console.log("\n")
                }
	}
}