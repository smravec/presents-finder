<script>
    
    let Quiz = [["Question1"],["answer1",'answer1'],["Question2"],["answer2",'answer2','answer2','answer2','answer2','answer2','answer2','answer2']]
    let CurrentQuestion = 0
    let Answers = []

    let SelectedAnyAnswer = false

    //TODO on this page
    /*
    - Finish the design
    - Add functionality to the buttons 
    */

</script>

<main>
    
    <div id="question">Q1. {Quiz[CurrentQuestion]}</div>
    
        <div id="answer-container">
            {#each Quiz[CurrentQuestion + 1] as Answer }
                <button 
                id="answer"
                on:click={()=>{
                    SelectedAnyAnswer = true
                }}>
                    {Answer}
                </button>
            {/each}
        </div>
    
    <button 
    disabled={SelectedAnyAnswer ? false : true}
    id={SelectedAnyAnswer ? "submit" : "disabled-submit"}
    on:click={()=>{
    if(CurrentQuestion + 2 <= Quiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2;SelectedAnyAnswer = false}
    else{
        window.location = "/results"
    }}}>
        {#if CurrentQuestion === Quiz.length - 2  }
            Evaluate
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

#submit, #disabled-submit{
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

#disabled-submit{
    background-color: rgb(27, 27, 27);
    border: 1px solid rgb(32, 32, 32);
    color: rgb(42, 42, 42);

    cursor: default;

     /*Glow effect*/
    -webkit-box-shadow:none;
    -moz-box-shadow: none;
    box-shadow: none;
}

</style>