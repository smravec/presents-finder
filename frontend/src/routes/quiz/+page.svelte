<script>
    
    let Quiz = [["Your budget"],[["Around 5",false],['Another answer to same question',false]],["Question2"],[["answer2",false],["answer2",false],["answer2",false],["answer2",false],["answer2",false],["answer2",false]]]
    let CurrentQuestion = 0

    let HowMuchAnswersSelected = 0

    //TODO on this page
    /*
    - Finish the design
    - Add functionality to the buttons 
    */

</script>

<main>
    
    <div id="question">{Quiz[CurrentQuestion]}</div>
    
        <div id="answer-container">
            {#each Quiz[CurrentQuestion + 1] as Answer }
                <button 
                id={Answer[1] ? "answer-selected" : "answer"}
                on:click={()=>{
                    if(Answer[1] === false){
                        HowMuchAnswersSelected += 1
                        Answer[1] = true
                    }
                    else{
                        HowMuchAnswersSelected -= 1
                        Answer[1] = false
                    }
                }}>
                    {Answer[0]}
                </button>
            {/each}
        </div>
    
    <button 
    disabled={HowMuchAnswersSelected > 0 ? false : true}
    id={HowMuchAnswersSelected > 0 ? "submit" : "disabled-submit"}
    on:click={()=>{
    if(CurrentQuestion + 2 <= Quiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2;HowMuchAnswersSelected = false}
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

#question{
    color: white;
    margin-top: 18px;
    font-size: 28px;
}

#answer-container{
    border-radius: 5px;
    padding: 10px;
    width: 70vw;
    display: flex;
    flex-direction: column;
}

#answer, #answer-selected{
    -webkit-tap-highlight-color: transparent;

    border: 1px solid rgb(60, 60, 60);
    background-color: rgb(34, 34, 34);
    border-radius: 7px;
    margin-top: 20px;
    padding: 10px;     

    font-family: "Roboto Mono";

    cursor: pointer;
    color:white;
}

#answer-selected{    
    background:  #F6C90E;    
    color: rgb(0, 0, 0);
    font-weight: 800;

    border: 1px solid rgb(23, 23, 23);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

#submit, #disabled-submit{
    border: none;
    border: 1px solid rgb(60, 60, 60);    
    border-radius: 8px;

    font-family: "Oswald";
    font-size: 28px;
    font-weight: 500;

    padding: 2px 20px 2px 20px;
    margin-top: 20px;
    
    min-width: 20vw;
    min-width: 140px;

    cursor: pointer;

    background-color: #F6C90E;
    color: rgb(29, 29, 29);

    -webkit-tap-highlight-color: transparent;
    
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