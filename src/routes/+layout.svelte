<style>
:global(*){
    font-family: 'Roboto Mono',sans-serif;
}

:global(body){
    margin: 0;
    padding: 0;
    background-color: rgb(21, 21, 21);
    width: 100vw;
    height: 100vh;
    min-height: fit-content;
    overflow-x: hidden;
}    
</style>

<slot/>

<svelte:head>
    <script data-goatcounter="https://smravec.goatcounter.com/count"
            async src="https://gc.zgo.at/count.js"></script>
</svelte:head>
