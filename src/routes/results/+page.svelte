<script>
    import MdFitnessCenter from 'svelte-icons/md/MdFitnessCenter.svelte'

    import GoGift from 'svelte-icons/go/GoGift.svelte'
    import {MvpAnalyze} from '$lib/mvp-analyze.js'
    import {Quiz} from '$lib/mvp-analyze.js'
    import {onMount} from "svelte"

    let results = []
    let items_5 = []
    let items_10 = []
    let items_20 = []
    let items_50 = []

    let loading = false

    onMount(()=>{
        //If quiz is not answered yet
        if( $Quiz.length === 0 ){
            window.location.replace("/quiz")
        }
        //Analyze quiz answers
        else{
            loading = true
            setTimeout(()=>{loading=false},2000)
            results = MvpAnalyze($Quiz)
            items_5 = results[0]
            items_10 = results[1]
            items_20 = results[2]
            items_50 = results[3]
        }
    })
</script>

<main>
    {#if loading}
    <div id ="loading-overlay">
        <div id="spinner"></div>
        <div id="analyzing">Analyzing your answers</div>
    </div>
    {/if}

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
    {#each items_5 as item }
    <div class="suggested-item">
        {#if item[3] == false}
            <button 
            class="item-type"
            on:click={()=>{
                item[3] = true
            }}>
                <GoGift/>
            </button>
            <div class="item-name">
                {item[0]}
            </div>
            <button class="buy-link" on:click={()=>{window.open("https://amazon.de/s?k=" + item[0].replace(/\s/g, '+'), '_blank');}}>
                Buy  on<br/> Amazon
            </button>
        {:else}
            <button
            class="item-description"
            on:click={()=>{
                item[3] = false
            }}>
                {item[1]}
            </button>
        {/if}
    </div>
    {/each}
    </div>
    
    <div class="price-container">
        <p>
            +- 10 € 
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items_10 as item }
    <div class="suggested-item">
        {#if item[3] == false}
            <button 
            class="item-type"
            on:click={()=>{
                item[3] = true
            }}>
                <GoGift/>
            </button>
            <div class="item-name">
                {item[0]}
            </div>
            <button class="buy-link" on:click={()=>{window.open("https://amazon.de/s?k=" + item[0].replace(/\s/g, '+'), '_blank');}}>
                Buy  on<br/> Amazon
            </button>
        {:else}
            <button
            class="item-description"
            on:click={()=>{
                item[3] = false
            }}>
                {item[1]}
            </button>
        {/if}
    </div>
    {/each}
    </div>

    <div class="price-container">
        <p> 
            +- 20 €
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items_20 as item }
    <div class="suggested-item">
        {#if item[3] == false}
            <button 
            class="item-type"
            on:click={()=>{
                item[3] = true
            }}>
                <GoGift/>
            </button>
            <div class="item-name">
                {item[0]}
            </div>
            <button class="buy-link" on:click={()=>{window.open("https://amazon.de/s?k=" + item[0].replace(/\s/g, '+'), '_blank');}}>
                Buy  on<br/> Amazon
            </button>
        {:else}
            <button
            class="item-description"
            on:click={()=>{
                item[3] = false
            }}>
                {item[1]}
            </button>
        {/if}
    </div>
    {/each}
    </div>

    <div class="price-container">
        <p>
            +- 50 € 
        </p>
    </div>
    <div class="suggested-items-container">
    {#each items_50 as item }
    <div class="suggested-item">
        {#if item[3] == false}
            <button 
            class="item-type"
            on:click={()=>{
                item[3] = true
            }}>
                <GoGift/>
            </button>
            <div class="item-name">
                {item[0]}
            </div>
            <button class="buy-link" on:click={()=>{window.open("https://amazon.de/s?k=" + item[0].replace(/\s/g, '+'), '_blank');}}>
                Buy  on<br/> Amazon
            </button>
        {:else}
            <button
            class="item-description"
            on:click={()=>{
                item[3] = false
            }}>
                {item[1]}
            </button>
        {/if}
    </div>
    {/each}
    </div>

    <div id="footer">
        <div id="better-suggestions">Want better suggestions?</div>
        <div id="better-suggestion-tips">
            Try to select as much answers as possible in each question to improve the quality of the results.
            The algorithm outputs different suggestions each time, so retaking the quiz even with the same answers most of the time outputs different and potentially better suggestions.
        </div>
        <button
        id="take-quiz-again" 
        on:click={()=>{ window.location.replace("/quiz")}}>
            Take the quiz again
        </button>

        <div id="disclaimer">
            *By clicking this button all your <br/> current suggestions will disappear
        </div>
    </div>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
    }

    #loading-overlay {
        position: fixed; /* Use fixed instead of absolute to cover the whole page even when scrolled */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(21, 21, 21); /* Semi-transparent white background */
        z-index: 9999; /* High z-index to make sure it's above everything else */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        animation: loading 1s;
        animation-timing-function: ease-in;
    }

    @keyframes loading{
        0%{
            background: rgb(8, 8, 8);
        }
        100%{
            background: rgb(21, 21, 21);
        }
    }

    #spinner {
        border: 5px solid #2a2a2a; /* Light grey */
        border-top: 5px solid #F6C90E; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
        margin-top: -50px;
    }

    #analyzing{
        margin-top: 20px;
        font-size: 18px;
        font-family: "Roboto Mono";
        color: rgb(119, 119, 119);
    }


    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @keyframes item-loading {
        0%{
            color: transparent;
        }

        91%{
            color: transparent;
        }

        100%{
            background-color: transparent;
        }
    }

    @keyframes flow {
        0% {
            opacity: 50%;
            transform: translateX(-10px);
        }

        91% {
            opacity: 50%;
            transform: translateX(-10px);
        }

        100%{
            opacity: 100%;
            transform: translateX(0px);
        }
    }   

    #heading{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 42px;
        align-self: center;
        color: rgb(236, 236, 236);
    }

    #affiliate-reminder{
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

        animation: flow 300ms;
        animation-timing-function: ease-in;   
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
        width: 200px;
        height: 190px;

        animation: item-loading 2200ms;
    }

    .item-type{
        background-color: transparent;
        border: none;

        font-size: 28px;
        color: white;

        height: 80px;
        padding: 10px;
        padding-bottom: 15px;
        width: 200px;
    }

    .item-type:hover{
        cursor: pointer;
        color: rgb(209, 209, 209);
    }

    .item-description{
        width: 200px;
        height: 100%;
        background-color: transparent;
        color: white;
        padding: 2px 10px 2px 10px;
        font-size: 20px;
        border: none;
    }

    .item-description:hover{
        cursor: pointer;
        color: rgb(209, 209, 209);
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
        font-size: 13px;

        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    }

    .buy-link:hover{
        cursor: pointer;

        transition: 250ms;
        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 8px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
    }

    .item-name{
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
        height: 35px;
    }

    #footer{
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        background-color: rgb(25, 25, 25);
        padding-top: 20px;
        border-top: 1px solid rgb(41, 41, 41);
        align-items: center;
        height: fit-content;
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
    }

    #better-suggestion-tips{
        font-weight: 100;
        font-size: 17px;
        text-align: center ;
        color: rgb(135, 135, 135);
        width: fit-content;
        margin: 0px 10px 45px 20px;
        text-align: left;

        animation: item-loading 2250ms;
        animation-timing-function: ease-in;
    }

    #take-quiz-again{
        color: white;
        border: none;
        background-color: #F6C90E;
        color: #000000;
        font-family: "Oswald";

        font-size: 28px;
        padding: 5px 20px 5px 20px;

        width: 50%;
        min-width: 280px;
        border-radius: 10px;
        margin-bottom: 10px;

        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    }

    #take-quiz-again:hover{
        cursor: pointer;
        transition: 250ms;

        /*Glow effect*/
        -webkit-box-shadow:0px 0px 30px 8px rgba(255,238,46,0.33);
        -moz-box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
        box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
    }

    #disclaimer{
        color: rgb(92, 92, 92);
        text-align: center;
        margin-bottom: 30px;
        font-size: 10px;
    }
</style>