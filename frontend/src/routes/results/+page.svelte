<script>

    import MdAttachMoney from 'svelte-icons/md/MdAttachMoney.svelte'
    import MdFitnessCenter from 'svelte-icons/md/MdFitnessCenter.svelte'

    import {MvpAnalyze} from '$lib/mvp-analyse.js'
    import {onMount} from 'svelte'

    onMount(async()=>{
        MvpAnalyze("test")
    })



    let items = ["Sora shimano disc brakes", "Tiagra shimano disc brakes", "Grx shimano disc brakes"]

    //TODO on this page
    /*
    - Finish the design
    - Give functionality to the buttons
    - Make a nice loading animation when switching from quiz route
    - In making it desktop responsive remove overflow x and and align self center on suggested items container
    */

</script>

<main>
    <div id="heading">
        Your Results
    </div>

    <div id="affiliate-reminder">
        By purchasing trough our links you support this project at no additional cost to you. 
        <br/> Thank You! 
    </div>

    <div class="price-container">
        <p>
            +- 5 € 
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items as item }
    <div class="suggested-item">
        <div class="item-type">
            <MdFitnessCenter/>
        </div>
        <div class="item-name">
            {item}
        </div>
        <button class="buy-link" on:click={()=>{window.open("https://amazon.com", '_blank');}}>
            Buy on Amazon
        </button>
    </div>
    {/each}
    </div>
    
    <div class="price-container">
        <p>
            +- 10 € 
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items as item }
    <div class="suggested-item">
        <div class="item-type">
            <MdFitnessCenter/>
        </div>
        <div class="item-name">
            {item}
        </div>
        <button class="buy-link" on:click={()=>{window.open("https://amazon.com", '_blank');}}>
            Buy on Amazon
        </button>
    </div>
    {/each}
    </div>

    <div class="price-container">
        <p> 
            +- 20 €
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items as item }
    <div class="suggested-item">
        <div class="item-type">
            <MdFitnessCenter/>
        </div>
        <div class="item-name">
            {item}
        </div>
        <button class="buy-link" on:click={()=>{window.open("https://amazon.com", '_blank');}}>
            Buy on Amazon
        </button>
    </div>
    {/each}
    </div>

    <div class="price-container">
        <p>
            +- 50 € 
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items as item }
    <div class="suggested-item">
        <div class="item-type">
            <MdFitnessCenter/>
        </div>
        <div class="item-name">
            {item}
        </div>
        <button class="buy-link" on:click={()=>{window.open("https://amazon.com", '_blank');}}>
            Buy on Amazon
        </button>
    </div>
    {/each}
    </div>

    <div id="footer">
        <div id="better-suggestions">Want better suggestions?</div>
        <div id="better-suggestion-tips">
            Dummy text on how to get better suggestions random words from now on to fill the space and make it the length
        </div>
        <button
        id="take-quiz-again" 
        on:click={()=>{ window.location.replace("/quiz")}}>
            Take the quiz again
        </button>

        <div id="disclaimer">
            *By clicking this button all your <br/> current suggestions will dissapear
        </div>
    </div>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
    }

    #heading{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 42px;
        align-self: center;
        font-family: "Roboto Mono";
        color: rgb(236, 236, 236);
    }

    #affiliate-reminder{
        font-family: "Roboto Mono";
        font-size: 17px;
        margin: 5px 10px 0px 10px;
        text-align: center;
        min-height: fit-content;
        color: rgb(122, 122, 122);
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.252);
    }

    .price-container{
        margin-top: 20px;
        margin-bottom: 20px;

        margin: 20px 10px 20px 10px;
        width: 80vw;
        align-self: center;
        display: flex;
        justify-content: center;        


        border-bottom: 1px solid white;
    }

    .price-container > * {
        background-color: rgb(35, 35, 35);
        color: rgb(255, 255, 255);
        font-size: 22px;
        font-family: "Oswald";
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
        
    }

    .suggested-items-container{
        display: flex;
        overflow-x: scroll;
    }

    @media (min-width: 718px){
        .suggested-items-container{
            overflow-x: visible;
            justify-content: center;
        }
    }
    
    .suggested-item{
        color: white;
        display: flex;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 10px;
        min-width: 200px;
        min-height: 150px;
    }

    .item-type{
        height: 70px;
        padding: 10px;
        padding-bottom: 15px;
    }

    .buy-link{
        text-decoration: none;
        border: 1px solid rgb(23, 23, 23);
        background-color: #F6C90E;
        color: rgb(29, 29, 29);
        width: 50%;
        border-radius: 10px;
        text-align: center;
        align-self: center;
        margin-top: 10px;;
        margin-bottom: 15px;
        padding: 5px 0px 5px 0px;
        font-weight: 600;
        font-family: "Roboto Mono";
        font-size: 13px;

        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    }

    .buy-link:hover{
        cursor: pointer;
    }

    .item-name{
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
        height: 35px;
        font-family: "Roboto";
    }

    #footer{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        background-color: rgb(25, 25, 25);
        padding-top: 20px;
        border-top: 1px solid rgb(41, 41, 41);
        align-items: center;
    }

    #better-suggestions{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        color: rgb(190, 185, 162);
        font-weight: 400;
        font-size: 32px;
        align-self: center;
        text-align: center;
        font-family: "Oswald";
    }

    #better-suggestion-tips{
        font-weight: 100;
        font-size: 22px;
        text-align: center ;
        color: rgb(135, 135, 135);
        width: fit-content;
        margin: 0px 20px 38px 20px;
    }

    #take-quiz-again{
        color: white;
        border: none;
        background-color: #F6C90E;
        color: black;

        font-family: "Roboto Mono";
        font-weight: 600;
        font-size: 16px;

        width: 50%;
        min-width: 280px;
        height: 42px;
        border-radius: 10px;
        margin-bottom: 10px;

        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    }

    #take-quiz-again:hover{
        cursor: pointer;
    }

    #disclaimer{
        color: rgb(92, 92, 92);
        text-align: center;
        font-family: "Roboto Mono";
        margin-bottom: 30px;
        font-size: 10px;
    }

</style>
