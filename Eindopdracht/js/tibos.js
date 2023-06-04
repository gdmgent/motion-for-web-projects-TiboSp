console.log("tibos.js");
function tibos(fase) {
    console.log("tibos.js: fase = " + fase);
    let section = document.getElementById("tibos");

    if( ! section.init ) {
        section.init = true;
        //eigen animatie
        console.log("tibos.js: init");
        section.tl
        .add("page1")
            .to("#tibos .box",{ 
                backgroundColor: "#dcdbdb",
                background: "url(./img/Controller.png) no-repeat center center / cover",
                top: "25vh",
                width: "20vw",
                height: "17vh",
            },"page1")
            .from("#tibos img:first-of-type",{
                opacity: 0,
                y: -250,
            },"page1")
            .from("#tibos .page1 p:first-of-type",{
                opacity: 0,
                y: -250,
            },"page1")
            
            
        .add("page2")
            .to("#tibos .box",{
                rotation: 380,
                top: "45vh",
                left: "5vw",
                width: "10vw",
                height: "8vh",
            },"page2")
            .from("#tibos .page2 .art1",{
                opacity: 5,
                y: 500,
            }, "page2")
            .from("#tibos .page2 h1",{
                opacity: 0,
                y: -100,
            },"page2")
            .from("#tibos .page2 p",{ 
                opacity: 0,
                x: -250,
            },"page2")
            .from("#tibos .page2 .Donkey",{
                x: -100,
            },"page2")



        .add("page3")
            .to("#tibos .box",{ 
                rotation: 700,
                top: "40vh",
                left: "74vw",
                width: "20vw",
                height: "17vh",
            },"page3")
            
            .from("#tibos .page3 .art2",{
                opacity: 5,
                y: 500,
            }, "page3")
            .from("#tibos .page3 h1",{
                opacity: 0,
                y: -100,
            },"page3")
            .from("#tibos .page3 p",{ 
                opacity: -6,
                y: 100,
            },"page3")
            .from("#tibos .page3 .Link",{
                
                x: 300,
            },"page3")
            .from("#tibos .page3 .OldMan",{
                opacity: -3,
                y: 100,
            },"page3")

        .add("page4")
            .to("#tibos .box",{
                rotation: 15,
                top: "50vh",
                left: "15vw",
                width: "14vw",
                height: "12vh",
            }, "page4")
            
            .from("#tibos .page4 h1",{
                opacity: 0,
                y: -100,
            },"page4")
            .from("#tibos .page4 p",{
                opacity: -2,
            },"page4")
            .from("#tibos .page4 .art3",{
                opacity: 5,
                y: 500,
            }, "page4")
            .from("#tibos .page4 .Mario",{
                opacity: 0,
                y: 500,
            }, "page4")
            .from("#tibos .page4 .Koopa",{
                x: 2000,
            }, "page4")
        
        .add("page5")
            .to("#tibos .box",{
                rotation: 360,
                top: "47vh",
                left: "38vw",
                width: "22vw",
                height: "19vh",
            }, "page5")
            .from("#tibos .page5 .art4",{
                opacity: 5,
                y: 500,
            }, "page5")
            .from("#tibos .page5 h1",{
                opacity: 0,
                y: -100,
            },"page5")
            .from("#tibos .page5 p",{
                opacity: -2,
            },"page5")
            .from("#tibos .page5 .DrWily",{
                opacity: 0,
                y: 1000,
            }, "page5")
            .from("#tibos .page5 .MegaMan",{
                y: 1000,
            }, "page5")

        .add("page6")
            .to("#tibos .box",{
                rotation: 45,
                top: "51vh",
                left: "18vh",
                width: "14vw",
                height: "12vh",
            },"page6")
            .from("#tibos .page6 .art5",{
                opacity: 5,
                y: 500,
            }, "page6")
            .from("#tibos .page6 h1",{ 
                opacity: 0,
                x: -100,
            },"page6")
            .from("#tibos .page6 p",{
                opacity: 0,
                y: 100,
            },"page6")
            .from("#tibos .page6 .Mac",{
                x: -500,
            }, "page6")
            .from("#tibos .page6 .Joe",{
                y: 500,
                opacity: 0,
            }, "page6")







        .add("page7")
            .to("#tibos .box",{ 
                borderRadius: "0",
                backgroundColor: "white",
                rotation: 360,
                left: "40vw",
                top: "calc(50vh - 10vw)",
                width: "20vw",
                height: "20vw",
            } , "page7")

            .from("#tibos .page7 h1",{
                opacity: 0,
                y: -100,
            },"page7")

    }


}
