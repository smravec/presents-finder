<script>
    
    let items = ["Sora shimano disc brakes", "Tiagra shimano disc brakes", "Grx shimano disc brakes"]

    //TODO on this page
    /*
    - Finish the design
    - Give functionality to the buttons
    - Make a nice loading animation when switching from quiz route
    */

</script>

<main>

    <button>
        More suggestions
    </button>

    <button>
        Take the quiz again
    </button>


    <div>5</div>
    {#each items as item }
    
        <div id="suggested-item">
            {item}
        </div>
        <a href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>

    {/each}
    
    <div>10</div>
    {#each items as item }
    
        <div id="suggested-item">
            {item}
        </div>
        <a href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>

    {/each}

    <div>20</div>
    {#each items as item }
    
        <div id="suggested-item">
            {item}
        </div>
        <a href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>

    {/each}

    <div>50</div>
    {#each items as item }
    
        <div id="suggested-item">
            {item}
        </div>
        <a href="https://amazon.com" target="_blank">
            Buy on Amazon
        </a>

    {/each}

</main>

<style>
    #suggested-item{
        color: white;
    }

    div{
        color: white;
    }

    
</style>