<script>

    import MdAttachMoney from 'svelte-icons/md/MdAttachMoney.svelte'
    import MdFitnessCenter from 'svelte-icons/md/MdFitnessCenter.svelte'

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

    <button 
    on:click={()=>{ window.location.replace("/quiz")}}>
        Take the quiz again
    </button>

    <div id="heading">
        Results
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
        <a class="buy-link" href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>
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
        <a class="buy-link" href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>
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
        <a class="buy-link" href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>
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
        <a class="buy-link" href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>
    </div>
    {/each}
    </div>

</main>

<style>
    main{
        display: flex;
        flex-direction: column;
    }

    #heading{
        font-size: 50px;
        align-self: center;
    }

    div{
        color: white;
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
        color: rgb(42, 42, 42);
        background-color: yellow;
        width: 50%;
        border-radius: 10px;
        text-align: center;
        align-self: center;
        margin-top: 10px;;
        margin-bottom: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .item-name{
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
        height: 35px;
    }


    
</style>
