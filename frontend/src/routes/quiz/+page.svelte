<script>
    
    let Quiz = [["Question1"],["answer1",'answer1'],["Question2"],["answer2",'answer2','answer2','answer2','answer2','answer2','answer2','answer2']]
    let CurrentQuestion = 0

</script>

<main>
    <div id="header">
        <div>Question 1/6</div>
        <div>(Select all that apply)</div>
    </div>
    
    <div id="question">Q1. {Quiz[CurrentQuestion]}</div>
    
        <div id="answer-container">
            {#each Quiz[CurrentQuestion + 1] as Answer }
                <button id="answer">{Answer}</button>
            {/each}
        </div>
    
    <button 
    id="submit"
    on:click={()=>{
    if(CurrentQuestion + 2 <= Quiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2}
    else{
        CurrentQuestion = 0
    }}}>
        {#if CurrentQuestion === Quiz.length - 2  }
            Submit
        {:else}
            Next
        {/if}
        
    </button>
</main>

<style>
    main{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#layout-start{
    justify-content: center;
    height: 100vh;
}

#header{
    display: flex;
    width: 100vw;
    justify-content:space-evenly;
    margin-top: 25px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(60, 60, 60);
}


#question{
    color: white;
}

#answer-container{
    border-radius: 5px;
    padding: 10px;
    width: 70vw;
    display: flex;
    flex-direction: column;
}

#answer{
    border: 1px solid rgb(60, 60, 60);
    background-color: rgb(34, 34, 34);
    border-radius: 7px;
    margin-top: 20px;
    padding: 10px;

    cursor: pointer;
    color:white
}

#submit{
    border: none;
    border: 1px solid rgb(60, 60, 60);    
    border-radius: 8px;

    font-family: "Oswald";
    font-size: 28px;
    font-weight: 300;

    padding: 2px 20px 2px 20px;
    margin-top: 20px;
    
    width: 20vw;
    min-width: 140px;

    cursor: pointer;

    background-color: #F6C90E;
    color: rgb(29, 29, 29);
    
    /*Glow effect*/
    -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
}

</style>